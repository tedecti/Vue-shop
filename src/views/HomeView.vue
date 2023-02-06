<template>
  <div class="row mt-4">
    <div class="col">
      <select
      @change="filter"
        v-model="filteredCategory"
        class="form-select"
        aria-label="Default select example"
      >
        <option value="" selected>Selected category</option>
        <option
          v-for="category in allCategories"
          :key="category"
          :value="category"
        >
          {{ category }}
        </option>
      </select>
    </div>
    <div class="col">
      <input
        v-model="searchedName"
        type="text"
        @input="search"
        class="form-control"
        placeholder="Search..."
        aria-label="Search"
      />
    </div>
  </div>
  <div class="row row-cols-1 row-cols-md-3 g-4 mt-1">
    <div class="col" v-for="product in products" :key="product.id">
      <div class="card h-100">
        <img :src="product.img" class="card-img-top" :alt="product.name" />
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text">{{ product.price }}$</p>
          <p class="card-text">{{ product.category }}</p>
        </div>
        <div class="card-footer text-end">
          <add-button :id="product.id" />
          <info-button :id="product.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AddButton from '@/components/AddButton.vue'
import InfoButton from '@/components/InfoButton.vue';


export default {
  name: "HomeView",
  components: {InfoButton, AddButton},
  data() {
    return {
      filteredCategory: "",
      products: [],
      searchedName: "",
    };
  },
  computed: {
    ...mapGetters(["allCategories", "allProducts"]),
  },
  sum() {
    let total = 0;
      for (let i = 0; i < this.employees.length; i++) {
    total += this.employees[i].salary;
    }
    return total;
  },
  methods: {

    filter() {
      this.searchedName = '';
      this.products = this.$store.getters.productsByCategoryName(this.filteredCategory, '');
    },
    search() {
      this.filteredCategory = '';
      this.products = this.$store.getters.productsByCategoryName('', this.searchedName);
    },
    
  },
  watch: {
    filteredCategory(newValue, oldValue) {
    },
    searchedName(newValue) {
    },
  },
  created() {
    this.products = this.allProducts;
  },
};
</script>