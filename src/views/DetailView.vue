<template>
  <div class="row mt-2">
  <div class="col">
    <div class="card">
      <img :src="product.img" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">{{ product.description }}</p>
        <p class="card-text">{{ product.price }}$</p>
        <p class="card-text">{{ product.category }}</p>
        <p class="card-text">{{ product.date }}</p>
      </div>
      <div class="card-footer text-end">
          <add-button :id="product.id" />
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import AddButton from '@/components/AddButton.vue'
export default {
  components: {AddButton},
  data() {
    return {
      product: null
    }
  },
  created() {
    this.product = this.$store.getters.findProductById(this.$route.params.id);
  }
}
</script>

<style>

</style>