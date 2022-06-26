<template>
  <div class="q-pa-md full-width">
    <q-form @submit="onSubmit">
      <q-stepper v-model="step" vertical color="primary" animated>
        <q-step
          :name="1"
          title="Sélectionnez le type de l'annonce"
          icon="settings"
          :done="step > 1"
          active-color="secondary"
        >
          <div>
            <SelectInput
              v-bind:options="typeOptions"
              icon="list"
              label="Type"
              v-model="type"
              @send-value="setType"
            />
            <SelectInput
              :options="categorieOptionRecondi"
              icon="list"
              label="Catégorie"
              @send-value="setCategorie"
              v-if="type == 'Reconditionnement'"
            />
            <SelectInput
              :options="categorieOptionRecyclage"
              icon="list"
              label="Catégorie"
              @send-value="setCategorie"
              v-else
            />
          </div>

          <q-stepper-navigation>
            <q-btn @click="step = 2" color="primary" label="Continuer" />
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="2"
          title="Saisissez les informations de l'annonce"
          icon="create_new_folder"
          :done="step > 2"
          active-color="secondary"
        >
          <TextInput type="text" icon="title" label="Titre" v-model="titre" />
          <q-input
            v-model="description"
            filled
            clearable
            type="textarea"
            color="secondary"
            label="Description"
            class="q-ma-sm"
          />
          <div class="row">
            <TextInput
              type="number"
              suffix="DA"
              icon="payments"
              label="Prix"
              v-model="prix"
            />
            <TextInput
              type="text"
              label="Quantité"
              v-model="quantite"
              v-if="type == 'Recyclage'"
            />
          </div>
          <q-stepper-navigation>
            <q-btn @click="step = 3" color="primary" label="Continuer" />
            <q-btn
              flat
              @click="step = 1"
              color="secondary"
              label="Retour"
              class="q-ml-sm"
            />
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="3"
          title="Inserez les images de l'annonce"
          icon="image"
          :done="step > 3"
          active-color="secondary"
        >
          <q-file filled v-model="image" label="Inserez une image" />
          <q-stepper-navigation>
            <q-btn @click="step = 4" color="primary" label="Continuer" />
            <q-btn
              flat
              @click="step = 1"
              color="secondary"
              label="Retour"
              class="q-ml-sm"
            />
          </q-stepper-navigation>
        </q-step>

        <q-step :name="4" title="Lieu de l'annonce" icon="place">
          <SelectInput
            :options="wilayaName"
            icon="list"
            label="Wilaya"
            @send-value="setWilaya"
          />

          <LocalisationButtun @send-coords="setCoords" />

          <q-stepper-navigation>
            <q-btn color="primary" type="submit" label="Valider" />
            <q-btn
              flat
              @click="step = 3"
              color="secondary"
              label="Retour"
              class="q-ml-sm"
            />
          </q-stepper-navigation>
        </q-step>
      </q-stepper>
    </q-form>
  </div>
</template>

<script>
import { ref } from "vue";
import SelectInput from "../inputs/SelectInput.vue";
import TextInput from "../inputs/TextInput.vue";
import { categorieOptionRecondi } from "src/constants/categorie";
import { categorieOptionRecyclage } from "src/constants/categorie";
import { apiUrl, wilayaOption } from "src/constants/constants";
import LocalisationButtun from "../map/LocalisationButtun.vue";
import { useQuasar } from "quasar";
import { store } from "src/layouts/MainLayout.vue";
import axios from "axios";

export default {
  methods: {
    setType(payload) {
      this.type = payload.val;
    },
    setCategorie(payload) {
      this.categorie = payload.val;
    },
    setEtat(payload) {
      this.etat = payload.val;
    },
    setCoords(payload) {
      this.lieu =
        '{"lat":' + payload.coords.lat + ',"lng":' + payload.coords.lng + "}";
    },
    setWilaya(payload) {
      this.wilaya = payload.val;
    },
  },
  setup() {
    let wilayaName = [];
    wilayaOption.map((item) => {
      wilayaName.push(item.name);
    });

    const type = ref(null);
    const titre = ref(null);
    const description = ref(null);
    const prix = ref(null);
    const categorie = ref(null);
    const quantite = ref(null);
    const lieu = ref(null);
    const wilaya = ref(null);
    const $q = useQuasar();
    const image = ref(null);
    return {
      wilayaName,
      categorieOptionRecyclage,
      categorieOptionRecondi,
      wilayaOption,
      typeOptions: ["Recyclage", "Reconditionnement"],
      step: ref(1),
      wilaya,
      type,
      titre,
      quantite,
      categorie,
      lieu,
      prix,
      description,
      image,
      alert,
      onSubmit() {
        let formData = new FormData();
        let date = new Date();
        let dateAnnonce =
          date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();

        formData.append("image", image.value);
        formData.append("titre", titre.value);
        formData.append("description", description.value);
        formData.append("date", dateAnnonce);
        formData.append("idAnnonceur", store.id_user);
        formData.append("prix", prix.value);
        formData.append("quantite", quantite.value);
        formData.append("categorie", categorie.value);
        formData.append("lieuRecuperation", lieu.value);
        formData.append("wilaya", wilaya.value);

        axios({
          url: apiUrl + "/annonce/" + type.value + "/create",
          method: "POST",
          data: formData,
        })
          .then((res) => {
            // afficher la dialog
            $q.dialog({
              title: "Annonce publié avec succès",
              message: "Consultez vos annonces dans la section Mes annonces",
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
  components: {
    SelectInput,
    TextInput,
    LocalisationButtun,
  },
};
</script>
