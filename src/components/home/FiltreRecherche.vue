<template>
  <div class="row q-gutter-md filtre" style="width: 100%">
    <SelectInput
      icon="place"
      label="Wilaya"
      :options="wilayaName"
      v-model="wilaya"
      class="col"
      @send-value="setWilaya"
    />
    <SelectInput
      icon="list"
      label="type"
      :options="typeOptions"
      v-model="type"
      class="col"
      @send-value="setType"
      defaultValue="Reconditionnement"
    />
    <SelectInput
      icon="list"
      label="Catégorie"
      :options="categorieOptionRecondi"
      v-model="categorie"
      class="col"
      @send-value="setCategorie"
      v-if="type == 'Reconditionnement'"
    />
    <SelectInput
      icon="list"
      label="Catégorie"
      :options="categorieOptionRecyclage"
      v-model="categorie"
      class="col"
      @send-value="setCategorie"
      v-else
    />

    <q-btn
      rounded
      color="secondary"
      size="md"
      label="Rechercher"
      class="btn-filtre"
      @click="sendValue"
    />
  </div>
</template>

<script>
import { ref } from "vue";
// constants
import { wilayaOption } from "src/constants/constants";
import {
  categorieOptionRecondi,
  categorieOptionRecyclage,
} from "src/constants/categorie";

import SelectInput from "../inputs/SelectInput.vue";

export default {
  name: "FiltreRecherche",
  components: { SelectInput },
  methods: {
    setWilaya(payload) {
      this.wilaya = payload.val;
    },
    setType(payload) {
      this.type = payload.val;
    },
    setCategorie(payload) {
      this.categorie = payload.val;
    },
    sendValue() {
      this.$emit("send-value", {
        wilaya: this.wilaya,
        type: this.type,
        categorie: this.categorie,
      });
    },
  },
  setup() {
    let wilayaName = [];
    wilayaOption.map((item) => {
      wilayaName.push(item.name);
    });
    const wilaya = ref("null");
    const type = ref("Reconditionnement");
    const categorie = ref("null");
    return {
      wilayaName,
      categorieOptionRecondi,
      categorieOptionRecyclage,
      wilaya,
      type,
      categorie,
      typeOptions: ["Recyclage", "Reconditionnement"],
    };
  },
};
</script>

<style>
.filtre {
  padding: 10px 10px;
  margin-top: 1px;
  margin-left: auto;
  margin-right: auto;
}

.btn-filtre {
  bottom: 10px;
}
</style>
