<template>
  <q-toolbar>
    <q-toolbar-title> {{ prenom }} {{ nom }} </q-toolbar-title>
    <!-- <q-btn flat round dense icon="more_vert" /> -->
  </q-toolbar>
</template>

<script>
export default {
  props: {
    prenom: String,
    nom: String,
  },
};
</script>

<style></style>
