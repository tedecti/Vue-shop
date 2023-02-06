<template>
  <button type="button" class="btn btn-outline-info" @click="$router.push('/detail/'+id)">Info</button>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            required: true,

        }
    }
}
</script>

<style>

</style>