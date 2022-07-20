<template>
  <div class="header">
    <div class="back iconfont">&#xe612;</div>
    <div class="search">
      <span class="iconfont search-icon">&#xe611;</span>请输入搜索内容
    </div>
    <div class="city">
      <router-link to="/city" class="city-link">{{ city }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index-header',
  props: ['city']
}
</script>

<style lang="stylus" scope>
@import '../../assets/stylus/varibles.styl'
.header
  display: flex
  height: .88rem
  line-height: .88rem
  background: $bgColor
  color: #fff
  .back
    width: .58rem
    text-align: center
    font-size: .4rem
  .search
    flex: 1
    height: .6rem
    line-height: .6rem
    margin: .14rem .2rem
    padding-left: .4rem
    background: #fff
    border-radius: .1rem
    color: #ccc
    .search-icon
      position: relative
      top: .02rem
      padding-right: .04rem
  .city
    padding-right: .6rem
    position: relative
    &:before
      position: absolute
      top: .34rem
      right: .2rem
      content: "\0020"
      width: 0
      height: 0
      border-left: .14rem solid transparent
      border-right: .14rem solid transparent
      border-top: .14rem solid #fff
    .city-link
      color: #fff
</style>
