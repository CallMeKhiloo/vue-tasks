import { defineStore } from "pinia";
import { ref } from "vue";
import { useApi } from "../composables/useApi";

export const useProductStore = defineStore("product", () => {
  const api = useApi("http://localhost:3000/products");

  const products = ref([]);
  const loading = api.loading;
  const error = api.error;

  const fetchProducts = async () => {
    await api.getAll();
    if (api.data.value) products.value = api.data.value;
  };

  const decreaseStock = async (productId) => {
    const product = products.value.find((p) => p.id == productId);
    if (product && product.stock > 0) {
      product.stock--;
      await api.update(product.id, product);
    }
  };

  const increaseStock = async (productId, quantity) => {
    const product = products.value.find((p) => p.id == productId);
    if (product) {
      product.stock += quantity;
      await api.update(product.id, product);
    }
  };

  const getProductById = (id) => {
    return products.value.find((p) => p.id == id);
  };

  return {
    products,
    loading,
    error,
    fetchProducts,
    decreaseStock,
    increaseStock,
    getProductById,
  };
});
