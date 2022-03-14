<template>
  <div class="cart-item">
    <img
      class="cart-item__image"
      :src="require(`@/assets/images/${cart_item_data.image}`)"
      alt=""
    />
    <div class="cart-item__info">
      <p>{{ cart_item_data.name }}</p>
      <p>{{ cart_item_data.price }} &#8381;</p>
      <p>{{ cart_item_data.article }}</p>
    </div>
    <div class="cart-item__quantity">
      <p>Qty:</p>
      <span>
        <span class="cart-item__quantity-btn" @click="decrementItem">-</span>
        {{ cart_item_data.quantity }}
        <span class="cart-item__quantity-btn" @click="incrementItem">+</span>
      </span>
    </div>
    <button @click="deleteFromCart">Delete</button>
  </div>
</template>
<script>
export default {
  name: "CartItem",
  data() {
    return {};
  },
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    decrementItem() {
      this.$emit("decrement");
    },
    incrementItem() {
      this.$emit("increment");
    },
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
  },
  mounted() {
    this.$set(this.cart_item_data, "quantity", 1);
  },
};
</script>