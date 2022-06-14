<template>
  <q-card-section class="scroll q-pa-none">
    <q-item>
      <q-item-section avatar>
        <q-avatar size="50px" color="primary" text-color="white">
          <div style="font-size: 11px">{{ annonceur.nom }}</div>
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ annonceur.nom }} {{ annonceur.prenom }}</q-item-label>
        <q-item-label caption class="text-secondary">{{
          annonceur.type_user
        }}</q-item-label>
        <q-item-label caption>{{
          `${simpleDate[2]}-${simpleDate[1]}-${simpleDate[0]}`
        }}</q-item-label>
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

  setup(props) {
    let simpleDate = props.date.split("T");

    simpleDate = simpleDate[0].split("-");
    return {
      simpleDate,
    };
  },
};
</script>

<style></style>
