<template>
  <div>
    <div class="q-pa-sm text-h6">Notifications</div>
    <ReponseNotification
      v-for="(notification, index) in notifications"
      :key="index"
      :notification="notification"
    />
  </div>
</template>

<script>
import axios from "axios";
import ReponseNotification from "src/components/notifications/ReponseNotification.vue";
import { apiUrl } from "src/constants/constants";
import { store } from "src/layouts/MainLayout.vue";
export default {
  components: {
    ReponseNotification,
  },
  data() {
    return {
      store,
      notifications: null,
    };
  },
  mounted() {
    axios
      .get(apiUrl + "/annonce/Recyclage/getNotifications/" + this.store.id_user)
      .then((res) => {
        this.notifications = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style></style>
