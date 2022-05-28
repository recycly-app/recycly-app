<template>
  <q-form @submit="onSubmit">
    <div class="row">
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
        <TextInput type="text" icon="title" label="Titre" v-model="titre" />
      </div>
      <div>
        <SelectInput
          :options="etatOptions"
          icon="beenhere"
          label="Etat"
          v-show="type == 'Reconditionnement'"
          @send-value="setEtat"
        />
        <TextInput
          type="number"
          suffix="DA"
          icon="payments"
          label="Prix"
          v-model="prix"
        />

        <LocalisationButtun @send-coords="setCoords" />
      </div>
    </div>
    <div>
      <q-input
        v-model="description"
        filled
        clearable
        type="textarea"
        color="secondary"
        label="Description"
        class="q-ma-sm"
      />
    </div>
    <div>
      <div class="q-gutter-md row items-start">
        <q-file filled v-model="image" label="Filled" />
      </div>
      <q-btn label="Valider" type="submit" color="light-green-8" />
    </div>
  </q-form>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import SelectInput from "../inputs/SelectInput.vue";
import TextInput from "../inputs/TextInput.vue";
import { categorieOptionRecondi } from "src/constants/categorie";
import { categorieOptionRecyclage } from "src/constants/categorie";
import { store } from "src/layouts/MainLayout.vue";
import { apiUrl } from "src/constants/constants";
import { useQuasar } from "quasar";
import LocalisationButtun from "../map/LocalisationButtun.vue";
export default {
  name: "FormAnnonce",
  props: { isLogged: Boolean },
  components: {
    SelectInput,
    TextInput,
    LocalisationButtun,
    LocalisationButtun,
  },
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
  },
  setup() {
    const type = ref(null);
    const titre = ref(null);
    const description = ref(null);
    const prix = ref(null);
    const categorie = ref(null);
    const etat = ref(null);
    const lieu = ref(null);
    const $q = useQuasar();
    const image = ref(null);

    return {
      type,
      titre,
      categorie,
      categorieOptionRecondi,
      categorieOptionRecyclage,
      lieu,
      etat,
      prix,
      description,
      typeOptions: ["Recyclage", "Reconditionnement"],
      etatOptions: ["bon", "mauvais"],
      image,
      alert,

      onSubmit() {
        let formData = new FormData();

        formData.append("image", image.value);
        formData.append("titre", titre.value);
        formData.append("description", description.value);
        formData.append("date", new Date());
        formData.append("idAnnonceur", store.id_user);
        formData.append("prix", prix.value);
        formData.append("etat", etat.value);
        formData.append("categorie", categorie.value);
        formData.append("lieuRecuperation", lieu.value);

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
              .onOk(() => {})
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
