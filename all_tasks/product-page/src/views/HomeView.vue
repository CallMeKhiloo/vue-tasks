<script setup>
import { onMounted, onUnmounted } from "vue";
import CarouselBanner from "../components/CarouselBanner.vue";
import ProductCard from "../components/ProductCard.vue";

const props = defineProps(["products"]);

onMounted(() =>
  console.log(`HomeView mounted — ${props.products.length} products loaded`),
);
onUnmounted(() => console.log("HomeView unmounted"));
</script>

<template>
  <div class="p-6 max-w-6xl mx-auto">
    <CarouselBanner />
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
      <ProductCard v-for="item in products" :key="item.id" :product="item" />
    </div>
  </div>
</template>
