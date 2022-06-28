<template>
  <div>
    <q-header elevated v-if="$q.platform.is.mobile" class="bg-light-green-7">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          print-only="mobile"
        />

        <q-toolbar-title> Recycly </q-toolbar-title>
        <FiltreRechercheMobile />
        <ButtonUser :isLogged="store.isLogged" />
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :breakpoint="690"
      behavior="mobile"
    >
      <InfoUser />
      <q-list>
        <ItemMenu
          v-for="link in itemsMenu"
          :key="link.title"
          v-bind="link"
          :separator="link.separator"
        />
      </q-list>
    </q-drawer>
  </div>
</template>

<script>
import InfoUser from "src/components/menu/InfoUser.vue";
import ItemMenu from "src/components/menu/ItemMenu.vue";
import ButtonUser from "./ButtonUser.vue";
import { store } from "src/layouts/MainLayout.vue";
import { ref } from "vue";
import FiltreRechercheMobile from "../home/FiltreRechercheMobile.vue";

const linksList = [
  {
    title: "Accueil",
    icon: "home",
    link: "/",
    separator: true,
  },
  {
    title: "Recyclage",
    icon: "recycling",
    link: "/recyclage",
    separator: false,
  },
  {
    title: "Reconditionnement ",
    icon: "construction",
    link: "/reconditionnement",
    separator: false,
  },
  {
    title: "Déposer annonce",
    icon: "campaign",
    link: "/deposer-annonce",
    separator: true,
  },
  {
    title: "Se connecter",
    caption: "Community Quasar projects",
    icon: "fa-solid fa-arrow-right-to-bracket",
    link: "/connexion",
    separator: false,
  },
  {
    title: "S'inscrire",
    icon: "fa-solid fa-user-plus",
    link: "/inscription",
    separator: true,
  },
  {
    title: "Twitter",
    icon: "fa-brands fa-twitter",
    link: "https://twitter.quasar.dev",
    separator: false,
  },
  {
    title: "Facebook",
    icon: "fa-brands fa-facebook",
    link: "https://facebook.quasar.dev",
    separator: false,
  },
  {
    title: "Contact",
    icon: "record_voice_over",
    link: "/contact",
    separator: false,
  },
];
export default {
  name: "HeaderMobile",
  components: { InfoUser, ItemMenu, ButtonUser, FiltreRechercheMobile },
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      itemsMenu: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style></style>
