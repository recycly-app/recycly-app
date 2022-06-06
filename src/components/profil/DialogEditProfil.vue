<template>
  <q-card>
    <q-card-section class="row items-center q-pb-none">
      <div class="text-h6">Modifier les informations de votre profil</div>
      <q-space />
      <q-btn icon="close" flat round dense v-close-popup />
    </q-card-section>

    <q-card-section>
      <TextInput type="text" label="Nom" />
      <TextInput type="text" label="Prénom" />
      <TextInput type="text" label="Téléphone" />
      <q-separator />
      <div class="text-h7 q-mt-md">Modifier votre mot de passe</div>
      <TextInput type="text" label="Votre ancien mot de passe" />
      <TextInput type="text" label="votre nouveau mot de passe" />
      <TextInput type="text" label="Confirmer le nouveau mot de passe" />
      <SimpleButton label="Valider" color="primary" />
    </q-card-section>
  </q-card>
</template>

<script>
import TextInput from "../inputs/TextInput.vue";
import SimpleButton from "../button/SimpleButton.vue";
export default { components: { TextInput, SimpleButton } };
</script>

<style></style>
