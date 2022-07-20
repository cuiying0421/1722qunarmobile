<template>
  <div>
    <div class="search">
      <input class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="location">
      <span class="your-position">您的位置</span>
      <div class="place">
        <div class="place-name active">{{ city }}</div>
      </div>
    </div>
    <div class="location">
      <span class="your-position">热门城市</span>
      <div class="place">
        <div class="place-name" v-for="item in list" :key="item.id" @click="handleCityClick">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'city-search',
  data () {
    return {

    }
  },
  props: {
    list: Array,
    city: String
  },

  methods: {
    handleCityClick (e) {
      // console.log(e.target.innerHTML)
      this.$bus.$emit('change', e.target.innerHTML)
      this.$router.go(-1)
    }
  }
/*   activated () {
    this.city = localStorage.city ? localStorage.city : '北京'
  } */
}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/varibles.styl'
.search
  height: .72rem
  padding: 0 .2rem
  background: $bgColor
  .search-input
    width: 100%
    height: .6rem
    text-align: center
    border-radius: .06rem

.location

  .your-position
    display: block
    width: 100%
    height: .54rem
    line-height: .54rem
    padding: 0 .4rem
    background: #F5F5F5
  .place
    // height: 1.1rem
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    padding: .12rem .4rem
    border-top: 1px solid #DFE0E1
    border-bottom: 1px solid #DFE0E1
    .place-name
      width: 2.08rem
      height: .6rem
      line-height: .6rem
      margin: .12rem 0
      color: #212121
      border: 1px solid #C9CCCD
      border-radius: .06rem
      text-align: center
    .active
      color: $bgColor
      border: 1px solid $bgColor
</style>
