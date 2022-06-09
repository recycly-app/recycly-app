<template>
  <q-card class="my-card">
    <q-img :src="`${apiUrl}/images/${image}`" style="height: 225px" />

    <q-card-section class="q-pb-none">
      <div class="row no-wrap items-center">
        <div class="col text-h6 ellipsis" :title="titre">{{ titre }}</div>
      </div>
      <!-- <div v-if="type == 'Reconditionnement'">
        <span class="q-mr-sm">État</span
        ><q-rating v-model="stars" :max="5" size="20px" />
      </div> -->
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="text-caption text-grey q-ma-none">
        {{ categorie }}
      </div>

      <div class="text-subtitle2 text-blue-5">{{ prix }} DA</div>
    </q-card-section>

    <q-separator />

    <q-card-actions class="q-py-none">
      <q-btn flat color="red-6" @click="deleteAnnonce" icon="delete" />

      <q-btn flat color="primary">
        <q-icon name="edit_note" color="primary" /> modifier
      </q-btn>
      <q-btn flat label="Voir plus" size="12px" @click="showDialogMoreInfo()" />
    </q-card-actions>
  </q-card>
  <!-- ------------------------------------------Dialogue More Info --------------------------------------------->
  <q-dialog v-model="showMoreInfo">
    <MoreInfo
      :id="id"
      :titre="titre"
      :type="type"
      :description="description"
      :image="image"
      :annonce="annonce"
      v-bind:annonceur="annonceur"
  /></q-dialog>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import { apiUrl } from "src/constants/constants";
import MoreInfo from "./MoreInfo.vue";

export default {
  name: "MesAnnonces",
  methods: {
    deleteAnnonce() {
      axios
        .delete(apiUrl + "/annonce/" + this.type + "/delete/" + this.id)
        .then((res) => {
          location.reload();
        })
        .catch((err) => {
          console.log("Erreur supprimer annonce" + err);
        });
    },
  },
  props: {
    id: Number,
    titre: String,
    description: String,
    categorie: String,
    image: String,
    annonce: Object,
    prix: Number,
  },
  setup(props) {
    let showMoreInfo = ref(false);
    let annonceur = ref({});
    return {
      showMoreInfo,
      annonceur,
      apiUrl,
      // stars: ref(4),
      async showDialogMoreInfo() {
        showMoreInfo.value = true;
        await axios
          .get(apiUrl + "/user/getUser/" + props.annonce.id_annonceur)
          .then((res) => {
            annonceur.value = res.data.user[0];
          })
          .catch((err) => console.log("erreur annonce" + err));
      },
    };
  },
  components: { MoreInfo },
};
</script>

<style>
.my-card {
  width: 100%;
  max-width: 300px;
  height: 400px;
  min-width: 300px;
  margin: 10px;
}
</style>
