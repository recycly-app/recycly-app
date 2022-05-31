<template>
  <div class="q-ma-sm">
    <q-select
      filled
      dense
      color="secondary"
      v-model="value"
      :options="options"
      :label="label"
      :display-value="defaultValue"
      @blur="sendValue()"
    >
      <template v-slot:prepend>
        <q-icon :name="icon" />
      </template>
    </q-select>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "SelectInput",
  props: {
    options: Array,
    icon: String,
    label: String,
    defaultValue: String,
  },
  methods: {
    sendValue() {
      this.$emit("send-value", { val: this.value });
    },
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
