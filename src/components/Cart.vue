<template>
  <div class="cart">
    <router-link :to="{ name: 'catalog' }">
      <div class="catalog__link-to-cart">Back to catalog</div>
    </router-link>
    <h1 class="cart__title">Cart</h1>
    <p class="cart__no-items" v-if="!cart_data.length">
      There are no products in cart...
    </p>
    <cart-item
      v-for="(item, index) in cart_data"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
    />
  </div>
</template>
<script>
import CartItem from "./CartItem.vue";
import { mapActions } from "vuex";
export default {
  name: "Cart",
  components: {
    CartItem,
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    ...mapActions(["deleteFromCart"]),
    // deleteFromCart(index) {
    //   this.deleteFromCart(index);
    // },
  },
};
</script>
