<template>
  <div class="column justify-center">
    <div class="text-center text-h5 q-my-md">Créez un compte Recycly</div>
    <div class="column items-center">
      <FormInscription :typeUser="typeUser" />

      <div class="row q-ma-sm">
        <div class="q-mr-sm">Vous avez déjà un compte?</div>
        <router-link to="/connexion" class="text-light-green-8 text-bold"
          >Connectez-vous</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import FormInscription from "../components/inscriptionConnexion/FormInscription.vue";
export default {
  components: { FormInscription },
};
</script>

<style></style>
