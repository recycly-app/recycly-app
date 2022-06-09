<template>
  <div class="q-pa-sm full-width">
    <q-parallax :height="300" :speed="0.5">
      <template v-slot:media>
        <img src="../../assets/Recycly.png" />
      </template>
    </q-parallax>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "carrouselHome",
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
    };
  },
};
</script>

<style></style>
