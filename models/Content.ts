export interface Content {
  nav: string[]
  storyPage: {
    title: string
    text: string
  }
  aboutUsPage: {
    title: string
    text: string
  }
  productsPage: {
    title: string
  }
}

export const initialContent = {
  nav: [],
  storyPage: {
    title: '',
    text: '',
  },
  aboutUsPage: {
    title: '',
    text: '',
  },
  productsPage: {
    title: '',
  },
}
