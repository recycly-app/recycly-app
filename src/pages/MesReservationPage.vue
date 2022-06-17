<template>
  <div class="q-pa-md full-width">
    <div class="text-h6 row justify-center">Mes réservations</div>
    <div>
      <div class="text-h6">Annonces recyclage</div>
      <ReservationItem
        v-for="(annoceRecy, index) in annoncesRecy"
        :key="index"
        :annonce="annoceRecy"
        type="Recyclage"
      />
    </div>

    <div>
      <div class="text-h6">Annonces reconditionnement</div>
      <ReservationItem
        v-for="(annonceRecondition, index) in annoncesRecondition"
        :key="index"
        :annonce="annonceRecondition"
        type="Reconditionnement"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ReservationItem from "src/components/mesReservations/ReservationItem.vue";
import { apiUrl } from "src/constants/constants";
import { store } from "src/layouts/MainLayout.vue";
export default {
  components: {
    ReservationItem,
  },
  data() {
    return {
      store,
      annoncesRecy: null,
      annoncesRecondition: null,
    };
  },
  mounted() {
    axios
      .get(
        apiUrl +
          "/annonce/Recyclage/getReservationAnnonces/" +
          this.store.id_user
      )
      .then((res) => {
        this.annoncesRecy = res.data;
      })
      .catch();

    axios
      .get(
        apiUrl +
          "/annonce/Reconditionnement/getReservationAnnonces/" +
          this.store.id_user
      )
      .then((res) => {
        this.annoncesRecondition = res.data;
      })
      .catch();
  },
};
</script>

<style></style>
