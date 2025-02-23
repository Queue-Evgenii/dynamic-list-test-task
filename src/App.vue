<template>
  <div class="container _flex _fd-col _gap-y-16">
    <search-component @update:query="searchHandler" />
    <loader-component v-if="isLoading" style="padding: 20px 0" />
    <list-component
      v-else-if="visibleProducts.length > 0"
      :list="visibleProducts"
      @scroll="scrollHandler"
    />
    <div v-else>Products not found! {{ ":<" }}</div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";

import ListComponent from "@/components/list/ListComponent.vue";
import SearchComponent from "@/components/search/SearchComponent.vue";
import LoaderComponent from "@/components/loader/LoaderComponent.vue";

import { Product } from "@/interfaces/product";

import { getProducts } from "@/api/products";
import { searchProducts } from "@/api/search";

import "@/styles/reset.css";
import "@/styles/main.css";
import "@/styles/flex.css";

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
    const currentPage = ref(1);
    const itemsPerPage = 20;

    getProducts()
      .then((data) => (products.value = data.products))
      .catch((err) => console.log("getProducts ERR", err))
      .finally(() => (isLoading.value = false));

    const visibleProducts = computed((): Product[] => {
      return products.value.slice(0, currentPage.value * itemsPerPage);
    });

    const nextPage = () => {
      if (currentPage.value * itemsPerPage >= products.value.length) return;
      currentPage.value += 1;
    };

    // Can be optimized by debouce function, later...
    const scrollHandler = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.scrollHeight - target.scrollTop <= target.clientHeight + 10)
        nextPage();
    };

    const searchHandler = (value: string) => {
      isLoading.value = true;
      searchProducts(value)
        .then((data) => (products.value = data.products))
        .catch((err) => console.log("searchProducts ERR", err))
        .finally(() => (isLoading.value = false));
    };

    return {
      products,
      visibleProducts,
      currentPage,
      itemsPerPage,
      isLoading,
      scrollHandler,
      searchHandler,
    };
  },
});
</script>
