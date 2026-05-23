<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { ref, computed } from "vue";

const mainProduct = ref({
  id: 1,
  name: "Cozy Sneakers",
  description: "High-quality sneakers that go with everything you wear.",
  image: "https://placehold.co/600x400",
  badge: "NEW",
  price: 120,
  discount: 20,
  tags: ["Fashion", "Casual", "Sport"],
});

const relatedProducts = ref([
  {
    id: 2,
    name: "Running Shoes",
    price: 90,
    discount: 10,
    image: "https://placehold.co/400",
  },
  {
    id: 3,
    name: "Casual Boots",
    price: 150,
    discount: 0,
    image: "https://placehold.co/400",
  },
  {
    id: 4,
    name: "Flip Flops",
    price: 30,
    discount: 50,
    image: "https://placehold.co/400",
  },
]);

const discountedPrice = computed(() => {
  return mainProduct.value.price * (1 - mainProduct.value.discount / 100);
});
</script>

<template>
  <Header />
  <main class="container mx-auto p-6 max-w-4xl flex-grow space-y-12">
    <section class="card lg:card-side bg-base-100 shadow-xl overflow-hidden">
      <figure class="lg:w-1/2 bg-gray-100 p-4">
        <img
          :src="mainProduct.image"
          alt="Product Image"
          class="rounded-xl max-w-full h-auto"
        />
      </figure>

      <div class="card-body lg:w-1/2">
        <div class="card-actions justify-start">
          <span
            class="badge font-semibold"
            :style="
              mainProduct.badge === 'NEW'
                ? 'background-color: #4ade80; color: #1f2937'
                : ''
            "
          >
            {{ mainProduct.badge }}
          </span>
        </div>

        <h1 class="card-title text-3xl font-bold text-base-content">
          {{ mainProduct.name }}
        </h1>

        <p class="text-base-content/70">{{ mainProduct.description }}</p>

        <div class="flex flex-wrap gap-2">
          <span
            class="badge badge-outline"
            v-for="tag in mainProduct.tags"
            :key="tag"
            >{{ tag }}</span
          >
        </div>

        <div class="my-4 flex items-baseline gap-3">
          <span class="text-3xl font-black text-primary">$</span>

          <span
            class="text-lg line-through text-base-content/40"
            v-if="mainProduct.discount > 0"
          >
            ${{ mainProduct.price }}
          </span>
          <span class="text-3xl font-bold text-primary">
            ${{ discountedPrice.toFixed(2) }}
          </span>
        </div>

        <div class="card-actions justify-start mt-4">
          <button class="btn btn-primary px-8">Buy Now</button>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-base-content mb-6">
        Related Products
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          class="card bg-base-100 shadow-md compact"
          v-for="item in relatedProducts"
          :key="item.id"
        >
          <div class="card-actions justify-start">
            <span
              class="badge font-semibold"
              :class="
                item.badge != undefined
                  ? 'bg-green-500 text-white'
                  : 'btn-secondary text-white'
              "
            >
              {{ item.badge }}
            </span>
          </div>
          <figure class="bg-gray-50 p-4">
            <img
              :src="item.image"
              alt="Related Product"
              class="h-32 object-contain"
            />
          </figure>
          <div class="card-body">
            <h3 class="card-title text-base">{{ item.name }}</h3>

            <div class="flex items-baseline gap-2 mt-2">
              <span class="font-bold text-primary" v-if="item.discount > 0">
                ${{
                  (item.price - (item.price * item.discount) / 100).toFixed(2)
                }}
              </span>
              <span
                v-if="item.discount > 0"
                class="text-xs text-base-content/40 line-through"
              >
                ${{ item.price }}
              </span>
              <span v-else class="font-bold text-primary">
                ${{ item.price }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <Footer />
</template>

<style scoped></style>
