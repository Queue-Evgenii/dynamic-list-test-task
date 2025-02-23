<template>
  <div class="container _flex _fd-col _gap-y-16">
    <search-component @update:query="searchHandler" />
    <loader-component v-if="isLoading" style="padding: 20px 0" />
    <list-component v-else :list="products" />
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
import LoaderComponent from "@/components/loader/LoaderComponent.vue";

export default defineComponent({
  name: "App",
  components: {
    ListComponent,
    SearchComponent,
    LoaderComponent,
  },
  setup() {
    const products = ref<Product[]>([]);
    const isLoading = ref(true);
    getProducts()
      .then((data) => (products.value = data.products))
      .catch((err) => console.log("getProducts ERR", err))
      .finally(() => (isLoading.value = false));

    const searchHandler = (value: string) => {
      isLoading.value = true;
      searchProducts(value)
        .then((data) => (products.value = data.products))
        .catch((err) => console.log("searchProducts ERR", err))
        .finally(() => (isLoading.value = false));
    };

    return {
      products,
      searchHandler,
      isLoading,
    };
  },
});
</script>
