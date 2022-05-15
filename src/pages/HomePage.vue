<template>
  <div class="column items-center">
    <FiltreRecherche />
    <DernieresAnnonces type="Reconditionnement" />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import DernieresAnnonces from "src/components/annonce/DernieresAnnonces.vue";
import FiltreRecherche from "src/components/FiltreRecherche.vue";
export default defineComponent({
  name: "homePage",
  components: { DernieresAnnonces, FiltreRecherche },
});
</script>
