<template>
  <q-card>
    <q-form @submit="onSubmit">
      <q-stepper v-model="step" vertical color="primary" animated>
        <!-- ---------------------------step 1 --------------------------------------->
        <q-step
          :name="1"
          title="Date et heure "
          icon="event"
          :done="step > 1"
          active-color="secondary"
        >
          <div>
            <div class="text-h6">Choisissez une date et une heure</div>
            <div class="row justify-center q-mt-md">
              <q-date v-model="date" class="q-ma-md" color="secondary" />
              <q-time v-model="time" class="q-ma-md" color="secondary" />
            </div>
          </div>

          <q-stepper-navigation>
            <q-btn @click="step = 2" color="primary" label="Continuer" />
          </q-stepper-navigation>
        </q-step>
        <!-- ---------------------------step 2 --------------------------------------->
        <q-step
          :name="2"
          title="Commentaire"
          icon="mode_comment"
          :done="step > 2"
          active-color="secondary"
        >
          <div>
            <q-input
              type="textarea"
              color="secondary"
              label="Ajoutez un commentaire"
              v-model="commentaire"
            />
          </div>

          <q-stepper-navigation>
            <q-btn
              color="primary"
              label="Valider"
              type="submit"
              v-if="type !== 'Recyclage'"
            />
            <q-btn @click="step = 3" color="primary" label="Continuer" v-else />
            <q-btn
              flat
              @click="step = 1"
              color="secondary"
              label="Retour"
              class="q-ml-sm"
            />
          </q-stepper-navigation>
        </q-step>
        <!-- ---------------------------step 3 --------------------------------------->
        <q-step
          :name="3"
          title="Quantité à prendre"
          icon="shopping_basket"
          :done="step > 3"
          active-color="secondary"
          v-if="type == 'Recyclage'"
        >
          <div>
            <div>
              <q-checkbox
                v-model="check"
                label="Prendre toute la quantité disponible"
                color="secondary"
              />
              <div v-if="!check" class="row items-center">
                <div>Saisisez la quantité à prendre</div>
                <TextInput label="Quantité" v-model="quantite" />
              </div>
            </div>
          </div>

          <q-stepper-navigation>
            <q-btn color="primary" label="Valider" type="submit" />
            <q-btn
              flat
              @click="step = 2"
              color="secondary"
              label="Retour"
              class="q-ml-sm"
            />
          </q-stepper-navigation>
        </q-step>
      </q-stepper>
    </q-form>
  </q-card>
</template>

<script>
import { ref } from "vue";
import TextInput from "../inputs/TextInput.vue";
import { apiUrl } from "src/constants/constants";
import axios from "axios";
import { useQuasar } from "quasar";
import { store } from "src/layouts/MainLayout.vue";
export default {
  components: {
    TextInput,
  },
  props: {
    id: Number,
    type: String,
  },
  setup(props) {
    let today = new Date();
    const $q = useQuasar();
    const commentaire = ref("");
    const quantite = ref("");
    const time = ref(today.getHours() + ":" + today.getMinutes());
    const date = ref(
      today.getFullYear() + "/0" + today.getMonth() + "/" + today.getDate()
    );
    const check = ref(true);
    return {
      commentaire,
      quantite,
      check,
      step: ref(1),
      date,
      time,

      onSubmit() {
        if (check.value) {
          quantite.value = "Tout";
        }
        axios
          .post(apiUrl + "/annonce/" + props.type + "/addReserver", {
            idAnnonce: props.id,
            quantite: quantite.value,
            date: date.value,
            commentaire: commentaire.value,
            heure: time.value,
            idReserveur: store.id_user,
          })
          .then((res) => {
            // afficher la dialog
            $q.dialog({
              title: "Réservation enregistrée",
              message: "L'annonceur vous recontactera",
            })
              .onOk(() => {
                window.location.reload();
              })
              .onCancel(() => {})
              .onDismiss(() => {});
          })
          .catch((err) => {
            console.log("erreur ajout annonces" + err);
          });
      },
    };
  },
};
</script>

<style></style>
