<template>
  <form class="row g-3 m-auto mt-4">
    <div class="col-md-10">
      <label for="validationServer01" class="form-label">Product Name</label>
      <input
        v-model="name"
        type="text"
        class="form-control"
        id="validationServer01"
        aria-describedby="validationServer01Feedback"
        required
      />
    </div>
    <div class="col-md-10">
      <label for="validationServer02" class="form-label">Select date</label>
      <input
        v-model="date"
        type="text"
        class="form-control"
        id="validationServer03"
        aria-describedby="validationServer02Feedback"
        required
      />
    </div>
    <div class="col-md-10">
      <label for="validationServer03" class="form-label">Category</label>
      <select
        v-model="category"
        class="form-select"
        id="validationServer04"
        aria-describedby="validationServer03Feedback"
        required
      >
        <option selected disabled value="">Choose category</option>
        <option value="Fruits">Fruits</option>
        <option value="Vegetables">Vegetables</option>
        <option value="Berries">Berries</option>
      </select>
    </div>
    <div class="col-md-10">
      <label for="validationServer01" class="form-label">Price</label>
      <input
       v-model="price"
        type="number"
        class="form-control"
        id="validationServer01"
        aria-describedby="validationServer01Feedback"
        required
      />
    </div>
    <div class="col-md-10">
      <label for="validationServer01" class="form-label">Link to product`s picture</label>
      <input
        v-model="img"
        type="text"
        class="form-control"
        id="validationServer01"
        aria-describedby="validationServer01Feedback"
        required
      />
    </div>
    <div class="col-md-10">
      <label for="validationServer01" class="form-label">Write product description</label>
      <input
        v-model="description"
        type="text"
        class="form-control"
        id="validationServer01"
        aria-describedby="validationServer01Feedback"
        required
      />
    </div>
    <div class="col-12">
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="invalidCheck3"
          aria-describedby="invalidCheck4Feedback"
          required
        />
        <label class="form-check-label" for="validCheck3">
          I agree to pay taxes.
        </label>
      </div>
    </div>
    <div class="col-12">
      <button class="btn btn-primary" type="button" @click="add">Submit form</button>
    </div>
  </form>
</template>

<script>
export default {
data() {
    return {
      name: "",
      date: "",
      price: "",
      img: '',
      category: '',
      description: ''
    };
  },
  methods: {
    add() {
      if (this.name && this.date && this.price && this.img && this.category) {
        let product = {
          id: 0,
          name: this.name,
          img: this.img,
          price: parseFloat(this.price),
          category: this.category,
          date: this.date,
          description: this.description
        } 
        this.$store.dispatch('addProduct', product)
      }
    },
}
}
</script>

<style>
</style>