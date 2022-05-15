<template>
  <div>
    <q-item clickable tag="a" :href="link">
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

<scripts>
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
      default: "#",
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
  // setup() {},
});
</scripts>
