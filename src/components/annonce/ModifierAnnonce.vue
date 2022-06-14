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
            <div>Titre</div>
            <TextInput :placeholder="annonce.titre" />
          </div>
          <div class="row">
            <div>Prix</div>
            <TextInput :placeholder="annonce.prix + ' DA'" />
          </div>
        </q-card-section>
        <q-separator />

        <q-card-section class="scroll q-pa-lg">
          <div class="row">
            <div>Description</div>
            <TextInput :placeholder="annonce.description" type="textarea" />
          </div>
        </q-card-section>

        <q-separator />
      </div>
      <q-separator />
      <q-card-actions align="right">
        <q-btn flat icon="check" label="Valider" color="primary" />

        <q-btn flat label="Fermer" color="secondary" v-close-popup />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { apiUrl } from "src/constants/constants";
import TextInput from "../inputs/TextInput.vue";
export default {
  props: {
    annonce: Object,
  },
  setup() {
    return {
      apiUrl,
    };
  },
  components: { TextInput },
};
</script>

<style></style>
