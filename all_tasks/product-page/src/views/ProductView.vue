<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import ProductDetails from '../components/ProductDetails.vue'
import ProductCard from '../components/ProductCard.vue'

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
})
defineEmits(['buy'])

const currentProduct = computed(() => props.products.find(p => p.id === props.id))

// Exclude current item from related selection
const relatedProducts = computed(() => props.products.filter(p => p.id !== props.id))

onMounted(() => console.log(`ProductView mounted for ID: ${props.id}`))
onUnmounted(() => console.log("ProductView unmounted"))
</script>

<template>
  <div class="p-6 max-w-5xl mx-auto" v-if="currentProduct">
    <ProductDetails :product="currentProduct" @buy="$emit('buy', currentProduct.id)" />

    <h3 class="text-xl font-bold mt-12 mb-4">Related Products</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <ProductCard v-for="item in relatedProducts" :key="item.id" :product="item" />
    </div>
  </div>
  <div v-else class="text-center p-12 text-error text-xl">
    Product not found!
  </div>
</template>