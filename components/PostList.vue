<template>
  <ul class="post-list">
    <li class="post-item" v-for="post in posts" :key="post.sys.id">
      <nuxt-link :to="`/entry/${post.sys.id}/`">{{ post.fields.title }}</nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    posts: Array
  }
}
</script>

<style lang="scss" scoped>
.post {
  &-list {
  }
  &-item {
    font-size: 1.8rem;
    letter-spacing: 0.12em;
    @include min {
      font-size: 2.2rem;
    }
    &:nth-child(n + 2) {
      margin-top: 2rem;
      @include min {
        margin-top: 2.5rem;
      }
    }
    a {
      @include min {
        &:hover {
          color: $color-modest;
        }
      }
    }
  }
}
</style>
