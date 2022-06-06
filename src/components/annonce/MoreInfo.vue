<template>
  <div>
    <q-card>
      <InfoAnnonceur :annonceur="annonceur" :date="annonce.date" />
      <q-separator />

      <div>
        <div class="row justify-center">
          <q-img
            :src="`${apiUrl}/images/${annonce.photo_annonce}`"
            class="img-more-info"
          />
        </div>
        <q-card-section class="q-pb-none">
          <q-btn
            fab
            color="secondary"
            icon="place"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%)"
            @click="showDialogMap()"
          />
        </q-card-section>
        <q-card-section class="q-py-xs">
          <div class="text-h5">{{ annonce.titre }}</div>
          <div class="text-h7">{{ type }}</div>
          <div class="text-subtitle2 text-blue-5">{{ annonce.prix }} DA</div>
        </q-card-section>
        <q-separator />

        <q-card-section class="scroll q-pa-lg">
          <p>
            {{ annonce.description }}
          </p>
        </q-card-section>

        <q-separator />
      </div>
      <q-separator />
      <q-card-actions align="right">
        <q-btn flat icon="chat" />
        <q-btn flat label="Réserver" />
        <q-btn flat label="Fermer" color="secondary" v-close-popup />
      </q-card-actions>
    </q-card>
    <!-- ------------------------------------------Dialogue Map --------------------------------------------->
    <q-dialog v-model="showMap">
      <MapLocalisation :coords="annonce.lieu_recuperation"
    /></q-dialog>
  </div>
</template>

<script>
import { apiUrl } from "src/constants/constants";
import { ref } from "vue";
import InfoAnnonceur from "./InfoAnnonceur.vue";
import MapLocalisation from "../map/MapLocalisation.vue";
export default {
  name: "MoreInfo",
  components: {
    InfoAnnonceur,
    InfoAnnonceur,
    MapLocalisation,
  },
  props: {
    type: String,
    annonce: Object,
    annonceur: Object,
  },
  data() {
    return {
      apiUrl,
    };
  },
  setup() {
    let showMap = ref(false);
    return {
      showMap,
      showDialogMap() {
        showMap.value = true;
      },
    };
  },
};
</script>

<style>
.q-dialog__inner--minimized > div {
  width: 90%;
  max-width: 100%;
}

.img-more-info {
  width: 50%;
}

@media screen and (max-width: 600px) {
  .q-dialog__inner--minimized > div {
    width: 100%;
  }
  .img-more-info {
    width: 90%;
  }
}
</style>
