<script setup>
import { onMounted, onUnmounted } from "vue";
onMounted(() => console.log("AboutView mounted"));
onUnmounted(() => console.log("AboutView unmounted"));
</script>

<template>
  <div
    class="hero min-h-[50vh] bg-base-100 max-w-2xl mx-auto rounded-xl shadow-xl mt-12 p-8 text-center"
  >
    <div>
      <h1 class="text-4xl font-bold mb-4">About This Application</h1>
      <p class="text-base text-gray-600 leading-relaxed">
        test test test test test test test test
      </p>
    </div>
  </div>
</template>
