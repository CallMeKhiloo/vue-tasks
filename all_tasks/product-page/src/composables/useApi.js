import { ref } from "vue";

export function useApi(baseUrl) {
  const data = ref(null);
  const error = ref(null);
  const loading = ref(false);

  const getAll = async () => {
    loading.value = true;
    try {
      const response = await fetch(baseUrl);
      data.value = await response.json();
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  const update = async (id, updatedObject) => {
    loading.value = true;
    try {
      await fetch(`${baseUrl}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedObject),
      });
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  return { data, error, loading, getAll, update };
}
