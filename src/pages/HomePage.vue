<template>
  <div class="column items-center">
    <ParallaxHome v-if="!filtre && $q.platform.is.desktop" />
    <div v-if="!filtre" class="full-width">
      <FiltreRecherche @send-value="getFilterAnnonces" />
    </div>

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
      <ZoneAnnonces />
    </div>

    <div v-else>
      <ResultatFiltre :type="type" :wilaya="wilaya" :categorie="categorie" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import FiltreRecherche from "src/components/home/FiltreRecherche.vue";
import ParallaxHome from "../components/home/ParallaxHome.vue";
import ResultatFiltre from "src/components/annonce/ResultatFiltre.vue";
import ZoneAnnonces from "src/components/home/ZoneAnnonces.vue";

export default defineComponent({
  name: "homePage",
  components: {
    FiltreRecherche,
    ParallaxHome,
    ResultatFiltre,
    ZoneAnnonces,
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
