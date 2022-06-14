<template>
  <div class="q-pa-md row justify-center">
    <div style="width: 100%">
      <q-scroll-area
        :thumb-style="thumbStyle"
        :bar-style="{
          borderRadius: '5px',
          background: '#8fc255',
          opacity: 0.7,
        }"
        style="height: 400px; padding: 15px"
      >
        <div v-for="message in messages" :key="message.id">
          <q-chat-message
            name="Vous"
            :text="[message.message]"
            v-if="message.id_sender == store.id_user"
            sent
          />
          <q-chat-message
            :name="contact.nom"
            :text="[message.message]"
            v-else
          />
        </div>
      </q-scroll-area>
      <q-separator />
      <ZoneSaisie :idContact="contact.id_user" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { apiUrl } from "src/constants/constants";
import { store } from "src/layouts/MainLayout.vue";
import { ref } from "vue";
import ZoneSaisie from "./ZoneSaisie.vue";
export default {
  components: { ZoneSaisie },
  props: {
    contact: Object,
  },

  data() {
    let messages = ref({});
    axios
      .get(
        apiUrl +
          "/message/getMessages/" +
          store.id_user +
          "/" +
          this.$route.params.id
      )
      .then((res) => {
        messages.value = res.data;
      })
      .catch((err) => console.log("erreur annonce" + err));
    return {
      messages,
      store,
    };
  },
};
</script>

<style></style>
