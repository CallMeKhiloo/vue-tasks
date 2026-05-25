<script setup>
import { computed, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { useProductStore } from "../stores/productStore";
import ProductDetails from "../components/ProductDetails.vue";
import ProductCard from "../components/ProductCard.vue";

const route = useRoute();
const productStore = useProductStore();

const productId = computed(() => parseInt(route.params.id));

const currentProduct = computed(() =>
  productStore.getProductById(productId.value)
);

const relatedProducts = computed(() => {
  return productStore.products.filter((p) => p.id != productId.value);
});

onMounted(async () => {
  if (productStore.products.length == 0) {
    await productStore.fetchProducts();
  }
  console.log(`ProductView mounted for ID: ${productId.value}`);
});

onUnmounted(() => console.log("ProductView unmounted"));
</script>

<template>
  <div v-if="productStore.loading" class="text-center p-12 text-xl">
    Loading product details...
  </div>

  <div v-else-if="currentProduct" class="p-6 max-w-5xl mx-auto">
    <ProductDetails :product="currentProduct" />

    <h3 class="text-xl font-bold mt-12 mb-4">Related Products</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <ProductCard
        v-for="item in relatedProducts"
        :key="item.id"
        :product="item"
      />
    </div>
  </div>
  
  <div v-else class="text-center p-12 text-error text-xl">
    Product not found!
  </div>
</template>