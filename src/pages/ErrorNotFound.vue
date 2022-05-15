<template>
  <div
    class="fullscreen bg-primary text-white text-center q-pa-md flex flex-center"
  >
    <div>
      <div style="font-size: 30vh" class="text-secondary">404</div>

      <div class="text-h2" style="opacity: 0.4">Oops. Rien ici...</div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="secondary"
        unelevated
        to="/"
        label="Accueil"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ErrorNotFound",
});
</script>
