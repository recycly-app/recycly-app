<template>
  <div style="width: 80%">
    <q-form @submit="onSubmit" @reset="onReset">
      <q-input
        filled
        v-model="nom"
        label="Nom"
        name="nom"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 0) || 'Veuillez saisir votre nom',
        ]"
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

      <q-input
        type="password"
        filled
        v-model="confMotDePasse"
        label="Confirmer le mot de passe"
        name="confPassword"
        lazy-rules
        color="light-green-8"
        standout="bg-light-green-3 text-light-green-7"
      />
      <q-toggle
        v-model="accept"
        label="J'accepte les conditions d'utilisation"
        color="light-green-8"
      />

      <div class="row justify-center">
        <q-btn label="S'inscrire" type="submit" color="light-green-8" />
        <q-btn
          label="Reset"
          type="reset"
          color="orange-8"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';
import { apiUrl } from '../../constants/constants';

export default {
  name: 'FormulaireInscription',
  props: { typeUser: String },
  setup(props) {
    const nom = ref(null);
    const prenom = ref(null);
    const email = ref(null);
    const tel = ref(null);
    const motDePasse = ref(null);
    const confMotDePasse = ref(null);
    const accept = ref(false);

    return {
      nom,
      prenom,
      email,
      tel,
      motDePasse,
      confMotDePasse,
      accept,

      onSubmit() {
        if (accept.value !== true) {
          console.log('veuillez accepter');
          //
        } else {
          axios
            .post(apiUrl + '/inscription', {
              nom: nom.value,
              prenom: prenom.value,
              email: email.value,
              tel: tel.value,
              motDePasse: motDePasse.value,
              typeUser: props.typeUser,
            })
            .then((response) => {
              console.log(response.data);
            });
        }
      },

      onReset() {
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
