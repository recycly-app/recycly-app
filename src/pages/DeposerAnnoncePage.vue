<template>
  <div class="column items-center deposer-annonce">
    <h5 class="no-margin">Déposer une annonce sur Recycly</h5>
    <FormAnnonce v-if="store.isLogged" />
    <DeposerNotLogged v-else />
  </div>
</template>

<script>
import FormAnnonce from 'src/components/annonce/FormAnnonce.vue';
import DeposerNotLogged from 'src/components/annonce/DeposerNotLogged.vue';
import { store } from 'src/layouts/MainLayout.vue';

export default {
  name: 'DeposerAnnoncePage',
  components: { FormAnnonce, DeposerNotLogged },
  data() {
    return {
      store,
    };
  },
};
</script>

<style>
.deposer-annonce {
  width: 60%;
  border: 1px solid gray;
  border-radius: 10px;
  margin: 10px auto auto;
  padding: 10px;
}
</style>
