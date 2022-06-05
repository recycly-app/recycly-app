<template>
  <div class="profil">
    <div class="card">
      <div class="banner">
        <AvatarUser />
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

export default {
  name: "ProfilPage",
  components: {
    InfoProfil,
    AvatarUser,
    MenuProfil,
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

.card .menu {
  width: 100%;
  height: 3.5rem;
  padding: 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  position: relative;
  box-sizing: border-box;
}
.card .menu .opener {
  width: 2.5rem;
  height: 2.5rem;
  position: relative;
  border-radius: 50%;
  transition: background-color 100ms ease-in-out;
}
.card .menu .opener:hover {
  background-color: #f2f2f2;
}
.card .menu .opener span {
  background-color: #404040;
  width: 0.4rem;
  height: 0.4rem;
  position: absolute;
  top: 0;
  left: calc(50% - 0.2rem);
  border-radius: 50%;
}
.card .menu .opener span:nth-child(1) {
  top: 0.45rem;
}
.card .menu .opener span:nth-child(2) {
  top: 1.05rem;
}
.card .menu .opener span:nth-child(3) {
  top: 1.65rem;
}
</style>
