<template>
  <div class="main-wrapper">
    <catalog />
    <cart v-if="getCart.length" :cart_data="getCart" />
  </div>
</template>
<script>
import Catalog from "./Catalog.vue";
import Cart from "./Cart.vue";
import { mapGetters } from "vuex";
export default {
  name: "MainWrapper",
  components: {
    Catalog,
    Cart,
  },
  computed: {
    ...mapGetters(["getCart"]),
  },
};
</script>
