<template>
  <q-layout view="lHh Lpr lFf">
    <HeaderDesktop />
    <HeaderMobile />

    <q-page-container>
      <router-view />
      <!-- <q-footer reveal elevated>
        <q-toolbar>
          <q-toolbar-title>Recycly</q-toolbar-title>
        </q-toolbar>
      </q-footer> -->
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import HeaderDesktop from "src/components/header/HeaderDesktop.vue";
import HeaderMobile from "src/components/header/HeaderMobile.vue";

// store.js
import { reactive } from "vue";

let isLogged = false;
let id_user = null;
let nom_user = null;
let prenom_user = null;
let email_user = null;
let tel_user = null;
let type_user = null;

if (localStorage.getItem("id_user")) {
  isLogged = true;
  id_user = localStorage.getItem("id_user");
  nom_user = localStorage.getItem("nom_user");
  prenom_user = localStorage.getItem("prenom_user");
  email_user = localStorage.getItem("email_user");
  tel_user = localStorage.getItem("tel_user");
  type_user = localStorage.getItem("type_user");
}
export const store = reactive({
  isLogged: isLogged,
  id_user: id_user,
  nom_user: nom_user,
  prenom_user: prenom_user,
  email_user: email_user,
  tel_user: tel_user,
  type_user: type_user,
});
export default defineComponent({
  name: "MainLayout",

  components: {
    HeaderDesktop,
    HeaderMobile,
  },
});
</script>

<style></style>
