<template>
  <q-toolbar>
    <q-avatar color="primary" text-color="white">
      <div style="font-size: 11px">{{ nom }}</div>
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
