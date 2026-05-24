<script setup>
import { computed, onMounted, onUnmounted } from "vue";
const props = defineProps(["product"]);
defineEmits(["buy"]);

const discountedPrice = computed(() => {
  return (
    props.product.price - props.product.price * (props.product.discount / 100)
  );
});

onMounted(() => console.log("ProductDetails mounted"));
onUnmounted(() => console.log("ProductDetails unmounted"));
</script>

<template>
  <div
    class="flex flex-col md:flex-row gap-8 bg-base-100 p-6 rounded-2xl shadow-xl"
  >
    <img :src="product.image" class="max-w-sm rounded-lg shadow-md" />
    <div>
      <h1 class="text-3xl font-bold">{{ product.name }}</h1>
      <div class="flex gap-2 my-2">
        <span
          v-for="tag in product.tags"
          :key="tag"
          class="badge badge-outline"
          >{{ tag }}</span
        >
      </div>
      <p class="py-4">{{ product.description }}</p>

      <div class="text-2xl font-semibold mb-4">
        <span
          v-if="product.discount > 0"
          class="line-through text-gray-400 mr-2"
          >${{ product.price }}</span
        >
        <span>${{ discountedPrice }}</span>
      </div>

      <p class="mb-4">
        Stock left: <span class="font-bold">{{ product.stock }}</span>
      </p>

      <button
        @click="$emit('buy', product.id)"
        :disabled="product.stock === 0"
        class="btn btn-primary"
      >
        {{ product.stock > 0 ? "Buy Now" : "Out of Stock" }}
      </button>
    </div>
  </div>
</template>
