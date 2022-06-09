<template>
  <div class="q-pa-sm">
    <q-btn-dropdown rounded dense color="secondary" icon="person">
      <div class="row no-wrap q-pa-md">
        <div class="column">
          <router-link to="/profil" class="item-menu">
            <SimpleButton
              label="Profil"
              icon="person"
              size="1.5em"
              color="grey-6"
            />
          </router-link>
          <router-link to="/mes-annonces" class="item-menu">
            <SimpleButton
              label="Mes annonces"
              icon="campaign"
              size="1.5em"
              color="grey-6"
            />
          </router-link>
          <router-link to="/messagerie" class="item-menu">
            <SimpleButton
              label="Mes messages"
              icon="message"
              size="1.5em"
              color="grey-6"
            />
          </router-link>
          <router-link to="/annonces-reserve" class="item-menu">
            <SimpleButton
              label="Mes réservations"
              icon="handshake"
              size="1.5em"
              color="grey-6"
            />
          </router-link>
        </div>
        <q-separator vertical inset class="q-mx-lg" />
        <div class="column items-center">
          <q-avatar size="72px" color="primary" text-color="white">
            {{ store.prenom_user[0] }} {{ store.nom_user[0] }}
          </q-avatar>

          <div class="text-subtitle1 q-mt-md q-mb-xs">
            {{ store.prenom_user }} {{ store.nom_user }}
          </div>

          <q-btn
            color="secondary"
            label="Déconnexion"
            push
            size="sm"
            v-close-popup
            @click="logout"
          />
        </div>
      </div>
    </q-btn-dropdown>
  </div>
</template>

<script>
import SimpleButton from "../button/SimpleButton.vue";
import { store } from "src/layouts/MainLayout.vue";

export default {
  name: "ButtonUserLogged",
  components: {
    SimpleButton,
  },
  methods: {
    logout() {
      localStorage.removeItem("id_user");
      localStorage.removeItem("token_user");
      localStorage.removeItem("nom_user");
      localStorage.removeItem("prenom_user");
      localStorage.removeItem("email_user");
      localStorage.removeItem("tel_user");
      localStorage.removeItem("type_user");
      location.replace("/");
    },
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style></style>
