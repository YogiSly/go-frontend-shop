<template>
  <div class="catalog-item">
    <img
      class="catalog-item__image"
      :src="require(`@/assets/images/${product_data.image}`)"
      alt=""
    />
    <p class="catalog-item__name">{{ product_data.name }}</p>
    <p class="catalog-item__price">{{ product_data.price }} &#8381;</p>
    <button class="catalog-item__add-to-cart btn" @click="addToCart">
      Add to cart
    </button>
  </div>
</template>
<script>
export default {
  name: "CatalogItem",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product_data);
    },
  },
};
</script>
