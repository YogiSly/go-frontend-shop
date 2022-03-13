<template>
  <div class="catalog">
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
    ...mapGetters(["products"]),
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
