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
        <!-- <SelectInput
          :options="etatOptions"
          icon="beenhere"
          label="Etat"
          v-show="type == 'Reconditionnement'"
          @send-value="setEtat"
        /> -->
        <TextInput
          type="number"
          suffix="DA"
          icon="payments"
          label="Prix"
          v-model="prix"
        />
        <TextInput type="text" icon="place" label="Lieu" v-model="lieu" />
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
        <FilesPicker />
      </div>
      <q-btn label="Valider" type="submit" color="light-green-8" />
    </div>
  </q-form>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import SelectInput from "../inputs/SelectInput.vue";
import FilesPicker from "../inputs/FilesPicker.vue";
import TextInput from "../inputs/TextInput.vue";
import { categorieOptionRecondi } from "src/constants/categorie";
import { categorieOptionRecyclage } from "src/constants/categorie";
import { store } from "src/layouts/MainLayout.vue";
import { apiUrl } from "src/constants/constants";
import { useQuasar } from "quasar";

export default {
  name: "FormAnnonce",
  props: { isLogged: Boolean },
  components: { SelectInput, FilesPicker, TextInput },
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
  },
  setup() {
    const type = ref(null);
    const titre = ref(null);
    const description = ref(null);
    const prix = ref(null);
    const categorie = ref(null);
    // const etat = ref(null);
    const lieu = ref(null);
    const $q = useQuasar();
    return {
      type,
      titre,
      categorie,
      categorieOptionRecondi,
      categorieOptionRecyclage,
      lieu,
      // etat,
      prix,
      description,
      typeOptions: ["Recyclage", "Reconditionnement"],
      // etatOptions: {1:"", 2:, 3:, 4:, 5:},
      files: ref(null),
      alert,
      counterLabelFn({ totalSize, filesNumber, maxFiles }) {
        return `${filesNumber} files of ${maxFiles} | ${totalSize}`;
      },

      onSubmit() {
        axios
          .post(apiUrl + "/annonce/" + type.value + "/create", {
            titre: titre.value,
            description: description.value,
            date: new Date(),
            idAnnonceur: store.id_user,
            prix: prix.value,
            categorie: categorie.value,
            // etat: etat.value,
            lieuRecuperation: lieu.value,
          })
          .then((res) => {
            // pour afficher la dialog

            $q.dialog({
              title: "Annonce publié avec succès",
              message: "Consultez vos annonces dans la section Mes annonces",
            })
              .onOk(() => {
                // console.log('OK')
              })
              .onCancel(() => {
                // console.log('Cancel')
              })
              .onDismiss(() => {
                // console.log('I am triggered on both OK and Cancel')
              });
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
