<template>
  <div>
    <q-avatar size="120px" class="q-ma-md avatar">
      <img src="https://cdn.quasar.dev/img/avatar.png" />
    </q-avatar>
    <q-btn
      round
      dense
      color="secondary"
      size="10px"
      icon="edit"
      class="edit-avatar"
    />
  </div>
</template>

<script>
export default {
  name: 'AvatarUser',
};
</script>

<style>
.avatar {
  border-radius: 15px;
}
.edit-avatar {
  position: relative;
  top: 55px;
  right: 27px;
}
</style>
