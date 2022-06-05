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
  name: "AvatarUser",
};
</script>

<style>
.edit-avatar {
  position: relative;
  top: 115px;
  right: 50px;
}

.avatar {
  width: 8rem;
  height: 8rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.7);
  transform: translateY(50%);
}
</style>
