<script setup>
const props = defineProps({})
const emits = defineEmits(['click'])
</script>

<template>
<vxe-button v-bind="props" @click="e=>emits('click',e)">
  <slot></slot>
</vxe-button>
</template>

<style scoped>

</style>