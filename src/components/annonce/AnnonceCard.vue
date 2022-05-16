<template>
  <div>
    <q-card class="my-card" @click="showMoreInfo">
      <q-img :src="`${apiUrl}/images/${image}`" />

      <q-card-section>
        <q-btn
          fab
          color="secondary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%)"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis" :title="titre">{{ titre }}</div>
          <div
            class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
          >
            <q-icon name="place" />
            250 ft
          </div>
        </div>
        <div v-if="this.type == 'Reconditionnement'">
          <span>État</span><q-rating v-model="etat" :max="5" size="20px" />
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">{{ type }}</div>
        <div class="text-subtitle2 text-blue-5">{{ categorie }}</div>
        <div class="text-caption text-grey-7">
          {{ description }}
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat color="" icon="chat" />
        <q-btn flat color="secondary"> Réserver </q-btn>
        <q-btn flat label="Voir plus" size="12px" @click="fixed = true" />
      </q-card-actions>
    </q-card>

    <!-- ------------------------------------------Dialogue --------------------------------------------->

    <q-dialog v-model="fixed">
      <MoreInfo :titre="titre" :type="type" :description="description"
    /></q-dialog>
  </div>
</template>

<script>
import { ref } from "vue";
import MoreInfo from "./MoreInfo.vue";
import { apiUrl } from "src/constants/constants";
export default {
  name: "AnnonceCard",

  props: {
    titre: String,
    type: String,
    description: String,
    categorie: String,
    image: String,
  },
  components: {
    MoreInfo,
  },
  setup() {
    return {
      apiUrl,
      etat: ref(4),
      fixed: ref(false),
    };
  },
};
</script>

<style>
.my-card {
  width: 100%;
  max-width: 300px;
  min-width: 300px;
  margin: 10px;
}
</style>
