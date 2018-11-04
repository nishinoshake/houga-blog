<template>
  <ul class="dummy-post-list">
    <li class="dummy-post-item" v-for="i in 10" :key="i">○○○○</li>
  </ul>
</template>

<style lang="scss" scoped>
.dummy-post {
  &-item {
    width: 14em;
    max-width: 100%;
    margin-top: 2rem;
    font-size: 2rem;
    background-color: $color-gray;
    border-radius: 0.2rem;
    @include hide-text;
    @include min {
      margin-top: 2.5rem;
      font-size: 2.2rem;
    }
  }
}
</style>
