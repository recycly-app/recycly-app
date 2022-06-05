<template>
  <div class="menu">
    <!-- <div class="opener"><span></span><span></span><span></span></div> -->
    <q-btn rounded color="secondary" icon="more_vert">
      <q-menu>
        <q-list style="min-width: 100px">
          <q-item clickable v-close-popup>
            <q-item-section>Modifier le profil</q-item-section>
          </q-item>

          <q-item clickable v-close-popup>
            <q-item-section>Supprimer le compte</q-item-section>
          </q-item>
          <q-separator />
        </q-list>
      </q-menu>
    </q-btn>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
