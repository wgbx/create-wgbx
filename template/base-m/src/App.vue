<script setup lang="ts">
import routes from './router/routes'

defineOptions({ name: 'App' })

const router = useRouter()
const ROUTER_MAP = ref(routes.map(({ name, meta }) => ({ name, title: meta.title })))
</script>

<template>
  <div class="page">
    <svg-icon name="star" />
    <div class="page-routers">
      <div v-for="item in ROUTER_MAP" :key="item.name" @click="router.push({ name: item.name })">{{ item.title }}</div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.page {
  width: 750px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  background-image: linear-gradient(yellow, pink);

  .svg-icon {
    font-size: 140px;
    color: #0076ff;
    animation: 2.5s rotation infinite linear;
  }

  .page-routers {
    display: flex;
    width: 250px;
    justify-content: space-between;
    margin: 40px 0;
    line-height: 60px;
    color: #0076ff;
    text-underline-offset: 10px;
    text-decoration: underline;
  }
}

@keyframes rotation {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(-1, 1);
  }

  100% {
    transform: scale(1);
  }
}</style>
