<template>
  <div class="index">
    <h1 class="index-title">
      <ruby>
        邦画<rp>(</rp>
        <rt>ほうが</rt>
        <rp>)</rp>
      </ruby>
    </h1>
    <PostList :posts="posts" />
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
    ...mapGetters(['posts']),
    ...mapState({
      page: state => state.index.post.page,
      lastPage: state => state.index.post.lastPage,
      isFetching: state => state.index.post.isFetching
    }),
    haveMorePosts() {
      return !this.isFetching && this.page < this.lastPage
    }
  },
  async fetch({ store }) {
    if (!process.browser) {
      await store.dispatch('fetchPosts', { page: 1 })
    }
  },
  mounted() {
    if (!this.posts.length) {
      this.fetchPosts({ page: 1 })
    }
  },
  methods: {
    ...mapActions(['fetchPosts']),
    fetchMore() {
      this.fetchPosts({ page: this.page + 1 })
    }
  }
}
</script>

<style lang="scss" scoped>
.index {
  &-title {
    display: none;
    margin-bottom: 6rem;
    font-size: 3rem;
    letter-spacing: 0.5em;
    @include max {
      ruby {
        margin-right: -1.5rem;
      }
    }
    @include min {
      font-size: 3rem;
    }
  }
}
</style>
