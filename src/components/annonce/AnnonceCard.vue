<template>
  <div>
    <q-card class="my-card">
      <q-img :src="`${apiUrl}/images/${image}`" style="height: 225px" />

      <q-card-section class="q-pb-none">
        <q-btn
          fab
          color="secondary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%)"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis" :title="titre">
            {{ titre }}
          </div>
          <div
            class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
          >
            <q-icon name="place" />
            250 ft
          </div>
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">{{ type }}</div>
        <div class="text-subtitle2 text-blue-5">{{ prix }} DA</div>
      </q-card-section>

      <q-card-actions class="q-py-none">
        <q-btn flat color="" icon="chat" />
        <q-btn flat color="secondary"> Réserver </q-btn>
        <q-btn flat label="Voir plus" size="12px" @click="showDialog()" />
      </q-card-actions>
    </q-card>
    <!-- ------------------------------------------Dialogue --------------------------------------------->
    <q-dialog v-model="fixed">
      <MoreInfo
        :id="id"
        :titre="titre"
        :type="type"
        :description="description"
        :image="image"
        :annonce="annonce"
        v-bind:annonceur="annonceur"
    /></q-dialog>
  </div>
</template>

<script>
import { ref } from "vue";
import MoreInfo from "./MoreInfo.vue";
import { apiUrl } from "src/constants/constants";
import axios from "axios";
export default {
  name: "AnnonceCard",

  props: {
    id: Number,
    titre: String,
    type: String,
    description: String,
    prix: String,
    image: String,
    annonce: Object,
  },
  components: {
    MoreInfo,
  },
  setup(props) {
    let fixed = ref(false);
    let annonceur = ref({});

    return {
      annonceur,
      apiUrl,
      fixed,
      async showDialog() {
        fixed.value = true;
        await axios
          .get(apiUrl + "/user/getUser/" + props.annonce.id_annonceur)
          .then((res) => {
            annonceur.value = res.data.user[0];
          })
          .catch((err) => console.log("erreur annonce" + err));
      },
    };
  },
};
</script>

<style>
.my-card {
  width: 100%;
  max-width: 300px;
  height: 400px;
  min-width: 300px;
  margin: 10px;
}
</style>
