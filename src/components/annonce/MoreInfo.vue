<template>
  <q-card class="dialog-annonce">
    <q-card-section>
      <div class="text-h6">{{ titre }}</div>
      <div class="text-h7">{{ type }}</div>
    </q-card-section>

    <q-separator />

    <div class="row">
      <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" class="col" />
      <q-card-section class="scroll col">
        <p>
          {{ description }}
        </p>
      </q-card-section>
    </div>
    <q-separator />
    <q-card-actions align="right">
      <q-btn flat label="Fermer" color="secondary" v-close-popup />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: 'MoreInfo',
  props: {
    titre: String,
    type: String,
    description: String,
  },
};
</script>

<style>
.dialog-annonce {
  width: 100vw;
  /* max-width: 80%; */
}
</style>
