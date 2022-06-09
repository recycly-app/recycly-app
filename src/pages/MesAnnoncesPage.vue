<template>
  <div class="q-pa-md full-width">
    <div>
      <div class="text-h5 q-mb-sm">Mes annonces Recyclage:</div>
      <div class="row q-gutter-md">
        <MesAnnonces
          v-for="(annonce, index) in annoncesRecy"
          :id="annonce.id_annonce_recy"
          :key="index"
          type="Recyclage"
          :titre="annonce.titre"
          :description="annonce.description"
          :categorie="annonce.categorie"
          :image="annonce.photo_annonce"
          :prix="annonce.prix"
          :annonce="annonce"
        />
      </div>
    </div>
    <q-separator class="q-my-md" />
    <div>
      <div class="text-h5 q-mb-sm">Mes annonces Reconditionnement:</div>
      <div class="row q-gutter-md">
        <MesAnnonces
          v-for="(annonce, index) in annoncesRecondi"
          :id="annonce.id_annonce_recondition"
          :key="index"
          type="Reconditionnement"
          :titre="annonce.titre"
          :description="annonce.description"
          :categorie="annonce.categorie"
          :image="annonce.photo_annonce"
          :prix="annonce.prix"
          :annonce="annonce"
        />
      </div>
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
      annoncesRecy: null,
      annoncesRecondi: null,
    };
  },
  mounted() {
    axios
      .get(apiUrl + "/annonce/Recyclage/getUserAnnonces/" + store.id_user)
      .then((res) => {
        console.log(res);
        this.annoncesRecy = res.data.annonce;
      })
      .catch((err) => console.log(err));
    axios
      .get(
        apiUrl + "/annonce/Reconditionnement/getUserAnnonces/" + store.id_user
      )
      .then((res) => {
        this.annoncesRecondi = res.data.annonce;
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style></style>
