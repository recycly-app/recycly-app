<template>
  <div class="full-width">
    <div class="q-ma-sm text-h6">Résultat des recherches: {{ this.type }}</div>

    <div class="row q-gutter-xs justify-center">
      <AnnonceCard
        v-for="(annonce, index) in annonces"
        :key="index + annonce.titre"
        :id="
          annonce.id_annonce_recy
            ? annonce.id_annonce_recy
            : annonce.id_annonce_recondition
        "
        :titre="annonce.titre"
        :type="this.type"
        :prix="annonce.prix"
        :description="annonce.description"
        :image="annonce.photo_annonce"
        :annonce="annonce"
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
    wilaya: String,
    categorie: String,
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
      .get(
        apiUrl +
          "/annonce/" +
          this.type +
          "/getFilterAnnonces/" +
          this.wilaya +
          "/" +
          this.categorie
      )
      .then((res) => {
        this.annonces = res.data.annonce;
      })
      .catch();
  },
};
</script>

<style></style>
