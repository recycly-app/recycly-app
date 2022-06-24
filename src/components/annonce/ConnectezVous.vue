<template>
  <q-card>
    <q-card-section>
      <div class="text-h6 row justify-center">
        Connectez-vous ou créez un compte
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none row justify-center">
      <q-btn
        flat
        label="Se connecter"
        color="primary"
        to="/connexion"
        icon="login"
      />
      <q-btn
        flat
        label="S'inscrire"
        color="secondary"
        to="/inscription"
        icon="person_add"
      />
    </q-card-section>

    <q-card-actions align="right">
      <q-btn flat label="OK" color="secondary" v-close-popup />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  props: {
    label: String,
  },
};
</script>

<style></style>
