<template>
  <ul class="tag-list">
    <li class="tag-item" v-for="tag in tags" :key="tag.sys.id">
      <nuxt-link :to="`/tag/${tag.sys.id}/`">#{{ tag.fields.title }}</nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    tags: Array
  }
}
</script>

<style lang="scss" scoped>
.tag {
  &-list {
    display: flex;
    flex-wrap: wrap;
    margin: -0.4rem;
  }
  &-item {
    margin: 0.4rem;
    font-size: 1.4rem;
    a {
      text-decoration: none;
      @include link-text;
    }
  }
}
</style>
