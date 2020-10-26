<template>
  <div v-if="showNav" class="menu py-2 px-4">
    <div class="d-flex align-center justify-end">
      <button class="menu__close-btn btn-icon" @click="toggleNav">
        <i class="material-icons">close</i>
      </button>
    </div>
    <nav class="mt-4">
      <ul class="list">
        <li
          v-for="item in content.nav"
          :key="item.path"
          class="font-2 to-upper fs-16 font-weigth-bold mb-3"
        >
          <nuxt-link class="link" :to="`/${item.path}`">
            {{ item.name }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, namespace } from 'nuxt-property-decorator'
import { Content } from '~/models/Content'
const appState = namespace('appState')

@Component
export default class TheMenu extends Vue {
  @Watch('$route')
  handleRouteChange() {
    if (this.showNav) this.toggleNav()
  }

  @appState.State
  showNav!: boolean

  @appState.State
  content!: Content

  @appState.Mutation
  toggleNav!: () => void
}
</script>

<style lang="scss">
.menu {
  z-index: 2;
  position: fixed;
  background: white;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.2);
  height: 100vh;
  width: 250px;
}
</style>
