<template>
  <div class="column items-center">
    <CarrouselHome v-if="!filtre" />
    <FiltreRecherche @send-value="getFilterAnnonces" v-if="!filtre" />
    <div v-else class="row full-width">
      <q-btn
        icon="arrow_back"
        class="q-ma-md justify-start"
        color="secondary"
        label="Retour"
        @click="actualiser"
      />
    </div>

    <div v-if="!filtre">
      <DernieresAnnonces type="Reconditionnement" />
      <DernieresAnnonces type="Recyclage" />
    </div>

    <div v-else>
      <ResultatFiltre :type="type" :wilaya="wilaya" :categorie="categorie" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import DernieresAnnonces from "src/components/annonce/DernieresAnnonces.vue";
import FiltreRecherche from "src/components/home/FiltreRecherche.vue";
import CarrouselHome from "../components/home/CarrouselHome.vue";
import ResultatFiltre from "src/components/annonce/ResultatFiltre.vue";

export default defineComponent({
  name: "homePage",
  components: {
    DernieresAnnonces,
    FiltreRecherche,
    CarrouselHome,
    ResultatFiltre,
  },
  methods: {
    getFilterAnnonces(payload) {
      this.wilaya = payload.wilaya;
      this.type = payload.type;
      this.categorie = payload.categorie;
      this.filtre = true;
    },
    actualiser() {
      window.location.reload();
    },
  },
  setup() {
    const wilaya = ref(null);
    const type = ref(null);
    const categorie = ref(null);
    const filtre = ref(false);
    return {
      wilaya,
      type,
      categorie,
      filtre,
    };
  },
});
</script>
