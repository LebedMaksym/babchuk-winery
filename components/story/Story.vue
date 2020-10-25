<template>
  <section class="story">
    <div class="container d-flex justify-center px-2">
      <article class="story__article">
        <h1
          class="fs-28 products__title font-2 to-upper mt-2 d-flex justify-center"
        >
          Story
        </h1>
        <p class="story__content font-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          exercitationem ullam sequi, cumque aliquid voluptate eos placeat
          fugiat nemo, illo culpa animi. Totam pariatur veniam assumenda aut
          voluptas quis veritatis maxime aliquam tempora reiciendis asperiores,
          perspiciatis mollitia magnam unde officia. Illum itaque, tempora
          doloribus ullam quasi tenetur, explicabo amet fugiat repellat culpa
          perspiciatis officia. Minima eaque quidem amet error? Laborum est,
          quaerat voluptas, nemo illum laboriosam perferendis, porro modi
          dolores aliquid officiis reiciendis? Veritatis reiciendis placeat
          nostrum rem, culpa provident facere minima commodi praesentium id
          corporis sit similique quia blanditiis nisi laudantium. Accusantium
          accusamus quisquam expedita beatae neque vitae praesentium magnam
          voluptatem ipsam iste nam, ab odit, assumenda omnis. Aut sapiente,
          neque, commodi distinctio voluptatibus et consequuntur eveniet
          cupiditate dolorem adipisci illum. Iusto vero eveniet repellendus
          nesciunt magni officia veniam vitae consequatur molestiae, ab minus
          officiis dicta ipsam illo adipisci corporis recusandae, minima
          doloremque modi quas fugiat sit nisi distinctio.
        </p>
        <div class="logo__wrapper d-flex justify-center">
          <img
            class="logo--story"
            src="../../assets/images/logo-large.svg"
            alt="logo"
          />
        </div>
      </article>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Story extends Vue {}
</script>

<style lang="scss" scoped>
.story__article {
  position: relative;
}
.story__content {
  text-align: center;
  line-height: 35px;
  max-width: 600px;
}
.logo__wrapper {
  position: absolute !important;
  height: 100%;
  top: 0px;
  width: 100%;
  .logo--story {
    width: 80%;
    height: 80%;
  }
}
</style>
