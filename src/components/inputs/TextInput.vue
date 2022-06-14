<template>
  <q-input
    filled
    outlined
    dense
    v-model="value"
    :type="type"
    :suffix="suffix"
    class="q-ma-sm"
    color="secondary"
    :label="label"
    :placeholder="placeholder"
  >
    <template v-slot:prepend>
      <q-icon :name="icon" />
    </template>
  </q-input>
</template>

<script>
import { ref } from "vue";

export default {
  name: "TextInput",
  props: {
    type: String,
    suffix: String,
    icon: String,
    label: String,
    placeholder: String,
  },
  setup() {
    const value = ref(null);
    return {
      value,
    };
  },
};
</script>

<style></style>
