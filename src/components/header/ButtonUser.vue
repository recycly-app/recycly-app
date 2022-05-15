<template>
  <!-- user connecter -->
  <ButtonUserLogged v-if="isLogged" />
  <!-- Pas connceter -->

  <div v-else class="user">
    <q-fab
      color="secondary"
      icon="person"
      direction="left"
      padding="3px"
      class="btn-connexion"
    >
      <q-fab-action
        color="white"
        text-color="secondary"
        @click="goConnexion"
        icon="login"
        label="Se connecter"
        padding="3px"
      />
      <q-fab-action
        color="white"
        text-color="secondary"
        @click="goInscription"
        icon="person_add"
        label="S'inscrire"
        padding="3px"
      />
    </q-fab>
  </div>
</template>

<script>
import ButtonUserLogged from './ButtonUserLogged.vue';
export default {
  name: 'buttonUser',
  props: { isLogged: Boolean, nom: String },
  components: { ButtonUserLogged },
  methods: {
    goConnexion() {
      window.location.replace('#/connexion');
    },
    goInscription() {
      window.location.replace('#/inscription');
    },
  },
};
</script>

<style></style>
