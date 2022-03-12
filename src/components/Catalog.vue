<template>
  <div class="catalog">
    <div class="catalog__list">
      <catalog-item v-for="product in products" :key="product.article" />
    </div>
  </div>
</template>
<script>
import CatalogItem from "./CatalogItem.vue";
export default {
  name: "Catalog",
  components: { CatalogItem },
};
</script>
