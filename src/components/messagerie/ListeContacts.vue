<template>
  <div style="max-width: 350px">
    <q-toolbar class="text-white shadow-2">
      <q-toolbar-title class="text-black row justify-center"
        >Contacts</q-toolbar-title
      >
    </q-toolbar>

    <q-list bordered>
      <ContactItem
        v-for="contact in contacts"
        :key="contact.id"
        :contact="contact"
      />
    </q-list>
  </div>
</template>

<script>
import axios from "axios";
import { apiUrl } from "src/constants/constants";
import { store } from "src/layouts/MainLayout.vue";
import { ref } from "vue";
import ContactItem from "./ContactItem.vue";

export default {
  components: {
    ContactItem,
  },
  data() {
    const contacts = ref({});

    axios
      .get(apiUrl + "/message/getContacts/" + store.id_user)
      .then((res) => {
        contacts.value = res.data;
      })
      .catch((err) => console.log("erreur annonce" + err));

    return {
      contacts,
    };
  },
};
</script>
