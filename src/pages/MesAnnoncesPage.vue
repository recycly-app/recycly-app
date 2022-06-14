<template>
  <div class="q-pa-md full-width">
    <div class="text-h6 row justify-center">Mes annonces</div>
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
          <div class="row q-gutter-md">
            <MesAnnonces
              v-for="(annonce, index) in annoncesRecy"
              :id="annonce.id_annonce_recy"
              :key="index"
              type="Recyclage"
              :annonce="annonce"
            />
          </div>
        </q-tab-panel>

        <q-tab-panel name="reconditionnement">
          <div class="row q-gutter-md">
            <MesAnnonces
              v-for="(annonce, index) in annoncesRecondi"
              :id="annonce.id_annonce_recondition"
              :key="index"
              type="Reconditionnement"
              :annonce="annonce"
            />
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script>
import MesAnnonces from "../components/annonce/MesAnnonces.vue";
import axios from "axios";
import { apiUrl } from "src/constants/constants";
import { store } from "src/layouts/MainLayout.vue";
import { ref } from "vue";
export default {
  name: "MesAnnoncesPage",
  components: { MesAnnonces },
  data() {
    return {
      annoncesRecy: null,
      annoncesRecondi: null,
    };
  },
  setup() {
    return {
      tab: ref("recyclage"),
    };
  },
  mounted() {
    axios
      .get(apiUrl + "/annonce/Recyclage/getUserAnnonces/" + store.id_user)
      .then((res) => {
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
