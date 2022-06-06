<template>
  <div class="q-pa-md row justify-center">
    <div style="width: 100%">
      <div>
        <q-chat-message name="Vous" :text="['hey, how are you?']" sent />
        <q-chat-message name="Vous" :text="['hey, how are you?']" sent />
        <q-chat-message name="Jane" :text="['doing fine, how r you?']" />
        <q-chat-message name="Jane" :text="['doing fine, how r you?']" />
        <q-chat-message name="Vous" :text="['hey, how are you?']" sent />
      </div>
      <q-separator />
      <ZoneSaisie />
    </div>
  </div>
</template>

<script>
import ZoneSaisie from "./ZoneSaisie.vue";
export default { components: { ZoneSaisie } };
</script>

<style></style>
