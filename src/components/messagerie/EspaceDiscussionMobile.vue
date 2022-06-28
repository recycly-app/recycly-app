<template>
  <div>
    <q-layout
      view="lHh Lpr lFf"
      container
      style="height: 700px"
      class="shadow-2 rounded-borders"
    >
      <q-header reveal elevated>
        <q-toolbar>
          <q-btn
            flat
            round
            dense
            icon="contacts"
            @click="drawerLeft = !drawerLeft"
          />

          <ToolbarDiscussion :prenom="contact.prenom" :nom="contact.nom" />
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawerLeft"
        :width="250"
        :breakpoint="700"
        behavior="desktop"
        bordered
        class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <ListeContacts />
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <q-page padding>
          <ChatDiscussion :contact="contact" />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<!-- <template>
  <div>
    <q-btn icon="contacts" />
    <ToolbarDiscussion :prenom="contact.prenom" :nom="contact.nom" />
    <q-separator />
    <ChatDiscussion :contact="contact" />
  </div>
</template> -->

<script>
import ToolbarDiscussion from "./ToolbarDiscussion.vue";
import ChatDiscussion from "./ChatDiscussion.vue";
import { ref } from "vue";
import axios from "axios";
import { apiUrl } from "src/constants/constants";
import { useQuasar } from "quasar";
import ListeContacts from "./ListeContacts.vue";
export default {
  components: {
    ToolbarDiscussion,
    ChatDiscussion,
    ListeContacts,
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
  setup() {
    const $q = useQuasar();

    return {
      drawerLeft: ref($q.screen.width > 700),
    };
  },
};
</script>

<style></style>
