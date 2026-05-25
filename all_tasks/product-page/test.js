const { reactive, ref, computed, effect } = require('vue');

const products = ref([]);
const getProductById = (id) => {
  return products.value.find((p) => p.id === parseInt(id));
};

const currentProduct = computed(() => getProductById(101));

let output = [];
effect(() => {
  output.push(currentProduct.value);
});

products.value = [{ id: 101, name: 'test' }];

console.log(output);
