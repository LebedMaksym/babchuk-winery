import axios from './instance'

export default {
  getContent(locale: string) {
    return axios.get(`locales/${locale}/content.json`)
  },
}
