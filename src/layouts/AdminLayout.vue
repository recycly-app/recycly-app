<template>
  <div>
    <q-layout
      view="hHh Lpr lff"
      container
      style="height: 100vh"
      class="shadow-2 rounded-borders"
    >
      <q-header elevated class="bg-black">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>Plateforme administrateur</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        :width="200"
        :breakpoint="500"
        bordered
        class="bg-grey-3"
      >
        <q-list padding>
          <router-link to="/admin/annonces-recyclage" class="item-menu">
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="recycling" />
              </q-item-section>
              <q-item-section>Annonces recyclage</q-item-section>
            </q-item>
          </router-link>

          <router-link to="/admin/annonces-reconditionnement" class="item-menu">
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="construction" />
              </q-item-section>
              <q-item-section>Annonces reconditionnement </q-item-section>
            </q-item>
          </router-link>

          <router-link to="/admin/utilisateur" class="item-menu">
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="group" />
              </q-item-section>
              <q-item-section> Utilisateur </q-item-section>
            </q-item>
          </router-link>
          <q-separator />
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="logout" />
            </q-item-section>
            <q-item-section> Déconnexion </q-item-section>
          </q-item>
        </q-list>
      </q-drawer>

      <q-page-container>
        <q-page padding>
          <router-view />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      drawer: ref(false),
      miniState: ref(true),
    };
  },
};
</script>

<style>
.item-menu {
  text-decoration: none;
  color: black;
}
</style>
