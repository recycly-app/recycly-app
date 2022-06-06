<template>
  <div class="row">
    <ListeContacts class="col-3" />
    <EspaceDiscussion class="col-9" />
  </div>
</template>

<script>
import ListeContacts from "src/components/messagerie/ListeContacts.vue";
import EspaceDiscussion from "src/components/messagerie/EspaceDiscussion.vue";
export default {
  components: {
    ListeContacts,
    EspaceDiscussion,
  },
};
</script>

<style></style>
