<script setup>
import { onMounted, onUnmounted } from "vue";
import { RouterLink } from "vue-router";
import { useCartStore } from "../stores/cartStore";

const cartStore = useCartStore();

onMounted(() => {
  console.log("NavBar component mounted");
});

onUnmounted(() => {
  console.log("NavBar component unmounted");
});
</script>

<template>
  <header
    class="navbar bg-neutral text-neutral-content justify-center font-bold text-xl py-4 shadow-md"
  >
    <div class="flex gap-6 items-center">
      <RouterLink to="/" class="link link-hover">Home</RouterLink>
      <RouterLink to="/about" class="link link-hover">About</RouterLink>

      <RouterLink to="/cart" class="link link-hover flex items-center gap-2">
        Cart
        <span
          v-if="cartStore.totalItems > 0"
          class="badge badge-primary font-sans text-xs px-2 py-1 rounded-full"
        >
          {{ cartStore.totalItems }}
        </span>
      </RouterLink>
    </div>
  </header>
</template>
