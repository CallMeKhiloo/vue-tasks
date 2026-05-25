<script setup>
import { onMounted, onUnmounted } from "vue";
import CarouselBanner from "@/components/CarouselBanner.vue";
import ProductCard from "@/components/ProductCard.vue";
import { useProductStore } from "@/stores/productStore";

const productStore = useProductStore();
const { fetchProducts, decreaseStock, getProductById } = productStore;

onMounted(async () => {
  await productStore.fetchProducts();
  console.log(
    `HomeView mounted — ${productStore.products.length} products loaded`,
  );
});

onUnmounted(() => console.log("HomeView unmounted"));
</script>

<template>
  <div>
    <CarouselBanner />
    <p v-if="productStore.loading">Loading products...</p>
    <p v-else-if="productStore.error">Error: {{ productStore.error }}</p>
    
    <div v-else class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
      <ProductCard 
        v-for="product in productStore.products" 
        :key="product.id" 
        :product="product" 
      />
    </div>
  </div>
</template>
