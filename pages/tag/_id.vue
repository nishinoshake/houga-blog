<template>
  <div class="tag">
    <h2 class="tag-title" v-if="tag">#{{ tag.fields.title }}</h2>
    <PostContainer
      page-type="tag"
      :posts="posts"
      :handle-click-more="fetchMore"
    />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { CONTENT_TYPE_TAG } from '@/config/constant'
import PostContainer from '@/components/PostContainer'

export default {
  components: {
    PostContainer
  },
  head() {
    return {
      title: `#${this.tag.fields.title} | 邦画だってさ`
    }
  },
  computed: {
    ...mapGetters({
      tag: 'tag',
      posts: 'tagPosts'
    }),
    ...mapState({
      page: state => state.index.tag.page
    })
  },
  async fetch({ store, params }) {
    store.commit('setTagId', { id: params.id })
    store.commit('clearPostIds', { pageType: CONTENT_TYPE_TAG })

    if (!process.browser) {
      await store.dispatch('fetchPosts', {
        pageType: CONTENT_TYPE_TAG,
        page: 1,
        tagId: params.id
      })
    }
  },
  mounted() {
    if (!this.posts.length) {
      this.fetchPosts({
        pageType: CONTENT_TYPE_TAG,
        page: 1,
        tagId: this.$route.params.id
      })
    }
  },
  methods: {
    ...mapActions(['fetchPosts']),
    fetchMore() {
      this.fetchPosts({
        pageType: CONTENT_TYPE_TAG,
        page: this.page + 1,
        tagId: this.$route.params.id
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.tag {
  &-title {
    margin-bottom: 4rem;
    font-size: 2rem;
    letter-spacing: 0.16em;
  }
}
</style>
