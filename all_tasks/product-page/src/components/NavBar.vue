<script setup>
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  console.log('NavBar component mounted')
})

onUnmounted(() => {
  console.log('NavBar component unmounted')
})
</script>

<template>
  <header
    class="navbar bg-neutral text-neutral-content justify-center font-bold text-xl py-4 shadow-md"
  >
    <div class="flex gap-4">
      <router-link to="/" class="link link-hover">Home</router-link>
      <router-link to="/about" class="link link-hover">About</router-link>
    </div>
  </header>
</template>
