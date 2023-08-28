<script lang="ts" setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

defineOptions({ name: 'SvgIcon' })

const symbolId = computed(() => `#icon-${props.name}`)
</script>

<template>
  <svg aria-hidden="true" class="svg-icon">
    <use :href="symbolId" fill="currentColor" />
  </svg>
</template>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
