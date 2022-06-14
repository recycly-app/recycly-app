<template>
  <div>
    <ToolbarDiscussion :prenom="contact.prenom" :nom="contact.nom" />
    <q-separator />
    <ChatDiscussion :contact="contact" />
  </div>
</template>

<script>
import ToolbarDiscussion from "./ToolbarDiscussion.vue";
import ChatDiscussion from "./ChatDiscussion.vue";
import { ref } from "vue";
import axios from "axios";
import { apiUrl } from "src/constants/constants";
export default {
  components: {
    ToolbarDiscussion,
    ChatDiscussion,
  },

  data() {
    let contact = ref({});
    axios
      .get(apiUrl + "/user/getUser/" + this.$route.params.id)
      .then((res) => {
        contact.value = res.data.user[0];
      })
      .catch((err) => console.log("erreur annonce" + err));
    return {
      contact,
    };
  },
};
</script>

<style></style>
