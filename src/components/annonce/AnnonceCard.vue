<template>
  <div>
    <q-card class="my-card">
      <q-img :src="`${apiUrl}/images/${image}`" style="height: 225px" />

      <q-card-section class="q-pb-none">
        <q-btn
          fab
          color="secondary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%)"
          @click="showDialogMap()"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis" :title="titre">
            {{ titre }}
          </div>
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">{{ categorie }}</div>
        <div class="text-subtitle2 text-blue-5">{{ prix }} DA</div>
      </q-card-section>

      <q-card-actions class="q-py-none">
        <q-btn flat icon="chat" />
        <q-btn flat color="secondary"> Réserver </q-btn>
        <q-btn
          flat
          label="Voir plus"
          size="12px"
          @click="showDialogMoreInfo()"
        />
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

    <!-- ------------------------------------------Dialogue Map --------------------------------------------->
    <q-dialog v-model="showMap">
      <MapLocalisation :coords="annonce.lieu_recuperation"
    /></q-dialog>
  </div>
</template>

<script>
import { ref } from "vue";
import MoreInfo from "./MoreInfo.vue";
import MapLocalisation from "../map/MapLocalisation.vue";
import { apiUrl } from "src/constants/constants";
import axios from "axios";
export default {
  name: "AnnonceCard",

  props: {
    id: Number,
    titre: String,
    categorie: String,
    description: String,
    prix: Number,
    image: String,
    annonce: Object,
  },
  components: {
    MoreInfo,
    MapLocalisation,
  },
  setup(props) {
    let showMoreInfo = ref(false);
    let showMap = ref(false);
    let annonceur = ref({});

    return {
      annonceur,
      apiUrl,
      showMoreInfo,
      showMap,
      showDialogMap() {
        showMap.value = true;
      },
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
