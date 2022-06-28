<template>
  <div>
    <div class="text-h5">Annonces</div>

    <q-markup-table separator="horizontal" flat bordered>
      <thead>
        <tr>
          <th class="text-left">Id annonce</th>
          <th class="text-right">Titre</th>
          <th class="text-right">Date de publication</th>
          <th class="text-right">Annonceur</th>
          <th class="text-right">Opération</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(annonce, index) in annonces" :key="index">
          <td class="text-left">{{ annonce.id_annonce }}</td>
          <td class="text-left">{{ annonce.titre }}</td>
          <td class="text-right">{{ annonce.date }}</td>
          <td class="text-right">{{ annonce.id_annonceur }}</td>
          <td class="text-right">
            <div>
              <q-btn
                flat
                icon="add_circle"
                color="green-5"
                dense
                size="10px"
                label="Voir plus"
                class="q-mr-sm"
              />
              <q-btn icon="delete" color="red-5" dense size="10px" />
            </div>
          </td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
import axios from "axios";
import { apiUrl } from "src/constants/constants";

export default {
  data() {
    return {
      annonces: null,
    };
  },
  mounted() {
    axios
      .get(apiUrl + "/annonce/Recyclage/getRecent")
      .then((res) => {
        this.annonces = res.data.annonce;
      })
      .catch();
  },
};
</script>

<style></style>
