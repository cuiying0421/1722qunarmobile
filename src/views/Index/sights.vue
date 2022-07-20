<template>
  <div class="sights">
    <ul>
        <li>1</li>
        <li>2</li>
        <li>1</li>
        <li>2</li>
        <li>1</li>
        <li>2</li>
        <li>1</li>
        <li>2</li>
    </ul>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
  name: 'index-sights',
  props: {
    list: Array,
    default: []
  },
  data () {
    return {

    }
  },
  mounted () {
    const wrapper = document.querySelector('.sights')
    this.scroll = new BScroll(wrapper)
  }
}
</script>

<style lang="stylus" scoped>
.sights
    overflow: hidden
    height: 1rem
    background: green
</style>
