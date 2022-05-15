<template>
  <div class="q-pa-md full-width">
    <div class="text-h5 q-mb-sm">Mes annonces :</div>
    <div class="row q-gutter-md">
      <MesAnnonces
        v-for="(annonce, index) in annonces"
        :key="index"
        :type="annonce.type"
        :titre="annonce.titre"
        :description="annonce.description"
        :categorie="annonce.categorie"
      />
    </div>
  </div>
</template>

<script>
import MesAnnonces from "../components/annonce/MesAnnonces.vue";
import axios from "axios";
import { apiUrl } from "src/constants/constants";
import { store } from "src/layouts/MainLayout.vue";
export default {
  name: "MesAnnoncesPage",
  components: { MesAnnonces },
  data() {
    return {
      annonces: null,
    };
  },
  mounted() {
    axios
      .get(apiUrl + "/user/getUserAnnonces/86")
      .then((res) => {
        this.annonces = res.data.annonce;
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style></style>
