<script setup>
import { onMounted, onUnmounted } from "vue";
import { useCartStore } from "@/stores/cartStore";
defineProps(["product"]);
const cartStore = useCartStore();

onMounted(() => console.log("ProductCard mounted"));
onUnmounted(() => console.log("ProductCard unmounted"));
</script>

<template>
  <div class="card w-full bg-base-100 shadow-xl m-2">
    <figure><img :src="product.image" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">
        {{ product.name }}
        <div v-if="product.badge" class="badge badge-secondary">
          {{ product.badge }}
        </div>
      </h2>
      <p class="font-bold text-lg">${{ product.price }}</p>
      <p class="text-sm text-muted-foreground">
        {{ product.stock }} left
      </p>
      <div class="card-actions justify-end">
        <router-link
          :to="`/product/${product.id}`"
          class="btn btn-sm btn-outline btn-primary"
        >
          View Product
        </router-link>
        <button
          class="btn btn-sm btn-primary"
          :disabled="product.stock === 0"
          @click="cartStore.addToCart(product)"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>
