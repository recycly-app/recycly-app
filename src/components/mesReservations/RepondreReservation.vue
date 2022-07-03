<template>
  <div>
    <q-card>
      <q-card-section class="q-pa-sm">
        <div>Répondez à {{ reserveur.prenom }} {{ reserveur.nom }}</div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn
          flat
          icon="done"
          label="Accepter"
          color="green-6"
          @click="accepter()"
        />
        <q-btn
          flat
          icon="close"
          label="Refuser"
          color="red-6"
          @click="showDialogMotifRefus()"
        />
        <q-btn flat label="Fermer" v-close-popup />
      </q-card-actions>
    </q-card>

    <q-dialog v-model="showMotifRefus">
      <q-card class="q-pa-md row full-width">
        <q-input
          type="textarea"
          label="Préciser le motif de refus"
          class="full-width"
          color="secondary"
          v-model="motifRefus"
        />
        <q-btn flat label="Valider" color="green-6" @click="refuser()" />
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { apiUrl } from "../../constants/constants";
import { useQuasar } from "quasar";

export default {
  props: {
    reserveur: Object,
    annonce: Object,
    type: String,
  },

  setup(props) {
    const showMotifRefus = ref(false);
    const motifRefus = ref("");
    const $q = useQuasar();

    function showDialogMotifRefus() {
      showMotifRefus.value = true;
    }

    return {
      showMotifRefus,
      motifRefus,
      showDialogMotifRefus,
      accepter() {
        axios
          .put(
            apiUrl +
              "/annonce/Recyclage/accepterReservation/" +
              props.annonce.id_reservation +
              "/accepter"
          )
          .then(() => {
            $q.dialog({
              title: "Vous avez accepté la réservation",
            }).onOk(() => {
              window.location.reload();
            });
          })
          .catch((err) => console.log(err));

        axios
          .post(apiUrl + "/annonce/Recyclage/addNotification", {
            idReservation: props.annonce.id_reservation,
            date_heure: new Date(),
          })
          .then((res) => {})
          .catch((err) => console.log(err));
      },

      refuser() {
        axios
          .put(
            apiUrl +
              "/annonce/" +
              props.type +
              "/accepterReservation/" +
              props.annonce.id_reservation +
              "/refuser",
            {
              motifRefus: motifRefus.value,
            }
          )
          .then((res) => {})
          .catch((err) => console.log(err));

        axios
          .post(apiUrl + "/annonce/" + props.type + "/addNotification", {
            idReservation: props.annonce.id_reservation,
            date_heure: new Date(),
          })
          .then((res) => {
            window.location.reload();
          })
          .catch((err) => console.log(err));
      },
    };
  },
};
</script>

<style></style>
