<template>
  <q-item class="q-my-sm" v-ripple clickable @click="changeContact">
    <q-item-section avatar>
      <q-avatar color="primary" text-color="white">
        <div style="font-size: 11px">{{ contact.nom }}</div>
      </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ contact.nom }} {{ contact.prenom }}</q-item-label>
      <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  props: {
    contact: Object,
  },

  setup(props) {
    function changeContact() {
      location.replace("/#/messagerie/" + props.contact.id_user);
      location.reload();
    }
    return {
      changeContact,
    };
  },
};
</script>

<style></style>
