<template>
  <footer class="footer">
    <LayoutInside>
      <ul class="footer-list">
        <li class="footer-item">
          <a href="https://github.com/noplan1989/houga-blog" target="_blank" rel="noopener">GITHUB</a>
        </li>
        <li class="footer-item">
          <a href="mailto:lawson.and.7.11@gmail.com">MAIL</a>
        </li>
      </ul>
    </LayoutInside>
  </footer>
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
.footer {
  padding: 8rem 0 6rem;
  &-list {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 0.3rem;
    font-size: 1.1rem;
    color: $color-modest;
    @include font-sans;
  }
  &-item {
    display: flex;
    align-items: center;
    &:nth-child(n + 2) {
      &:before {
        content: '/';
        margin: 0 0.15em;
        padding-bottom: 0.1em;
      }
    }
    a {
      @include min {
        &:hover {
          color: $color-font;
        }
      }
    }
  }
}
</style>
