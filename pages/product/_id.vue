<template>
  <div class="product container pt-3">
    <h2 class="font-2 text-center">{{ product.name }} `{{ product.year }}</h2>
    <div class="d-flex align-start">
      <div class="product__image-wrapper">
        <img :src="product.image" alt="bottle" class="product__image" />
      </div>
      <div class="d-flex align-start">
        <p class="product__description font-2 fs-18">
          {{ product.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, namespace, Vue } from 'nuxt-property-decorator'
import ProductList from '~/components/products/ProductList.vue'
import { Product } from '~/models/Product'
import { Content } from '~/models/Content'
const products = namespace('products')
const appState = namespace('appState')

@Component({
  components: { ProductList },
})
export default class HomePage extends Vue {
  @products.State
  products!: Product[]

  @appState.State
  content!: Content

  get product(): Product | null {
    const id = +this.$route.params.id
    const product = this.products.find((el) => el.id === id)
    return product || null
  }
}
</script>
<style lang="scss">
.product {
  &__image {
    max-height: 350px;
  }
  &__description {
  }
}
</style>
