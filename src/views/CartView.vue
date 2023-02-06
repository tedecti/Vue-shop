<template>
    <table class="table">
        <thead>
        <tr>
            <th>Name</th>
            <th>Pic</th>
            <th>Price</th>
            <th>Count</th>
            <th></th>
            <th></th>
        </tr>
        </thead>
        <tbody>
            <tr v-for="product in allProductsCart" :key="product.id">
                <td>{{ product.name }}</td>
                <td class="w-25"><img :src="product.img" class="img-fluid" alt=""></td>
                <td>{{ product.price }}$</td>
                <td>
                <input 
                type="number" 
                @input="changeCount(product.id,$event)" 
                class="form-control w-25" 
                :value="product.count">
                <div id="validationServer04Feedback" min='0' class="invalid-feedback">
                Please select a valid state.
                </div>
                </td>
                <button type="button" class="btn btn-outline-danger me-2" @click="$store.dispatch('removeProduct', product.id)">Delete</button>
                <info-button :id="product.id" />
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="5">Total: {{ totalPrice }}$</td>
            </tr>
        </tfoot>
    </table>
</template>

<script>
import { mapGetters } from 'vuex'
import InfoButton from '@/components/InfoButton.vue';
export default {
    components: {InfoButton},
computed: {
    ...mapGetters([
        'allProductsCart',
        'totalPrice',
    ])
},
methods:{

  changeCount(id, event) {
      const value = parseInt(event.target.value);
      if (isNaN(value)) {
        event.target.classList.add('is-invalid');
      } else if (event.target.classList.contains('is-invalid'))
        event.target.classList.remove('is-invalid');
      this.$store.dispatch('changeProductCount', {
        id,
        value
    })
    }
}
}
</script>

<style>
</style>