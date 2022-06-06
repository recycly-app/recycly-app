<template>
  <div class="menu">
    <q-btn rounded color="secondary" icon="more_vert">
      <q-menu>
        <q-list style="min-width: 100px">
          <q-item clickable v-close-popup>
            <q-item-section @click="showDialog"
              >Modifier le profil</q-item-section
            >
          </q-item>

          <q-item clickable v-close-popup>
            <q-item-section>Supprimer le compte</q-item-section>
          </q-item>
          <q-separator />
        </q-list>
      </q-menu>
    </q-btn>
    <q-dialog v-model="dialog"> <DialogEditProfil /> </q-dialog>
  </div>
</template>

<script>
import { ref } from "vue";
import DialogEditProfil from "./DialogEditProfil.vue";

export default {
  methods: {
    showDialog() {
      this.dialog = true;
    },
  },
  setup() {
    return {
      dialog: ref(false),
    };
  },
  components: { DialogEditProfil },
};
</script>

<style>
.card .menu {
  width: 100%;
  height: 3.5rem;
  padding: 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  position: relative;
  box-sizing: border-box;
}
</style>
