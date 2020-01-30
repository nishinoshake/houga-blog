<template>
  <div class="entry" v-if="post">
    <h2 class="entry-title">{{ post.fields.title }}</h2>
    <p class="entry-date">{{ releaseDate }}</p>
    <div class="entry-body" v-if="renderedMd" v-html="renderedMd"></div>
    <TagList class="entry-tag" :tags="post.fields.tags" />
    <div class="entry-trailer" v-if="post.fields.trailerId">
      <iframe width="480" height="270" :src="`https://www.youtube.com/embed/${post.fields.trailerId}?controls=2`" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
import md from 'markdown-it'
import { mapGetters } from 'vuex'
import PostList from '@/components/PostList'
import TagList from '@/components/TagList'

export default {
  components: {
    PostList,
    TagList
  },
  head() {
    return {
      title: `${this.post.fields.title} | 邦画だってさ`
    }
  },
  computed: {
    ...mapGetters(['post']),
    renderedMd() {
      console.log(this.post.fields.body)
      return this.post && this.post.fields.body ? md().render(this.post.fields.body) : null
    },
    releaseDate() {
      if (!this.post) {
        return null
      }

      const d = new Date(this.post.fields.releaseDate)

      return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
    }
  },
  async fetch({ store, params }) {
    if (!process.browser) {
      await store.dispatch('fetchPost', { id: params.id })
    }

    store.commit('setPostId', { id: params.id })
  },
  mounted() {}
}
</script>

<style lang="scss" scoped>
.entry {
  &-title {
    margin-bottom: 0.8rem;
    font-size: 1.8rem;
    line-height: 1.4;
    letter-spacing: 0.12em;
    @include min {
      font-size: 2.2rem;
    }
  }
  &-date {
    color: $color-modest;
    margin-bottom: 4rem;
  }
  &-tag {
    margin-top: 0.3rem;
  }
  &-spec {
    table-layout: fixed;
    border-collapse: collapse;
    margin-top: 4rem;
    text-align: left;
    th,
    td {
      padding: 1.2rem 0;
      border-top: 1px solid $color-snow;
      border-bottom: 1px solid $color-snow;
    }
    th {
      width: 7em;
    }
    a {
      @include link-text;
    }
  }
  &-trailer {
    width: 100%;
    max-width: 480px;
    margin-top: 6rem;
    position: relative;
    background-color: $color-black;
    &:before {
      content: '';
      display: block;
      height: 0;
      padding-top: 56.25%;
    }
    iframe {
      @include fit-full;
    }
  }
  &-body {
    /deep/ {
      line-height: 2;
      font-size: 1.6rem;
      p,
      ul,
      ol,
      dl,
      table,
      pre,
      blockquote {
        margin: 2rem 0;
      }

      h1,
      h2,
      h3,
      h4,
      h5 {
        margin: 4rem 0 2rem;
      }
      > *:first-child {
        margin-top: 0;
      }
      > *:last-child {
        margin-bottom: 0;
      }

      h1,
      h2,
      h3,
      h4,
      h5 {
        padding-left: 0.7rem;
        line-height: 1.4;
        border-left: 4px solid currentColor;
      }

      ul {
        list-style-type: disc;
        list-style-position: inside;
      }

      ol {
        list-style-type: decimal;
        list-style-position: inside;
      }

      img {
        display: block;
        max-width: 100%;
        height: auto;
      }

      hr {
        margin: 1em 0;
        border-top: 1px solid #3f3f3f;
      }

      pre {
        width: 100%;
        box-sizing: border-box;
        overflow: auto;
        padding: 0.5em 1em;
        white-space: pre-wrap;
        background-color: #ededed;
      }

      blockquote {
        padding: 0.5em 1em;
        border-left: 3px solid #999;
      }

      table {
        width: 100%;
        border: 1px solid #999;
        th,
        td {
          padding: 1em 0.5em;
          border: 1px solid #999;
        }
        thead,
        th {
          vertical-align: middle;
          background-color: #ccc;
        }
      }

      strong {
        font-weight: bold;
      }

      em {
        font-style: italic;
      }

      del {
        text-decoration: line-through;
      }

      sub {
        vertical-align: sub;
      }

      sup {
        vertical-align: super;
      }

      a {
        color: $color-link;
        text-decoration: underline;
        &:hover {
          text-decoration: none;
        }
      }
    }
  }
}
</style>
