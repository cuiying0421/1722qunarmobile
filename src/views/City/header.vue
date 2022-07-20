<template>
  <div class="header">
    <router-link to="/">
      <div class="back iconfont">&#xe612;</div>
    </router-link>
    <div class="title">
      <div class="area-switch active">境内</div>
      <div class="area-switch">境外.港澳台</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'city-header'

}
</script>

<style lang="stylus" scope>
@import '../../assets/stylus/varibles.styl'

.header
  /* position: fixed
  top: 0
  left: 0 */
  // height: 2000px
  // display: flex
  // height: 0.88rem
  // line-height: 0.88rem
  background: $bgColor
  color: #fff

  .back
    width: 0.58rem
    text-align: center
    font-size: 0.4rem
    color: #fff

  .title
    flex: 1
    display: flex
    justify-content: center
    width: 2.04rem
    height: .6rem
    line-height: .6rem
    margin: .14rem 0
    .area-switch
      width: 2.04rem
      height: .6rem
      text-align: center
      border-radius: .06rem
      border: 1px solid #fff
    .active
      background: #fff
      color: $bgColor
</style>
