<template>
  <div>
    <q-card>
      <InfoAnnonceur :annonceur="annonceur" :date="annonce.date" v-if="!own" />
      <q-separator />

      <div>
        <div class="row justify-center q-mt-md">
          <q-img
            :src="`${apiUrl}/images/${annonce.photo_annonce}`"
            class="img-more-info"
          />
        </div>
        <q-card-section class="q-pb-none">
          <q-btn
            fab
            color="secondary"
            icon="place"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%)"
            @click="showDialogMap()"
          />
        </q-card-section>
        <div
          class="col-auto text-grey text-caption q-pt-md row justify-end q-pa-md items-center"
        >
          <q-icon name="place" />
          {{ annonce.wilaya }}
        </div>
        <q-card-section class="q-py-xs">
          <div class="text-h5">{{ annonce.titre }}</div>
          <div class="text-subtitle2 text-blue-5">{{ annonce.prix }} DA</div>
          <div class="text-subtitle2 text-secondary" v-if="annonce.quantite">
            Quantité :{{ annonce.quantite }}
          </div>
        </q-card-section>
        <q-separator />

        <q-card-section class="scroll q-pa-lg">
          <p>
            {{ annonce.description }}
          </p>
        </q-card-section>

        <q-separator />
      </div>
      <q-separator />
      <q-card-actions align="right">
        <q-btn
          flat
          icon="chat"
          label="Contacter"
          v-if="!own"
          @click="goToMessage()"
        />
        <q-btn
          flat
          label="Réserver"
          v-if="!own"
          @click="showDialogReserver()"
        />
        <q-btn flat label="Fermer" color="secondary" v-close-popup />
      </q-card-actions>
    </q-card>
    <!-- ------------------------------------------Dialogue Map --------------------------------------------->
    <q-dialog v-model="showMap">
      <MapLocalisation :coords="annonce.lieu_recuperation" />
    </q-dialog>

    <!-- ------------------------------------------Dialogue Réserver --------------------------------------------->
    <q-dialog v-model="showReserver">
      <ReserverAnnonce :type="annonce.type" :id="annonce.id_annonce" />
    </q-dialog>

    <!-- ------------------------------------------Dialogue conncetez vous --------------------------------------------->
    <q-dialog v-model="showConnectezVous">
      <ConnectezVous />
    </q-dialog>
  </div>
</template>

<script>
import { apiUrl } from "src/constants/constants";
import { ref } from "vue";
import InfoAnnonceur from "./InfoAnnonceur.vue";
import MapLocalisation from "../map/MapLocalisation.vue";
import { store } from "src/layouts/MainLayout.vue";
import axios from "axios";
import ReserverAnnonce from "./ReserverAnnonce.vue";
export default {
  name: "MoreInfo",
  components: {
    InfoAnnonceur,
    InfoAnnonceur,
    MapLocalisation,
    ReserverAnnonce,
  },
  props: {
    annonce: Object,
    annonceur: Object,
    own: Boolean,
  },
  data() {
    return {
      apiUrl,
    };
  },
  setup(props) {
    let showMap = ref(false);
    let showReserver = ref(false);
    let showConnectezVous = ref(false);

    return {
      showMap,
      showReserver,
      showConnectezVous,
      showDialogMap() {
        showMap.value = true;
      },
      showDialogReserver() {
        if (store.id_user == undefined) {
          showDialogConnectezVous();
        } else {
          showReserver.value = true;
        }
      },
      async goToMessage() {
        if (store.id_user == undefined) {
          showDialogConnectezVous();
        } else {
          axios
            .post(apiUrl + "/message/addContact", {
              id_user: store.id_user,
              id_contact: props.annonce.id_annonceur,
            })
            .then((res) => {
              console.log(res.data.message);
            })
            .catch((err) => console.log("erreur add contact" + err));
          location.href = `/#/messagerie/${props.annonceur.id_user}`;
        }
      },
    };
  },
};
</script>

<style>
.q-dialog__inner--minimized > div {
  width: 90%;
  max-width: 100%;
}

.img-more-info {
  width: 50%;
}

@media screen and (max-width: 600px) {
  .q-dialog__inner--minimized > div {
    width: 100%;
  }
  .img-more-info {
    width: 90%;
  }
}
</style>
