<template>
  <div class="container _flex _fd-col _gap-y-16">
    <search-component @update:query="searchHandler" />
    <list-component :list="products" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ListComponent from "@/components/list/ListComponent.vue";
import { getProducts } from "@/api/products";
import { Product } from "@/interfaces/product";

import "@/styles/reset.css";
import "@/styles/main.css";
import "@/styles/flex.css";
import SearchComponent from "@/components/search/SearchComponent.vue";
import { searchProducts } from "@/api/search";

export default defineComponent({
  name: "App",
  components: {
    ListComponent,
    SearchComponent,
  },
  setup() {
    const products = ref<Product[]>([]);
    getProducts()
      .then((data) => (products.value = data.products))
      .catch((err) => console.log("getProducts ERR", err));

    const searchHandler = (value: string) => {
      searchProducts(value)
        .then((data) => (products.value = data.products))
        .catch((err) => console.log("searchProducts ERR", err));
    };

    return {
      products,
      searchHandler,
    };
  },
});
</script>
