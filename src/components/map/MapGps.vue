<template>
  <div>
    <h5>Your coordinates:</h5>
    <p>Lati : {{ coordinates.lat }}</p>
    <p>Long : {{ coordinates.lng }}</p>
    <GoogleMap
      api-key="AIzaSyC3gTQjtr5WoyOp41dhvzaXZDhXsXTXOjY"
      style="width: 100%; height: 500px"
      :center="coordinates"
      :zoom="15"
    >
      <Marker :options="{ position: coordinates }" />
    </GoogleMap>
  </div>
</template>

<script>
// import VueGeolocation from 'vue-browser-geolocation';
import { GoogleMap, Marker } from 'vue3-google-map';

export default {
  name: 'MapGps',
  components: {
    GoogleMap,
    Marker,
  },
  data() {
    const coordinates = { lat: 0, lng: 0 };
    navigator.geolocation.getCurrentPosition((position) => {
      coordinates.lat = position.coords.latitude;
      coordinates.lng = position.coords.longitude;
    });
    return {
      coordinates,
    };
  },
  setup() {
    const center = { lat: 0, lng: 0 };
    navigator.geolocation.getCurrentPosition((position) => {
      center.lat = position.coords.latitude;
      center.lng = position.coords.longitude;
    });

    return {
      center,
    };
  },
  // created() {
  //   //get user's location from browser requset
  //   VueGeolocation.getLocation({})
  //     .then((coordinates) => {
  //       this.coordinates = coordinates;
  //     })
  //     .catch((err) => alert(err));
  // },
  // created() {
  //   //get user's location from browser requset

  //   navigator.geolocation.getCurrentPosition((position) => {
  //     this.coordinates.lat = position.coords.latitude;
  //     this.coordinates.lng = position.coords.longitude;
  //   });
  // },
};
</script>

<style></style>
