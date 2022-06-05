<template>
  <div class="connexion">
    <h5 class="inscription-titre text-center">Créez un compte Recycly</h5>
    <q-form @submit="onSubmit" class="q-pa-md">
      <q-input
        filled
        v-model="email"
        label="E-mail"
        name="email"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 0) || 'Veuillez saisir votre e-mail',
        ]"
        color="light-green-8"
        standout="bg-light-green-3 text-light-green-7"
      />

      <q-input
        type="password"
        filled
        v-model="motDePasse"
        label="Mot de passe"
        lazy-rules
        name="password"
        color="light-green-8"
        standout="bg-light-green-3 text-light-green-7"
      />

      <div class="column items-center q-pa-xs">
        <q-btn color="light-green-8" label="Connexion" type="submit" />
        <div class="row q-ma-sm">
          <div class="q-mr-sm">Vous n'avez pas de compte?</div>
          <router-link to="/inscription" class="text-primary text-bold"
            >Inscrivez-vous</router-link
          >
        </div>
      </div>
    </q-form>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { apiUrl } from "src/constants/constants";

export default {
  name: "AccueilLeftConnexion",

  setup() {
    const email = ref(null);
    const motDePasse = ref(null);
    // let errEmail = ref(false);

    return {
      email,
      motDePasse,

      // errEmail,

      // connexion
      onSubmit() {
        axios
          .post(apiUrl + "/connexion", {
            email: email.value,
            motDePasse: motDePasse.value,
          })
          .then((res) => {
            console.log(res.data);

            if (res.data.user.id_user) {
              localStorage.setItem("id_user", res.data.user.id_user);
              localStorage.setItem("token_user", res.data.token);
              localStorage.setItem("nom_user", res.data.user.nom);
              localStorage.setItem("prenom_user", res.data.user.prenom);
              localStorage.setItem("email_user", res.data.user.email);
              localStorage.setItem("tel_user", res.data.user.tel);
              localStorage.setItem("type_user", res.data.user.type_user);

              location.replace("/");
            }

            // Se rendre à la page d'accueil
          });
      },
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
