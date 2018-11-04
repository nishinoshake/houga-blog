<template>
  <div class="layout-inside">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.layout-inside {
  @include max {
    padding: 0 30px;
  }
  @include min {
    width: 820px;
    margin: 0 auto;
    padding: 0 60px;
    box-sizing: content-box;
  }
}
</style>
