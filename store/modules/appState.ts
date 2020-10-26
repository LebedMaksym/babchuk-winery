import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import { Content, initialContent } from '@/models/Content'
import ContentService from '~/api/contentService'

@Module({
  namespaced: true,
  stateFactory: true,
})
export default class AppState extends VuexModule {
  showNav: boolean = false
  content: Content = initialContent

  @Mutation
  toggleNav() {
    this.showNav = !this.showNav
  }

  @Mutation
  setContent(content: Content) {
    this.content = content
  }

  @Action({ commit: 'setContent' })
  async getContent(locale: string) {
    try {
      const response = await ContentService.getContent(locale)
      return response.data
    } catch {
      return initialContent
    }
  }
}
