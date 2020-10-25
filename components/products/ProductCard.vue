<template>
  <div class="card pb-4 px-2">
    <img :src="product.image" alt="bottle" class="card__img" />
    <p class="text-center fs-20 ma-0">{{ product.name }}</p>
    <p class="text-center fs-20 ma-0">`{{ product.year }}</p>
    <p class="text-center gray-color fs-16 ma-0">
      {{ product.description }}
    </p>
    <!--    <div class="card__action d-flex justify-center mt-2">-->
    <!--      <button class="btn btn&#45;&#45;buy">buy now</button>-->
    <!--    </div>-->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Product } from '~/models/Product'

@Component
export default class ProductCard extends Vue {
  @Prop() product!: Product
}
</script>

<style lang="scss" scoped>
.card {
  cursor: pointer;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  font-family: $secondary-font;
  transition: all 0.2s linear;
  &:hover {
    border-radius: 3px;
    transform: scale(1.07);
    transition: all 0.2s linear;
  }

  &__img {
    width: 180px;
    height: 200px;
  }
  .btn--buy {
    width: 100px;
    color: $primary;
    font-size: 20px;
    background: $secondary;
  }
}
</style>
