<template>
  <div class="profil">
    <AvatarUser />
    <InfoProfil />
  </div>
</template>

<script>
import AvatarUser from 'src/components/profil/AvatarUser.vue';
import InfoProfil from 'src/components/profil/InfoProfil.vue';
export default {
  name: 'ProfilPage',
  components: {
    InfoProfil,
    AvatarUser,
  },
};
</script>

<style>
.profil {
  /* border: 1px solid black; */
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
</style>
