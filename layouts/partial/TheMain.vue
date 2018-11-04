<template>
  <main class="main">
    <LayoutInside>
      <nuxt />
      <div class="main-tag">
        <h2 class="main-tag-title">#タグで探す</h2>
        <TagList :tags="tags" />
      </div>
    </LayoutInside>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import LayoutInside from '@/components/LayoutInside'
import TagList from '@/components/TagList'

export default {
  components: {
    TagList,
    LayoutInside
  },
  computed: {
    ...mapGetters(['tags'])
  }
}
</script>

<style lang="scss" scoped>
.main {
  &-tag {
    margin-top: 8rem;
    &-title {
      margin-bottom: 1rem;
      font-size: 1.8rem;
      letter-spacing: 0.12em;
    }
  }
}
</style>
