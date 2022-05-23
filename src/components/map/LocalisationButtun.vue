<template>
  <div>
    Lieu :
    <q-btn icon="my_location" @click="sendCoords()" />
  </div>
</template>

<script>
import VueGeolocation from "vue-browser-geolocation";
export default {
  name: "LocalisationButtun",
  methods: {
    sendCoords() {
      VueGeolocation.getLocation({}).then((coordinates) => {
        this.$emit("send-coords", { coords: coordinates });
      });
    },
  },
};
</script>

<style></style>
