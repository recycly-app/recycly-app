<template>
  <q-toolbar>
    <q-avatar color="primary" text-color="white">
      {{ prenom[0] }}{{ nom[0] }}
    </q-avatar>
    <q-toolbar-title> {{ prenom }} {{ nom }} </q-toolbar-title>
    <q-btn flat round dense icon="more_vert" />
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
