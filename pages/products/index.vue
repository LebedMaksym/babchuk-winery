<template>
  <product-list class="py-4" />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ProductList from '~/components/products/ProductList.vue'

@Component({
  components: { ProductList },
})
export default class HomePage extends Vue {}
</script>
<style lang="scss"></style>
