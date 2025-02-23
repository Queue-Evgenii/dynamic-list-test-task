<template>
  <li class="_flex _ai-c _gap-x-32">
    <div class="_flex-0-33p _image">
      <img :src="item.thumbnail" alt="" />
    </div>
    <div class="content _flex _fd-col _gap-y-8">
      <h2>{{ item.title }}</h2>
      <h3>{{ item.description }}</h3>
      <div class="_flex _ai-c _gap-x-8">
        <span class="discount">Discount {{ item.discountPercentage }}%</span>
        <span class="_colored">{{ item.brand }}</span>
      </div>
      <div class="_flex _ai-c _gap-x-8">
        <span class="_colored">${{ item.price }}</span>
        <span class="_colored">⭐{{ item.rating }}</span>
        <span class="category">{{ item.category }}</span>
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import { Product } from "@/interfaces/product";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "ListItem",
  props: {
    item: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
});
</script>

<style scoped>
.content {
  max-width: 60%;
}

h2 {
  font-size: 1.25rem;
  font-weight: 700;
}
h3 {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

h3,
.discount,
.brand,
.category {
  font-size: 0.875rem;
}

.discount,
.brand {
  font-weight: 700;
}
.discount {
  color: #c82c2c;
}
._colored {
  color: #00b1ab;
  font-weight: 600;
}
.category {
  display: inline-block;
  color: #188500;
  padding: 5px 12px;
  background-color: #2e2e2e;
  border-radius: 16px;
  font-weight: 600;
}
</style>
