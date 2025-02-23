<template>
  <ul class="_flex _fd-col _gap-y-16">
    <list-item v-for="(item, index) in list" :key="index" :item="item" />
  </ul>
</template>

<script lang="ts">
import { Product } from "@/interfaces/product";
import { defineComponent, PropType } from "vue";
import ListItem from "@/components/list/ListItem.vue";

export default defineComponent({
  name: "ListComponent",
  components: {
    ListItem,
  },
  props: {
    list: {
      type: Array as PropType<Product[]>,
      required: true,
    },
  },
});
</script>

<style scoped>
ul {
  padding: 10px 20px;

  height: 100%;
  overflow-y: scroll;

  background-color: #fefefe;
  border-radius: 10px;
}
</style>
