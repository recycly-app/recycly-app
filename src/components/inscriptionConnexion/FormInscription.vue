<template>
  <q-form @submit="onSubmit" @reset="onReset" style="width: 30%">
    <q-select
      filled
      v-model="typeUser"
      :options="options"
      label="Vous êtes"
      class="q-mb-md"
    />
    <q-input
      filled
      v-model="nom"
      :label="
        typeUser == 'Particulier' || typeUser == 'Transporteur'
          ? 'Nom'
          : 'Nom de l\'entreprise'
      "
      name="nom"
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || 'Veuillez rempli votre nom']"
      color="light-green-8"
      standout="bg-light-green-3 text-light-green-7"
    />
    <q-input
      filled
      v-model="prenom"
      label="Prénom"
      name="prenom"
      lazy-rules
      :rules="[
        (val) => (val && val.length > 0) || 'Veuillez saisir votre prénom',
      ]"
      color="light-green-8"
      standout="bg-light-green-3 text-light-green-7"
      v-if="typeUser == 'Particulier' || typeUser == 'Transporteur'"
    />
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
      filled
      type="text"
      v-model="tel"
      label="Téléphone"
      mask="## ## ## ## ##"
      name="tel"
      lazy-rules
      :rules="[
        (val) =>
          (val && val.length > 0 && val.length <= 14) ||
          'Veuillez saisir votre numéro de téléphone',
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

    <div class="row justify-center q-pa-md">
      <q-btn label="S'inscrire" type="submit" color="light-green-8" />
      <q-btn label="Reset" type="reset" color="orange-8" flat class="q-ml-sm" />
    </div>
  </q-form>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { apiUrl } from "../../constants/constants";
import { useQuasar } from "quasar";
import { onBeforeUnmount } from "vue";

export default {
  name: "FormulaireInscription",

  setup() {
    const nom = ref(null);
    const prenom = ref(null);
    const email = ref(null);
    const tel = ref(null);
    const motDePasse = ref(null);
    const typeUser = ref("Particulier");
    // loader
    const $q = useQuasar();
    let timer;

    onBeforeUnmount(() => {
      if (timer !== void 0) {
        clearTimeout(timer);
        $q.loading.hide();
      }
    });
    function showLoading() {
      $q.loading.show({
        message: "Création du compte...",
        boxClass: "bg-grey-2 text-grey-9",
        spinnerColor: "primary",
      });
      // hiding in 2s and login
      timer = setTimeout(() => {
        $q.loading.hide();
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
        timer = void 0;
      }, 2000);
    }

    return {
      showLoading,
      typeUser,
      nom,
      prenom,
      email,
      tel,
      motDePasse,
      options: [
        "Particulier",
        "Entreprise",
        "Transporteur",
        "Entreprise de recyclage/reconditionnement",
      ],

      onSubmit() {
        axios
          .post(apiUrl + "/inscription", {
            nom: nom.value,
            prenom: prenom.value,
            email: email.value,
            tel: tel.value,
            motDePasse: motDePasse.value,
            typeUser: typeUser.value,
          })
          .then((response) => {
            showLoading();
          });
      },

      onReset() {
        typeUser.value = "Particulier";
        nom.value = null;
        prenom.value = null;
        email.value = null;
        tel.value = null;
        motDePasse.value = null;
        confMotDePasse.value = null;
        accept.value = false;
      },
    };
  },
};
</script>

<style></style>
