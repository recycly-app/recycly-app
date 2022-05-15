<template>
  <q-btn :color="color" class="q-my-xs full-width">
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
  },
};
</script>

<style></style>
