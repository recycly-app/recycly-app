<template>
  <div class="q-pa-md full-width">
    <div class="text-h6 row justify-center">Mes réservations</div>
    <div>
      <ReservationItem
        v-for="(annonce, index) in annonces"
        :key="index"
        :annonce="annonce"
        type="Recyclage"
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
      annonces: null,
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
        this.annonces = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style></style>
