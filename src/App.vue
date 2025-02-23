<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <list-component msg="Welcome to Your Vue.js + TypeScript App" />
  <div class="container"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ListComponent from "@/components/list/ListComponent.vue";
import { getProducts } from "./api/products";

export default defineComponent({
  name: "App",
  components: {
    ListComponent,
  },
  setup() {
    getProducts()
      .then((data) => console.log(data))
      .catch((err) => console.log("getProducts ERR", err));
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400..700&display=swap");

body {
  padding: 0;
  margin: 0;

  font-family: "Roboto", serif;
  background-color: #00b1ab;
}

body,
a {
  color: #1a1a1a;
}

#app {
  height: 100vh;
}

.container {
  max-width: 600px;
  max-height: 800px;
  margin: 0 auto;
}

body,
.container {
  overflow: hidden;
}
</style>
