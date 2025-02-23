<template>
  <div class="search">
    <input
      v-model="query"
      @input="onInput"
      type="text"
      placeholder="Search..."
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "SearchComponent",
  emits: ["update:query"],
  setup(_, { emit }) {
    const query = ref<string>("");
    let timeout: ReturnType<typeof setTimeout> | null = null;

    const onInput = () => {
      if (timeout) clearTimeout(timeout);

      timeout = setTimeout(() => {
        emit("update:query", query.value);
      }, 1000);
    };

    return {
      query,
      onInput,
    };
  },
});
</script>

<style scoped>
.search input {
  width: -moz-available;
  width: -webkit-fill-available;
  padding: 10px 20px;

  background-color: #fefefe;
  border-radius: 10px;

  font-size: 1.25rem;
}
</style>
