<template>
  <div class="container">
    <list-component :list="products" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ListComponent from "@/components/list/ListComponent.vue";
import { getProducts } from "./api/products";
import { Product } from "./interfaces/product";

import "@/styles/reset.css";
import "@/styles/main.css";
import "@/styles/flex.css";

export default defineComponent({
  name: "App",
  components: {
    ListComponent,
  },
  setup() {
    const products = ref<Product[]>([]);
    getProducts()
      .then((data) => (products.value = data.products))
      .catch((err) => console.log("getProducts ERR", err));

    return {
      products,
    };
  },
});
</script>
