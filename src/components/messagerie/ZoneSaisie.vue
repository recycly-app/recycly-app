<template>
  <q-input
    outlined
    bottom-slots
    v-model="text"
    label="Votre message"
    dense
    class="q-mt-sm"
  >
    <template v-slot:after>
      <q-btn round dense flat icon="send" color="primary" @click="sendValue" />
    </template>
  </q-input>
</template>

<script>
import axios from "axios";
import { apiUrl } from "src/constants/constants";
import { store } from "src/layouts/MainLayout.vue";
import { ref } from "vue";

export default {
  props: {
    idContact: Number,
  },
  methods: {
    sendValue() {
      this.$emit("send-value", { text: this.text });
      axios
        .post(apiUrl + "/message/addMessage", {
          id_sender: parseInt(store.id_user),
          id_reciever: this.idContact,
          message: this.text,
          date: new Date(),
        })
        .then((res) => {})
        .catch((err) => console.log("erreur annonce" + err));
      location.reload();
    },
  },
  setup() {
    const text = ref(null);
    return {
      text,
    };
  },
};
</script>

<style></style>
