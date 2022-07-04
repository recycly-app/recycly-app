<template>
  <div>
    <q-card class="q-pa-md">
      <div>
        <div class="row justify-center">
          <q-img
            :src="`${apiUrl}/images/${annonce.photo_annonce}`"
            class="img-more-info"
          />
        </div>

        <q-card-section class="q-py-xs">
          <div class="row">
            <div class="row items-center">Titre</div>
            <TextInput label="Titre" v-model="titre" />
          </div>
          <div class="row">
            <div class="row items-center">Prix</div>
            <TextInput label="Prix" v-model="prix" suffix="DA" />
          </div>
        </q-card-section>
        <q-separator />

        <q-card-section class="scroll q-pa-lg">
          <div class="row">
            <div class="row items-center">Description</div>
            <TextInput
              :placeholder="annonce.description"
              type="textarea"
              v-model="description"
              label="Description"
            />
          </div>
        </q-card-section>

        <q-separator />
      </div>
      <q-separator />
      <q-card-actions align="right">
        <q-btn
          flat
          icon="check"
          label="Valider"
          color="primary"
          @click="update()"
        />

        <q-btn flat label="Fermer" color="secondary" v-close-popup />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import axios from "axios";
import { apiUrl } from "src/constants/constants";
import { ref } from "vue";
import TextInput from "../inputs/TextInput.vue";
export default {
  props: {
    annonce: Object,
  },
  setup(props) {
    const titre = ref(props.annonce.titre);
    const prix = ref(props.annonce.prix);
    const description = ref(props.annonce.description);

    return {
      titre,
      prix,
      description,
      apiUrl,
      update() {
        axios
          .put(apiUrl + "/annonce/Recyclage/update", {
            id: props.annonce.id_annonce,
            titre: titre.value,
            prix: prix.value,
            description: description.value,
          })
          .then(window.location.reload())
          .catch((err) => console.log("error update annonce", err));
      },
    };
  },
  components: {
    TextInput,
  },
};
</script>

<style></style>
