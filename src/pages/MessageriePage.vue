<template>
  <div class="full-height">
    <div v-if="$q.platform.is.desktop" class="row">
      <ListeContacts class="col-3" />
      <EspaceDiscussion class="col-9" />
    </div>
    <div v-if="$q.platform.is.mobile" class="full-width">
      <EspaceDiscussionMobile />
    </div>
  </div>
</template>

<script>
import ListeContacts from "src/components/messagerie/ListeContacts.vue";
import EspaceDiscussion from "src/components/messagerie/EspaceDiscussion.vue";
import EspaceDiscussionMobile from "src/components/messagerie/EspaceDiscussionMobile.vue";
export default {
  components: {
    ListeContacts,
    EspaceDiscussion,
    EspaceDiscussionMobile,
  },
};
</script>

<style></style>
