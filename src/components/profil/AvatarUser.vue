<template>
  <div>
    <q-avatar
      size="120px"
      color="primary"
      text-color="white"
      class="q-ma-md avatar"
    >
      {{ prenom[0] }} {{ nom[0] }}
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
  props: {
    prenom: String,
    nom: String,
  },
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
