<template>
  <div class="row q-mr-md">
    <q-input
      dense
      rounded
      standout
      v-model="text"
      input-class="text-left"
      class="q-ma-xs"
      placeholder="Rechercher"
      bg-color="white"
      color="secondary"
    >
      <template v-slot:append>
        <q-icon v-if="text === ''" />
        <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
      </template>
    </q-input>
    <div class="q-pa-sm">
      <q-btn round color="secondary" icon="search" size="sm" />
    </div>
  </div>
</template>

<script></script>
<script>
import { ref } from 'vue';

export default {
  name: 'SearchInput',

  setup() {
    return {
      text: ref(''),
    };
  },
};
</script>

<style></style>
