<template>
  <div class="row q-gutter-md filtre" style="width: 100%">
    <SelectInput
      icon="place"
      label="Wilaya"
      :options="wilayaName"
      v-model="wilaya"
      class="col"
    />
    <SelectInput
      icon="list"
      label="type"
      :options="typeOptions"
      v-model="type"
      class="col"
    />
    <SelectInput
      icon="list"
      label="Catégorie"
      :options="categorieOptionRecondi"
      v-model="categorie"
      class="col"
    />

    <q-btn rounded color="secondary" size="md" label="Filtrer" />
  </div>
</template>

<script>
import { ref } from 'vue';
// constants
import { wilaya } from 'src/constants/constants';
import { categorieOptionRecondi } from 'src/constants/categorie';

import SelectInput from './inputs/SelectInput.vue';

export default {
  name: 'FiltreRecherche',
  components: { SelectInput },
  setup() {
    let wilayaName = [];
    wilaya.map((item) => {
      wilayaName.push(item.name);
    });

    return {
      wilayaName,
      categorieOptionRecondi,
      wilaya: ref(null),
      type: ref(null),
      categorie: ref(null),
      options: ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'],
      typeOptions: ['Recyclage', 'Reconditionnement'],
    };
  },
};
</script>

<style>
.filtre {
  padding: 10px 10px;
  padding-bottom: 20px;
  margin-top: 10px;
  border: 1px solid gray;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
}
</style>
