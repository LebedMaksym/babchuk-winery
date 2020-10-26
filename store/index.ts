import Vue from 'vue'
import Vuex from 'vuex'
import { Context } from '@nuxt/types/app'
import ProductsService from '@/api/productsService'
import ContentService from '@/api/contentService'
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
        const contentResponse = await ContentService.getContent(app.i18n.locale)
        const productsResponse = await ProductsService.getProducts(
          app.i18n.locale
        )
        context.commit('appState/setContent', contentResponse.data)
        context.commit('products/setProducts', productsResponse.data)
      },
    },
  })
