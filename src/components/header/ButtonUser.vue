<template>
  <div class="btn-user row justify-end">
    <!-- user connecter -->

    <ButtonUserLogged v-if="isLogged" />

    <!-- Pas connceter -->
    <div v-else class="q-pa-sm">
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
          icon="login"
          label="Se connecter"
          padding="3px"
          to="/connexion"
        />
        <q-fab-action
          color="white"
          text-color="secondary"
          icon="person_add"
          label="S'inscrire"
          padding="3px"
          to="/inscription"
        />
      </q-fab>
    </div>
  </div>
</template>

<script>
import ButtonUserLogged from "./ButtonUserLogged.vue";
export default {
  name: "buttonUser",
  props: {
    isLogged: Boolean,
    nom: String,
  },
  components: { ButtonUserLogged },
  methods: {
    goConnexion() {
      window.location.replace("#/connexion");
    },
    goInscription() {
      window.location.replace("#/inscription");
    },
  },
};
</script>

<style>
.btn-user {
  margin-right: 30px;
}
</style>
