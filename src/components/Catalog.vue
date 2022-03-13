<template>
  <div class="catalog">
    <router-link :to="{ name: 'cart', params: { cart_data: getCart } }">
      <div class="catalog__link-to-cart">Cart: {{ getCart.length }}</div>
    </router-link>

    <h1 class="catalog__title">Catalog</h1>
    <div class="catalog__list">
      <catalog-item
        v-for="product in products.data"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>
<script>
import CatalogItem from "./CatalogItem.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Catalog",
  components: { CatalogItem },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["products", "getCart"]),
  },
  methods: {
    ...mapActions(["getProductsFromApi", "addToCart"]),
    // addToCart(data) {
    //   this.addToCart(data);
    // },
  },
  mounted() {
    this.getProductsFromApi().then((response) => {
      if (response.data) {
        console.log("Data  arrived!");
      }
    });
  },
};
</script>
