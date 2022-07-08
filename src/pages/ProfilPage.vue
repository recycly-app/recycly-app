<template>
  <div class="profil">
    <div class="card">
      <div class="banner">
        <AvatarUser :prenom="store.prenom_user" :nom="store.nom_user" />
      </div>
      <MenuProfil />

      <InfoProfil class="q-pa-md" />
    </div>
  </div>
</template>

<script>
import AvatarUser from "src/components/profil/AvatarUser.vue";
import InfoProfil from "src/components/profil/InfoProfil.vue";
import MenuProfil from "src/components/profil/MenuProfil.vue";
import { store } from "src/layouts/MainLayout.vue";
export default {
  name: "ProfilPage",
  components: {
    InfoProfil,
    AvatarUser,
    MenuProfil,
  },
  setup() {
    return {
      store,
    };
  },
};
</script>

<style>
.profil {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  text-align: center;
  padding: 20px;
}

@media screen and (min-width: 768px) {
  .profil {
    width: 70%;
  }
}

@media screen and (max-width: 425px) {
  .profil {
    width: 90%;
  }
}

/* --------------------------------- */
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,400i,700");

.card {
  background-color: #fff;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 2rem;
  box-shadow: 0px 1rem 1.5rem rgba(0, 0, 0, 0.5);
  margin-left: auto;
  margin-right: auto;
}
.card .banner {
  background: linear-gradient(#8fc255, #f27305);

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 7rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  box-sizing: border-box;
}
</style>
