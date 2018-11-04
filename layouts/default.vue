<template>
  <div class="container">
    <TheHeader />
    <TheMain />
    <TheFooter />
    <TheError v-if="error" :message="error" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TheHeader from '@/layouts/partial/TheHeader'
import TheMain from '@/layouts/partial/TheMain'
import TheFooter from '@/layouts/partial/TheFooter'
import TheError from '@/layouts/partial/TheError'

export default {
  components: {
    TheHeader,
    TheMain,
    TheFooter,
    TheError
  },
  computed: {
    ...mapState(['error'])
  }
}
</script>

<style lang="scss">
// ==========================================================================
// !!!グローバル!!!
// ==========================================================================
html {
  font-size: 12px;
  @include min {
    font-size: 16px;
  }
}
body {
  font-weight: normal;
  line-height: 1.6;
  letter-spacing: 0.14em;
  color: $color-font;
  @include font-serif;
}
</style>
