import { defineStore } from "pinia";
import { computed } from "vue";
import { useLocalStorage } from "../composables/useLocalStorage";
import { useProductStore } from "./productStore";

export const useCartStore = defineStore("cart", () => {
  const items = useLocalStorage("cart", []);
  const productStore = useProductStore();

  const totalItems = computed(() =>
    items.value.reduce((sum, item) => sum + item.qty, 0),
  );
  const totalPrice = computed(() =>
    items.value.reduce((sum, item) => sum + item.price * item.qty, 0),
  );

  const addToCart = (product) => {
    const existingItem = items.value.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.qty++;
    } else {
      items.value.push({ ...product, qty: 1 });
    }
    productStore.decreaseStock(product.id);
  };

  const removeFromCart = async (id) => {
    items.value = items.value.filter((item) => item.id !== id);
    await productStore.increaseStock(id, items.value.find((item) => item.id === id)?.qty || 0);
  };

  return { items, totalItems, totalPrice, addToCart, removeFromCart };
});
