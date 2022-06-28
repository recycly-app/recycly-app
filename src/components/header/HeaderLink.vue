<template>
  <router-link :to="to" class="item-menu">
    <q-tab :label="label" />
  </router-link>
</template>

<script>
export default {
  name: "HeaderLink",
  props: {
    to: String,
    label: String,
  },
};
</script>

<style>
.item-menu {
  text-decoration: none;
  color: white;
}
</style>
