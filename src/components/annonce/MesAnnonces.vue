<template>
  <div>
    <q-card class="my-card">
      <q-img
        :src="`${apiUrl}/images/${annonce.photo_annonce}`"
        style="height: 225px"
      />

      <q-card-section class="q-pb-none">
        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis" :title="annonce.titre">
            {{ annonce.titre }}
          </div>
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-caption text-grey q-ma-none">
          {{ annonce.categorie }}
        </div>

        <div class="text-subtitle2 text-blue-5">{{ annonce.prix }} DA</div>
      </q-card-section>

      <q-separator />

      <q-card-actions class="q-py-none">
        <q-btn flat color="red-6" @click="deleteAnnonce" icon="delete" />

        <q-btn flat color="primary" @click="showDialogEdit()">
          <q-icon name="edit_note" color="primary" />
          modifier
        </q-btn>
        <q-btn
          flat
          label="Voir plus"
          size="12px"
          @click="showDialogMoreInfo()"
        />
      </q-card-actions>
    </q-card>
    <!-- ------------------------------------------Dialogue More Info --------------------------------------------->
    <q-dialog v-model="showMoreInfo">
      <MoreInfo
        :type="type"
        :annonce="annonce"
        v-bind:annonceur="annonceur"
        :own="true"
      />
    </q-dialog>
    <!-- ------------------------------------------Dialogue Edit annonce --------------------------------------------->
    <q-dialog v-model="showEdit">
      <ModifierAnnonce :annonce="annonce" />
    </q-dialog>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import { apiUrl } from "src/constants/constants";
import MoreInfo from "./MoreInfo.vue";
import ModifierAnnonce from "./ModifierAnnonce.vue";
import { useQuasar } from "quasar";

export default {
  name: "MesAnnonces",
  props: {
    id: Number,
    annonce: Object,
    type: String,
  },

  setup(props) {
    let showMoreInfo = ref(false);
    let showEdit = ref(false);
    let annonceur = ref({});
    const $q = useQuasar();
    return {
      showMoreInfo,
      showEdit,
      annonceur,
      apiUrl,
      showDialogEdit() {
        showEdit.value = true;
      },
      deleteAnnonce() {
        $q.dialog({
          title: "Voulez vous vraiment supprimer cette annonce?",
          message: "",
          cancel: true,
          persistent: true,
        })
          .onOk(() => {
            axios
              .delete(
                apiUrl + "/annonce/Recyclage/delete/" + this.annonce.id_annonce
              )
              .then((res) => {
                location.reload();
              })
              .catch((err) => {
                console.log("Erreur supprimer annonce" + err);
              });
          })

          .onCancel(() => {
            // console.log('>>>> Cancel')
          })
          .onDismiss(() => {
            // console.log('I am triggered on both OK and Cancel')
          });
      },
      async showDialogMoreInfo() {
        showMoreInfo.value = true;
        await axios
          .get(apiUrl + "/user/getUser/" + props.annonce.id_annonceur)
          .then((res) => {
            annonceur.value = res.data.user[0];
          })
          .catch((err) => console.log("erreur annonce" + err));
      },
    };
  },
  components: { MoreInfo, ModifierAnnonce },
};
</script>

<style>
.my-card {
  width: 100%;
  max-width: 300px;
  height: 380px;
  min-width: 300px;
  margin: 10px;
}
</style>
