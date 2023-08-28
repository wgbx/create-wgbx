<script lang="ts" setup>
import { useAppStore } from '@/store'

defineOptions({ name: 'Detail' })

const appStore = useAppStore()
const count = computed(() => appStore.count)
</script>

<template>
  <div>详情页</div>
  <button @click="appStore.setCount(count + 1)">{{ count }}</button>
</template>

<style lang="scss" scoped>
button {
  margin: 40px 0;
  padding: 0 40px;
}
</style>
