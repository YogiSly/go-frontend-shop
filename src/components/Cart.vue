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
      @increment="increment(index)"
      @decrement="decrement(index)"
    />
    <div class="cart__total">
      <p class="cart__total-name">Total:</p>
      <p>{{ cartTotalCost }} &#8381;</p>
    </div>
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
  computed: {
    cartTotalCost() {
      let result = [];
      if (this.cart_data.length) {
        for (let item of this.cart_data) {
          result.push(item.price * item.quantity);
        }
        result = result.reduce(function (sum, el) {
          return sum + el;
        });
        return result;
      } else {
        return (result = 0);
      }
    },
  },
  methods: {
    ...mapActions(["deleteFromCart", "increment", "decrement"]),
  },
};
</script>
