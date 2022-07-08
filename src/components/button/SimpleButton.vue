<template>
  <q-btn :color="color" class="q-my-xs full-width">
    <q-badge color="red" rounded floating v-if="badge">{{ badge }}</q-badge>

    <div>{{ label }}</div>
    <q-icon right :size="size" :name="icon" />
  </q-btn>
</template>

<script>
export default {
  name: "SimpleButton",
  props: {
    label: String,
    icon: String,
    size: String,
    color: String,
    badge: Boolean,
  },
};
</script>

<style></style>
