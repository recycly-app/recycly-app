<template>
  <div class="text-left">
    <span class="info text-bold"> {{ label }} : </span>
    <span class="info">{{ value }} </span>
  </div>
</template>

<script>
export default {
  name: 'InfoText',
  props: {
    label: String,
    value: String,
  },
};
</script>

<style>
.info {
  font-size: 25px;
}
@media screen and (max-width: 768px) {
  .info {
    font-size: 18px;
  }
}
</style>
