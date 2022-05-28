<template>
  <div class="connexion">
    <div class="inscription-titre text-center text-h5">
      Créez un compte Recycly
    </div>
    <div class="column items-center">
      <div class="q-pb-sm">
        <q-radio
          keep-color
          v-model="typeUser"
          val="particulier"
          label="Particulier"
          color="orange"
        />
        <q-radio
          keep-color
          v-model="typeUser"
          val="transporteur"
          label="Transporteur"
          color="blue"
        />
        <!-- <q-radio
          keep-color
          v-model="typeUser"
          val="entreprise"
          label="Entreprise de recyclage/reconditionement"
          color="green"
        /> -->
      </div>
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
import { ref } from "vue";
import FormInscription from "./FormInscription.vue";
export default {
  name: "AccueilLeft",
  components: { FormInscription },

  setup() {
    return {
      options: [
        { label: "Particulier", value: "particulier" },
        { label: "Transporteur", value: "transporteur" },
        { label: "Entreprise", value: "entreprise" },
      ],
      typeUser: ref("particulier"),
    };
  },
};
</script>

<style>
@media only screen and (max-width: 600px) {
  .connexion {
    width: 90%;
  }
}

@media only screen and (min-width: 600px) {
  .connexion {
    width: 80%;
  }
}
@media only screen and (min-width: 700px) {
  .connexion {
    width: 40%;
  }
}
</style>
