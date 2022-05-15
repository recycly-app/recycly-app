<template>
  <div>
    <q-item clickable tag="a" :to="link">
      <q-item-section v-if="icon" avatar>
        <q-icon :name="icon" />
      </q-item-section>

      <q-item-section>
        <q-item-label class="text-bold">{{ title }}</q-item-label>
      </q-item-section>
    </q-item>
    <q-separator v-if="separator" color="orange-7" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "ItemMenu",
  props: {
    title: {
      type: String,
      required: true,
    },

    link: {
      type: String,
    },

    icon: {
      type: String,
      default: "",
    },

    separator: {
      type: Boolean,
      default: false,
    },
    index: {
      type: Number,
    },
  },
  setup() {},
});
</script>
