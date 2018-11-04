<template>
  <div class="tag">
    <h2 class="tag-title" v-if="tag">#{{ tag.fields.title }}</h2>
    <PostList :posts="tagPosts" />
    <DummyPostList v-if="isFetching" />
    <ButtonMore v-if="haveMorePosts" :handle-click="fetchMore" />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import PostList from '@/components/PostList'
import DummyPostList from '@/components/DummyPostList'
import ButtonMore from '@/components/ButtonMore'

export default {
  components: {
    PostList,
    DummyPostList,
    ButtonMore
  },
  computed: {
    ...mapGetters(['tagPosts', 'tag']),
    ...mapState({
      page: state => state.index.tag.page,
      lastPage: state => state.index.tag.lastPage,
      isFetching: state => state.index.tag.isFetching
    }),
    haveMorePosts() {
      return !this.isFetching && this.page < this.lastPage
    }
  },
  async fetch({ store, params }) {
    store.commit('setTagId', { id: params.id })
    store.commit('clearPostIds', { pageType: 'tag' })

    if (!process.browser) {
      await store.dispatch('fetchPostsByTagId', { id: params.id, page: 1 })
    }
  },
  mounted() {
    if (!this.tagPosts.length) {
      this.fetchPostsByTagId({ id: this.$route.params.id, page: 1 })
    }
  },
  methods: {
    ...mapActions(['fetchPostsByTagId']),
    fetchMore() {
      this.fetchPostsByTagId({ id: this.$route.params.id, page: this.page + 1 })
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
