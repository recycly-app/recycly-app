<template>
  <q-card>
    <q-card-section class="q-pa-sm">
      <div>Répondez à {{ reserveur.prenom }} {{ reserveur.nom }}</div>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn
        flat
        icon="done"
        label="Accepter"
        color="green-6"
        @click="accepter()"
      />
      <q-btn
        flat
        icon="close"
        label="Refuser"
        color="red-6"
        @click="refuser()"
      />
      <q-btn flat label="Fermer" v-close-popup />
    </q-card-actions>
  </q-card>
</template>

<script>
import axios from "axios";
import { apiUrl } from "../../constants/constants";

export default {
  props: {
    reserveur: Object,
    annonce: Object,
    type: String,
  },
  setup(props) {
    return {
      accepter() {
        axios
          .put(
            apiUrl +
              "/annonce/" +
              props.type +
              "/accepterReservation/" +
              props.annonce.id_reservation +
              "/accepter"
          )
          .then((res) => {})
          .catch((err) => console.log(err));
      },

      refuser() {
        axios
          .put(
            apiUrl +
              "/annonce/" +
              props.type +
              "/accepterReservation/" +
              props.annonce.id_reservation +
              "/refuser"
          )
          .then((res) => {})
          .catch((err) => console.log(err));
      },
    };
  },
};
</script>

<style></style>
