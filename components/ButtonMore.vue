<template>
  <button class="button-more" @click="handleClick">もっと見る</button>
</template>

<script>
export default {
  props: {
    handleClick: Function
  }
}
</script>

<style lang="scss" scoped>
.button {
  &-more {
    margin-top: 3rem;
    padding: 1rem 2rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    line-height: 1;
    white-space: nowrap;
    letter-spacing: 0.12em;
    border: 2px solid currentColor;
    border-radius: 999em;
    @include font-serif;
    @include min {
      &:hover {
        color: $color-modest;
      }
    }
  }
}
</style>
