<template>
  <div>
    <q-item class="q-px-none">
      <q-item-section avatar top>
        <q-avatar color="primary" text-color="white">
          <div style="font-size: 11px">{{ reserveur.nom }}</div>
        </q-avatar>
      </q-item-section>

      <q-item-section top>
        <q-item-label lines="1">
          <div class="q-mt-sm" style="font-size: 16px">
            {{ reserveur.prenom }} {{ reserveur.nom }}
          </div>
          <div class="text-grey-8">a réserver votre annonce</div>
          <span class="text-weight-medium">{{ annonce.titre }}</span>
        </q-item-label>

        <q-item-label
          lines="1"
          class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase"
        >
          <span
            class="cursor-pointer text-secondary"
            @click="showDialogReservation()"
          >
            Voir la réservation
          </span>
        </q-item-label>
      </q-item-section>

      <q-item-section top side>
        <div>
          <q-btn
            size="12px"
            color="secondary"
            dense
            class="q-mr-sm"
            label="Répondre"
            @click="showDialogRepondre()"
          />
        </div>
      </q-item-section>
    </q-item>

    <!-- ------------------------------------------Dialogue Réservation --------------------------------------------->
    <q-dialog v-model="showReservation">
      <InfoReservation :reserveur="reserveur" :annonce="annonce" />
    </q-dialog>

    <!-- ------------------------------------------Dialogue Répondre --------------------------------------------->
    <q-dialog v-model="showRepondre">
      <RepondreReservation
        :reserveur="reserveur"
        :annonce="annonce"
        :type="type"
      />
    </q-dialog>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { apiUrl } from "../../constants/constants";
import InfoReservation from "../mesReservations/InfoReservation.vue";
import RepondreReservation from "./RepondreReservation.vue";
export default {
  components: {
    InfoReservation,
    RepondreReservation,
  },
  props: {
    type: String,
    annonce: Object,
  },
  data() {
    return {
      reserveur: {},
    };
  },
  mounted() {
    axios
      .get(apiUrl + "/user/getUser/" + this.annonce.id_reserveur)
      .then((res) => {
        this.reserveur = res.data.user[0];
      })
      .catch((err) => console.log(err));
  },
  setup(props) {
    let showReservation = ref(false);
    let showRepondre = ref(false);
    return {
      // showMoreInfo,
      showReservation,
      showRepondre,
      showDialogRepondre() {
        showRepondre.value = true;
      },
      showDialogReservation() {
        showReservation.value = true;
      },
      showDialogMoreInfo() {
        showMoreInfo.value = true;
      },
    };
  },
};
</script>

<style></style>
