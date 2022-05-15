<template>
  <q-card class="my-card">
    <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />

    <q-card-section>
      <div class="row no-wrap items-center">
        <div class="col text-h6 ellipsis" :title="titre">{{ titre }}</div>
      </div>
      <div v-if="type == 'Reconditionnement'">
        <span class="q-mr-sm">État</span
        ><q-rating v-model="stars" :max="5" size="20px" />
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="text-caption text-grey q-ma-none">
        {{ category }}
      </div>
      <div class="text-subtitle1 text-grey">{{ type }}</div>
      <div class="text-subtitle2 text-blue-5">{{ categorie }}</div>
      <div class="text-caption text-grey">
        {{ description }}
      </div>
    </q-card-section>

    <q-separator />

    <q-card-actions>
      <q-btn flat color="red-6" @click="deleteAnnonce"
        ><q-icon name="delete" color="red-6" />
        supprimer
      </q-btn>

      <q-btn flat color="primary">
        <q-icon name="edit_note" color="primary" /> modifier
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import { apiUrl } from "src/constants/constants";

export default {
  name: "MesAnnonces",
  methods: {
    deleteAnnonce() {
      axios
        .delete(apiUrl + "/annonce/" + this.type + "/delete/" + this.id)
        .then((res) => {
          // location.replace("#/mes-annonces");
          location.reload();
        })
        .catch((err) => {
          console.log("Erreur supprimer annonce" + err);
        });
    },
  },

  props: {
    id: Number,
    titre: String,
    type: String,
    description: String,
    categorie: String,
  },
  setup() {
    return {
      stars: ref(4),
    };
  },
};
</script>

<style lang="sass" scoped>
.my-card
    width: 100%
    max-width: 300px
</style>
