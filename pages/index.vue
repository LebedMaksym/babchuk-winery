<template>
  <div>
    <section class="hero">
      <div class="hero__gradient"></div>
    </section>
    <product-list class="mt-6" />
    <story class="mt-6" />
    <contacts class="mt-6" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ProductList from '~/components/products/ProductList.vue'
import Story from '~/components/story/Story.vue'
import Contacts from '~/components/contact-us/Contacts.vue'
@Component({
  components: { Contacts, Story, ProductList },
})
export default class HomePage extends Vue {}
</script>
<style lang="scss">
.hero {
  position: relative;
  width: 100%;
  min-height: 435px;
  background: url('../assets/images/hero.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 90%;
}
.hero__gradient {
  position: absolute;
  width: 100%;
  bottom: 0px;
  height: 150px;
  background: linear-gradient(
    to bottom,
    rgba(151, 152, 153, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );
}
</style>
