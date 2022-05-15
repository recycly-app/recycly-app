<template>
  <q-img class="top" src="../../assets/fond_menu.gif" style="height: 150px">
    <div class="absolute-bottom bg-transparent">
      <q-avatar size="56px" class="q-mb-sm">
        <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
      </q-avatar>
      <div class="text-weight-bold">
        {{ store.prenom_user }} {{ store.nom_user }}
      </div>
    </div>
  </q-img>
</template>

<script>
import { store } from 'src/layouts/MainLayout.vue';
export default {
  name: 'InfoUser',
  data() {
    return {
      store,
    };
  },
};
</script>

<style></style>
