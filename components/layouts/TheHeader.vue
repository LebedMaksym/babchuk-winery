<template>
  <header class="header d-flex">
    <div class="container d-flex justify-between">
      <div class="menu-btn">
        <button class="menu-btn btn-icon" @click="toggleNav">
          <i class="material-icons menu__icon"> menu </i>
        </button>
      </div>
      <nuxt-link to="/" class="logo link">
        <span class="logo__text fs-20 to-upper"> Babchuck winery </span>
        <img class="logo__img" src="../../assets/images/logo.svg" alt="logo" />
      </nuxt-link>
      <div class="header__right-col d-flex">
        <!--        <div class="cart d-flex mr-3">-->
        <!--          <span class="cart__title to-upper">cart</span>-->
        <!--          <span class="cart__content d-flex justify-center">0</span>-->
        <!--        </div>-->
        <div class="lang d-flex">
          <select class="lang__select" @change="handleLanguageChange">
            <option class="lang__option" value="ua">UA</option>
            <option class="lang__option" value="ru">RU</option>
            <option class="lang__option" value="en">EN</option>
          </select>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, namespace, Vue } from 'nuxt-property-decorator'
const products = namespace('products')
const appState = namespace('appState')

@Component
export default class TheHeader extends Vue {
  @appState.Mutation
  toggleNav!: boolean

  @appState.Action
  getContent!: (locale: string) => void

  @products.Action
  getProducts!: (locale: string) => void

  handleLanguageChange(event: InputEvent) {
    const locale = (event.target as HTMLSelectElement).value
    this.$router.push(this.switchLocalePath(locale))
    this.getContent(locale)
    this.getProducts(locale)
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 3;
  width: 100%;
  margin: 0 auto;
  height: 60px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.6);
  background-color: $secondary;

  .menu-btn {
    outline: none;
    flex: 1 0 33%;
  }

  .menu__icon {
    font-size: 30px;
    color: $primary;
  }

  .logo {
    justify-content: center;
    flex: 1 0 33%;
    position: relative;
    display: flex;
    align-items: center;
  }

  .logo__text {
    font-family: $secondary-font;
    color: $primary;
  }

  .logo__img {
    left: calc(50% - 30px);
    position: absolute;
    width: 70px;
    height: 70px;
  }

  &__right-col {
    flex: 1 0 33%;
    justify-content: flex-end;
  }

  .cart {
    color: $primary !important;
    font-size: 16px;
    font-family: $primary-font;
  }

  .cart__content {
    margin-left: 10px;
    height: 30px;
    width: 30px;
    border: 2px solid $primary;
    border-radius: 50px;
  }

  .lang {
    &__select {
      background: transparent;
      color: $primary;
      z-index: 2;
      padding: 3px;
      cursor: pointer;
      background-position-x: 244px;
      font-family: $primary-font;
      border: none;
      border-radius: 4px;
      outline: none;
    }

    &__option {
      color: $secondary !important;
    }
  }
}
</style>
