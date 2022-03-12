<template>
  <div class="main-wrapper">
    <catalog />
    <cart />
  </div>
</template>
<script>
import Catalog from "./Catalog.vue";
import Cart from "./Cart.vue";
export default {
  name: "MainWrapper",
  components: {
    Catalog,
    Cart,
  },
};
</script>
