<template>
  <div class="">
    <ToolbarDiscussion prenom="Hocine" nom="FEDANI" />
    <q-separator />
    <ChatDiscussion />
  </div>
</template>

<script>
import ToolbarDiscussion from "./ToolbarDiscussion.vue";
import ChatDiscussion from "./ChatDiscussion.vue";
export default { components: { ToolbarDiscussion, ChatDiscussion } };
</script>

<style></style>
