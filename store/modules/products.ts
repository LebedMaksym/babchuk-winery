import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import { Product } from '@/models/Product'
import ProductsService from '@/api/productsService'

@Module({
  namespaced: true,
  stateFactory: true,
})
export default class Products extends VuexModule {
  products: Product[] = []

  @Mutation
  setProducts(products: Product[]) {
    this.products = products
  }

  @Action({ commit: 'setProducts' })
  async getProducts(locale: string) {
    try {
      const response = await ProductsService.getProducts(locale)
      return response.data
    } catch {
      return []
    }
  }
}
