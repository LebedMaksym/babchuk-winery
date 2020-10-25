<template>
  <div class="contacts__card font-2">
    <p class="card__name fs-20">Name</p>
    <p class="card__job card__item">Job</p>
    <p class="card__number card__item">0937752345</p>
    <p class="card__email card__item">max@com.com</p>
  </div>
</template>

<script>
export default {
  name: 'ContactCard',
}
</script>

<style lang="scss" scoped>
.contacts__card {
  line-height: 15px;
}
.card__item {
  font-style: italic;
}
</style>
