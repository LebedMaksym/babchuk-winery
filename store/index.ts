import Vue from 'vue'
import Vuex from 'vuex'
import { Context } from '@nuxt/types/app'
import ProductsService from '@/api/productsService'
import products from '~/store/modules/products'
import appState from '~/store/modules/appState'

Vue.use(Vuex)

export default () =>
  new Vuex.Store({
    modules: {
      products,
      appState,
    },
    actions: {
      async nuxtServerInit(context: any, { app }: Context) {
        const response = await ProductsService.getProducts(app.i18n.locale)
        context.commit('products/setProducts', response.data, { root: true })
      },
    },
  })
