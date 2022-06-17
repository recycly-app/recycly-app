<template>
  <q-card>
    <q-item>
      <q-item-section avatar top>
        <q-avatar color="primary" text-color="white">
          <div style="font-size: 11px">{{ reserveur.nom }}</div>
        </q-avatar>
      </q-item-section>
      <q-item-section top class="full-width">
        <q-item-label class="row">
          <div style="font-size: 16px">
            {{ reserveur.prenom }} {{ reserveur.nom }}
          </div>
          <div class="row">
            <div class="text-grey-8">&nbsp; a réserver votre annonce</div>
            <div class="text-weight-medium">&nbsp;{{ annonce.titre }}</div>
            <div class="text-weight-medium">
              <span class="text-grey-8">&nbsp;le&nbsp;</span>
              {{ annonce.date.substr(0, 10) }}
              <span class="text-grey-8">&nbsp;à&nbsp;</span>
              {{ annonce.heure.substr(0, 5) }}
            </div>
          </div>
        </q-item-label>
        <q-item-section>
          <div>Commentaire : {{ annonce.commentaire }}</div>
          <div v-if="annonce.quantite">Quantité : {{ annonce.quantite }}</div>
        </q-item-section>
        <q-item-section side>
          <q-btn flat label="Fermer" color="secondary" v-close-popup />
        </q-item-section>
      </q-item-section>
    </q-item>
  </q-card>
</template>

<script>
export default {
  props: {
    reserveur: Object,
    annonce: Object,
  },
};
</script>

<style></style>
