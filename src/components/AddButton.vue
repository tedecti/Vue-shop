<template>
  <button 
  type="button" 
  class="btn btn-outline-success me-2"
  @click="$store.dispatch('addProductToCart', id)">
    Add to cart
  </button>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style>
</style>