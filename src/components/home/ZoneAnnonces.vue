<template>
  <div class="q-ma-sm text-h5 row justify-center">Les dernières annonces</div>
  <q-card>
    <q-tabs
      v-model="tab"
      dense
      class="q-pa-none full-width"
      align="justify"
      narrow-indicator
      active-bg-color="orange-1"
    >
      <q-tab name="recyclage" label="Recyclage" class="text-primary" />
      <q-tab
        name="reconditionnement"
        label="Reconditionnement"
        class="text-secondary"
      />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="recyclage">
        <DernieresAnnonces type="Recyclage" />
      </q-tab-panel>

      <q-tab-panel name="reconditionnement">
        <DernieresAnnonces type="Reconditionnement" />
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

<script>
import { ref } from "vue";
import DernieresAnnonces from "../annonce/DernieresAnnonces.vue";
export default {
  components: { DernieresAnnonces },
  setup() {
    return {
      tab: ref("recyclage"),
    };
  },
};
</script>
<style></style>
