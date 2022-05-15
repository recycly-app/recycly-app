<template>
  <div class="info-user">
    <InfoText label="Nom" :value="store.nom_user" />
    <InfoText label="Prénom" :value="store.prenom_user" />
    <InfoText label="E-mail" :value="store.email_user" />
    <InfoText label="Téléphone" :value="store.tel_user" />
    <InfoText label="Mot de passe" value="....." />
    <q-btn
      round
      dense
      color="secondary"
      size="15px"
      icon="edit_note"
      class="edit-info"
    />
  </div>
</template>

<script>
import InfoText from './InfoText.vue';
import { store } from 'src/layouts/MainLayout.vue';
export default {
  name: 'InfoProfil',
  components: { InfoText },
  data() {
    return {
      store,
    };
  },
};
</script>

<style>
.info-user {
  border: none;
  background: #ffeec1;
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  padding: 3% 2% 4% 20%;
}

@media screen and (max-width: 425px) {
  .info-user {
    padding-left: 0;
  }
}

.edit-info {
  float: right;
}
</style>
