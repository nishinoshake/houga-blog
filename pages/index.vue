<template>
  <div class="index">
    <PostContainer
      page-type="post"
      :posts="posts"
      :handle-click-more="fetchMore"
    />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import PostContainer from '@/components/PostContainer'

export default {
  components: {
    PostContainer
  },
  computed: {
    ...mapGetters(['posts']),
    ...mapState({
      page: state => state.index.post.page
    })
  },
  async fetch({ store }) {
    if (!process.browser) {
      await store.dispatch('fetchPosts', { pageType: 'post', page: 1 })
    }
  },
  mounted() {
    if (!this.posts.length) {
      this.fetchPosts({ pageType: 'post', page: 1 })
    }
  },
  methods: {
    ...mapActions(['fetchPosts']),
    fetchMore() {
      this.fetchPosts({ pageType: 'post', page: this.page + 1 })
    }
  }
}
</script>
