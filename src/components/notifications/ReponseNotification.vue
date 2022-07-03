<template>
  <q-item clickable v-ripple>
    <q-item-section avatar>
      <q-avatar size="45px" color="primary" text-color="white">
        {{ notification.prenom[0] }} {{ notification.nom[0] }}
      </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1">
        <span class="text-bold">
          {{ notification.prenom }} {{ notification.nom }}
        </span>
        a
        <span
          :class="
            notification.status == 'accepter'
              ? 'text-bold text-green'
              : 'text-bold text-red'
          "
          >{{ notification.status }}</span
        >
        votre réservation pour l'annonce
        <span class="text-bold">{{ notification.titre }}</span></q-item-label
      >
      <q-item-label caption lines="2">
        {{ notification }}
      </q-item-label>
    </q-item-section>

    <q-item-section side top> 1 min ago </q-item-section>
  </q-item>
</template>

<script>
export default {
  props: {
    notification: Object,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
