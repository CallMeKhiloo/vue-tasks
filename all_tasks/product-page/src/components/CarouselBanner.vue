<script setup>
import { onMounted, onUnmounted } from 'vue'

onMounted(() => console.log("CarouselBanner mounted"))
onUnmounted(() => console.log("CarouselBanner unmounted"))
</script>

<template>
  <div class="carousel w-full h-48 rounded-box my-4">
    <div id="slide1" class="carousel-item relative w-full justify-center items-center bg-neutral text-neutral-content">
      <h2 class="text-2xl">⚡ Big Summer Sale up to 50% Off! ⚡</h2>
    </div>
  </div>
</template>