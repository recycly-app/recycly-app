<template>
  <div class="column items-center deposer-annonce">
    <h5 class="no-margin">Déposer une annonce sur Recycly</h5>
    <StepperDeposerAnnonce v-if="store.isLogged" />
    <DeposerNotLogged v-else />
  </div>
</template>

<script>
import DeposerNotLogged from "src/components/annonce/DeposerNotLogged.vue";
import { store } from "src/layouts/MainLayout.vue";
import StepperDeposerAnnonce from "src/components/annonce/StepperDeposerAnnonce.vue";

export default {
  name: "DeposerAnnoncePage",
  components: {
    DeposerNotLogged,
    StepperDeposerAnnonce,
  },
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
  border-radius: 10px;
  margin: 10px auto auto;
  padding: 10px;
}

@media screen and (max-width: 425px) {
  .deposer-annonce {
    width: 95%;
  }
}
</style>
