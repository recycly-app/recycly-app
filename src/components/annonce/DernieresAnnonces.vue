<template>
  <div class="full-width">
    <div class="row q-gutter-xs justify-center">
      <AnnonceCard
        v-for="(annonce, index) in annonces"
        :key="index + annonce.titre"
        :id="annonce.id_annonce"
        :annonce="annonce"
        :type="type"
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
