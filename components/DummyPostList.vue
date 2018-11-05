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
    position: relative;
    overflow: hidden;
    font-size: 2rem;
    border-radius: 0.2rem;
    @include hide-text;
    @include min {
      margin-top: 2.5rem;
      font-size: 2.2rem;
    }
    &:before {
      content: '';
      width: 200%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: linear-gradient(to right, #eee 0%, #eaeaea 50%, #eee 50%, #eaeaea 100%);
      transform: translateX(-50%);
      animation: anime-loading 0.8s ease-in-out infinite;
    }
  }
}

@keyframes anime-loading {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

@for $i from 1 through 10 {
  .dummy-post-item:nth-of-type(#{$i + 1}):before {
    animation-delay: #{- (10 - $i) * 100ms};
  }
}
</style>
