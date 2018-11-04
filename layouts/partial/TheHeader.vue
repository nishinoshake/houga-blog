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
    display: flex;
    justify-content: flex-end;
    font-size: 2rem;
    letter-spacing: 0.12em;
    line-height: 1;
    @include min {
      margin-left: -0.8rem;
    }
    a {
      display: inline-flex;
      align-items: center;
      text-decoration: none;
      &:before {
        content: '';
        width: 2rem;
        height: 0.25rem;
        margin-right: -0.4rem;
        background-color: currentColor;
        transform: rotate(-70deg);
      }
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
