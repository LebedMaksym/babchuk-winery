import axios from './instance'

export default {
  getProducts(locale: string) {
    return axios.get(`locales/${locale}/products.json`)
  },
}
