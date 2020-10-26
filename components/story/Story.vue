<template>
  <section class="story">
    <div class="container d-flex justify-center px-2">
      <article class="story__article">
        <h1
          class="fs-28 products__title font-2 to-upper mt-2 d-flex justify-center"
        >
          {{ content.storyPage.title }}
        </h1>
        <p class="story__content font-2">
          {{ content.storyPage.text }}
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
import { Component, namespace, Vue } from 'nuxt-property-decorator'
import { Content } from '~/models/Content'
const appState = namespace('appState')

@Component
export default class Story extends Vue {
  @appState.State
  content!: Content
}
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
