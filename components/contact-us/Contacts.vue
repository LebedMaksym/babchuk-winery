<template>
  <section class="contacts mt-3">
    <div class="container">
      <div class="contacts__wrapper px-2">
        <div class="contacts__img-wrapper">
          <img
            class="contacts__img"
            src="../../assets/images/batja.JPG"
            alt="owner photo"
          />
        </div>
        <div class="contacts__card-wrapper">
          <h1 class="fs-28 products__title font-2 ma-0 to-upper">contact us</h1>
          <div class="contacts__component">
            <contact-card />
          </div>
          <div class="contacts__component">
            <contact-card />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ContactCard from '~/components/contact-us/ContactsCard.vue'
@Component({
  components: { ContactCard },
})
export default class ContactUs extends Vue {}
</script>

<style lang="scss" scoped>
.contacts {
  background: $secondary;
}
.contacts__wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
  padding-bottom: 50px;
}
.contacts__img-wrapper {
  border-radius: 50%;
  width: 340px;
  height: 340px;
  overflow: hidden;
}
.contacts__img {
  transform: translateX(-50px);
  width: 490px;
}
.contacts__card-wrapper {
  color: #d6a96b;
}
.contacts__component {
  &:not(:last-child) {
    margin-bottom: 35px;
  }
}
</style>
