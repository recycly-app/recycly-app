<template>
  <q-card-section class="scroll q-pa-none">
    <q-item>
      <q-item-section avatar>
        <q-avatar size="50px">
          <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ annonceur.nom }} {{ annonceur.prenom }}</q-item-label>
        <q-item-label caption>{{ annonceur.type_user }}</q-item-label>
        <q-item-label caption>{{ date }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-card-section>
</template>

<script>
export default {
  name: "InfoAnnonceur",
  props: {
    annonceur: Object,
    date: String,
  },
};
</script>

<style></style>
