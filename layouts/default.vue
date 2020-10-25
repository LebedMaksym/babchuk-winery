<template>
  <div class="layout" :class="{ showNav: 'app-overlay' }">
    <the-header />
    <transition name="menu">
      <the-menu />
    </transition>
    <transition name="page">
      <div v-if="showNav" class="overlay" @click="toggleNav" />
    </transition>
    <nuxt />
  </div>
</template>
<script lang="ts">
import { Component, Vue, namespace } from 'nuxt-property-decorator'
import TheMenu from '@/components/layouts/TheMenu'
const appState = namespace('appState')

@Component({
  components: { TheMenu },
})
export default class Default extends Vue {
  @appState.State
  showNav: boolean

  @appState.Mutation
  toggleNav
}
</script>
<style lang="scss">
.layout {
  .overlay {
    width: 100%;
    top: 60px;
    z-index: 1;
    background: rgba(0, 0, 0, 0.4);
    position: fixed;
    height: calc(100vh - 60px);
  }
}
.menu-enter-active,
.menu-leave-active {
  transition: transform 0.2s ease;
}
.menu-enter,
.menu-leave-to {
  transform: translateX(-100%);
}
</style>
