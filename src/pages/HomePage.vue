<template>
  <div class="column items-center">
    <CarrouselHome />
    <FiltreRecherche />
    <DernieresAnnonces type="Reconditionnement" />
    <DernieresAnnonces type="Recyclage" />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import DernieresAnnonces from "src/components/annonce/DernieresAnnonces.vue";
import FiltreRecherche from "src/components/home/FiltreRecherche.vue";
import CarrouselHome from "../components/home/CarrouselHome.vue";

export default defineComponent({
  name: "homePage",
  components: {
    DernieresAnnonces,
    FiltreRecherche,
    CarrouselHome,
  },
});
</script>
