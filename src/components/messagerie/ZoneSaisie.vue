<template>
  <q-input
    outlined
    bottom-slots
    v-model="text"
    label="Votre message"
    dense
    class="q-mt-sm"
  >
    <template v-slot:after>
      <q-btn round dense flat icon="send" />
    </template>
  </q-input>
</template>

<script>
export default {};
</script>

<style></style>
