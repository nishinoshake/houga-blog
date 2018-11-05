<template>
  <header class="header">
    <LayoutInside>
      <p class="header-logo">
        <nuxt-link to="/"><img src="@/assets/images/logo.svg" alt="邦画だってさ"></nuxt-link>
      </p>
    </LayoutInside>
  </header>
</template>

<script>
import LayoutInside from '@/components/LayoutInside'

export default {
  components: {
    LayoutInside
  }
}
</script>

<style lang="scss" scoped>
.header {
  padding: 7rem 0;
  @include min {
    padding: 8rem 0;
  }
  &-logo {
    font-size: 2rem;
    letter-spacing: 0.12em;
    line-height: 1;
    a {
      display: inline-block;
      @include min {
        &:hover {
          opacity: 0.8;
        }
      }
    }
    img {
      width: 180px;
      height: auto;
      @include min {
        width: 220px;
      }
    }
  }
}
</style>
