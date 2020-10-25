import { VuexModule, Module, Mutation } from 'vuex-module-decorators'

@Module({
  namespaced: true,
  stateFactory: true,
})
export default class AppState extends VuexModule {
  showNav: boolean = false

  @Mutation
  toggleNav() {
    this.showNav = !this.showNav
  }
}
