<template>
  <div class="product container d-flex pt-3">
    <div class="product__image-wrapper">
      <img
        src="../../assets/images/bottle.png"
        alt="bottle"
        class="product__image"
      />
    </div>
    <div>
      <p class="product__description font-2 fs-18">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        exercitationem ullam sequi, cumque aliquid voluptate eos placeat fugiat
        nemo, illo culpa animi. Totam pariatur veniam assumenda aut voluptas
        quis veritatis maxime aliquam tempora reiciendis asperiores,
        perspiciatis mollitia magnam unde officia. Illum itaque, tempora
        doloribus ullam quasi tenetur, explicabo amet fugiat repellat culpa
        perspiciatis officia. Minima eaque quidem amet error? Laborum est,
        quaerat voluptas, nemo illum laboriosam perferendis, porro modi dolores
        aliquid officiis reiciendis? Velit. Assumenda exercitationem ullam
        sequi, cumque aliquid voluptate eos placeat fugiat nemo, illo culpa
        animi. Totam pariatur veniam assumenda aut
      </p>
      <p class="product__description font-2 fs-18">
        voluptas quis veritatis maxime aliquam tempora reiciendis asperiores,
        perspiciatis mollitia magnam unde officia. Illum itaque, tempora
        doloribus ullam quasi tenetur, explicabo amet fugiat repellat culpa
        perspiciatis officia. Minima eaque quidem amet error? Laborum est,
        quaerat voluptas, nemo illum laboriosam perferendis, porro modi dolores
        aliquid officiis reiciendis? Veritatis reiciendis placeat nostrum rem,
        culpa provident facere minima commodi praesentium id corporis sit
        similique quia blanditiis nisi laudantium. Accusantium accusamus
        quisquam expedita beatae neque vitae praesentium magnam voluptatem ipsam
        iste nam, ab odit, assumenda omnis. Aut sapiente, neque, commodi
        distinctio voluptatibus et consequuntur eveniet cupiditate dolorem
        adipisci illum. Iusto vero eveniet repellendus nesciunt magni officia
        veniam vitae consequatur molestiae, ab minus officiis dicta ipsam illo
        adipisci corporis recusandae, minima doloremque modi quas fugiat sit
        nisi distinctio.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ProductList from '~/components/products/ProductList.vue'

@Component({
  components: { ProductList },
})
export default class HomePage extends Vue {}
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
