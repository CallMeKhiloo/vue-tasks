<script setup>
import { useCartStore } from "../stores/cartStore";

const cartStore = useCartStore();
</script>

<template>
  <div class="p-6 max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">Your Shopping Cart</h1>

    <div
      v-if="cartStore.items.length === 0"
      class="text-center py-12 bg-base-100 rounded-2xl shadow"
    >
      <p class="text-xl text-gray-500 mb-4">Your cart is empty.</p>
      <RouterLink to="/" class="btn btn-primary">Go Shopping</RouterLink>
    </div>

    <div v-else class="flex flex-col gap-6">
      <div class="overflow-x-auto bg-base-100 rounded-2xl shadow">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cartStore.items" :key="item.id">
              <td>
                <div class="flex items-center gap-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img :src="item.image" :alt="item.name" />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">{{ item.name }}</div>
                  </div>
                </div>
              </td>

              <td>${{ item.price }}</td>

              <td>
                <span class="badge badge-ghost font-semibold px-3 py-2">
                  {{ item.qty }}
                </span>
              </td>

              <td class="font-semibold">${{ item.price * item.qty }}</td>

              <td>
                <button
                  @click="cartStore.removeFromCart(item.id)"
                  class="btn btn-error btn-xs btn-outline"
                >
                  Remove
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        class="flex flex-col md:flex-row justify-between items-center bg-base-100 p-6 rounded-2xl shadow gap-4"
      >
        <div>
          <p class="text-gray-500">
            Total Items:
            <span class="font-bold text-base-content">{{
              cartStore.totalItems
            }}</span>
          </p>
        </div>
        <div class="flex items-center gap-6">
          <div class="text-xl">
            Grand Total:
            <span class="font-bold text-2xl text-primary"
              >${{ cartStore.totalPrice }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
