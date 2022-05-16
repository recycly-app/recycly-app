<template>
  <div class="full-width">
    <div class="q-ma-sm text-h6">Les dernières annonces : {{ this.type }}</div>

    <div class="row q-gutter-xs justify-center">
      <AnnonceCard
        v-for="annonce in annonces"
        :key="annonce.id_annonce_recondition"
        :titre="annonce.titre"
        :type="this.type"
        :categorie="annonce.categorie"
        :description="annonce.description"
        :image="annonce.photo_annonce"
      />
    </div>
  </div>
</template>

<script>
import AnnonceCard from "./AnnonceCard.vue";
import axios from "axios";
import { apiUrl } from "../../constants/constants";

export default {
  name: "DernieresAnnonces",
  props: {
    type: String,
  },
  components: {
    AnnonceCard,
  },

  data() {
    return {
      annonces: null,
    };
  },
  mounted() {
    axios
      .get(apiUrl + "/annonce/" + this.type + "/getRecent")
      .then((res) => {
        this.annonces = res.data.annonce;
      })
      .catch();
  },
};
</script>

<style></style>
