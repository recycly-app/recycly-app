<template>
  <div class="row">
    <div class="q-pa-sm">Localisation :</div>
    <div class="q-pa-sm text-secondary text-bold">{{ labelLieu }}</div>
    <q-btn icon="my_location" @click="sendCoords()" />
  </div>
</template>

<script>
import { ref } from "vue";
import VueGeolocation from "vue-browser-geolocation";
export default {
  name: "LocalisationButtun",
  methods: {
    sendCoords() {
      VueGeolocation.getLocation({}).then((coordinates) => {
        this.$emit("send-coords", { coords: coordinates });
        this.labelLieu = "Votre position a été enregistrée";
      });
    },
  },
  setup() {
    const labelLieu = ref("Localiser vous");
    return {
      labelLieu,
    };
  },
};
</script>

<style></style>
