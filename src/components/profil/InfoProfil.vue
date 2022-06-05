<template>
  <div class="info-user">
    <h2 class="name">{{ store.prenom_user }} {{ store.nom_user }}</h2>

    <div class="title">{{ store.type_user }}</div>
    <div class="actions">
      <div class="follow-info">
        <h2><span class="text-secondary">12</span><small>Annonces</small></h2>
      </div>
    </div>
    <div class="coordonnees">
      <div id="coordonnees">Coordonnées</div>
      <div><span>Téléphone : </span>{{ store.tel_user }}</div>
      <div><span>E-mail : </span>{{ store.email_user }}</div>
    </div>
  </div>
</template>

<script>
import { store } from "src/layouts/MainLayout.vue";
export default {
  name: "InfoProfil",

  data() {
    return {
      store,
    };
  },
};
</script>

<style>
.info-user {
  width: 90%;
  margin-right: auto;
  margin-left: auto;
}

@media screen and (max-width: 425px) {
  .info-user {
    padding-left: 0;
  }
}

/* ----------------------- */
.info-user h2.name {
  font-size: 30px;
  text-align: center;
  margin: 0;
  font-weight: 400;
}
.info-user .title {
  color: #a0a0a0;
  font-size: 16px;
  text-align: center;
  padding: 0 2rem 1.2rem;
}
.info-user .actions {
  display: flex;
  flex-direction: column;
  order: 99;
}
.info-user .actions .follow-info {
  display: flex;
}
.info-user .actions .follow-info h2 {
  text-align: center;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
}
.info-user .actions .follow-info h2 {
  text-decoration: none;
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.8rem;
  transition: background-color 100ms ease-in-out;
}
.info-user .actions .follow-info h2 span {
  color: #1c9eff;
  font-weight: bold;
  transform-origin: bottom;
  transform: scaleY(1.3);
  transition: color 100ms ease-in-out;
  cursor: pointer;
}
.info-user .actions .follow-info h2 small {
  color: #afafaf;
  font-size: 20px;
  font-weight: normal;
}

.info-user .coordonnees #coordonnees {
  font-size: 20px;
  font-weight: 400;
}
</style>
