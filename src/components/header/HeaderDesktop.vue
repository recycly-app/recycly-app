<template>
  <q-header elevated v-if="$q.platform.is.desktop">
    <q-toolbar>
      <q-tabs>
        <div class="row">
          <router-link to="/" class="item-menu row">
            <q-tab class="bg-white"
              ><q-img
                src="../../assets/logo.png"
                spinner-color="white"
                style="height: 90%; width: 40px"
            /></q-tab>
          </router-link>
          <HeaderLink to="/" label="Acceuil" />
          <HeaderLink to="/recyclage" label="Recyclage" />
          <HeaderLink to="/reconditionnement" label="Reconditionnement" />
          <HeaderLink to="/deposer-annonce" label="Déposer Annonce" />

          <!-- Connexion  -->
          <ButtonUser :isLogged="store.isLogged" />
          <SearchInput />
        </div>
      </q-tabs>
    </q-toolbar>
  </q-header>
</template>

<script>
import SearchInput from '../inputs/SearchInput.vue';
import ButtonUser from './ButtonUser.vue';
import HeaderLink from './HeaderLink.vue';
import { store } from 'src/layouts/MainLayout.vue';

export default {
  name: 'HeaderDesktop',
  components: { SearchInput, ButtonUser, HeaderLink },
  data() {
    return {
      store,
    };
  },
};
</script>

<style>
.user {
  width: 30vw;
  padding: 8px;
}
.btn-connexion {
  float: right;
}
</style>
