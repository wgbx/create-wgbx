<script lang="ts" setup>
defineOptions({ name: 'Home' })

const count = ref(0)
</script>

<template>
  <div>首页</div>
  <button @click="count++">{{ count }}</button>
</template>

<style lang="scss" scoped>
button {
  margin: 40px 0;
  padding: 0 40px;
}
</style>
