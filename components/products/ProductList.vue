<template>
  <section class="products">
    <div class="container">
      <h1 class="fs-28 products__title font-2 mb-8 to-upper">
        {{ content.productsPage.title }}
      </h1>
      <ul class="products__list list d-flex">
        <li
          v-for="product in products"
          :key="product.id"
          class="products__item mb-4"
        >
          <nuxt-link :to="`/product/${1}`" class="products__link link">
            <product-card :product="product" />
          </nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, namespace } from 'nuxt-property-decorator'
import ProductCard from '~/components/products/ProductCard.vue'
import { Product } from '~/models/Product'
import { Content } from '~/models/Content'
const products = namespace('products')
const appState = namespace('appState')

@Component({
  components: { ProductCard },
})
export default class ProductList extends Vue {
  @products.State
  products!: Product[]

  @appState.State
  content!: Content
}
</script>

<style lang="scss" scoped>
.products__title {
  flex: 1 0;
  text-align: center;
}
.products__list {
  max-width: 100%;
  flex-wrap: wrap;
}
</style>
