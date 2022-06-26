<template>
  <q-item clickable v-ripple>
    <q-item-section avatar>
      <q-avatar>
        <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
      </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1">Brunch this weekend?</q-item-label>
      <q-item-label caption lines="2">
        {{ notification }}
      </q-item-label>
    </q-item-section>

    <q-item-section side top> 1 min ago </q-item-section>
  </q-item>
</template>

<script>
import axios from "axios";
import { apiUrl } from "src/constants/constants";

export default {
  props: {
    notification: String,
  },
  data() {
    return {};
  },
  mounted(props) {
    axios
      .get(apiUrl + "/user/getUser/")
      .then((res) => {
        this.annonces = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style></style>
