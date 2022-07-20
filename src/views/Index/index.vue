<template>
  <div>
    <index-header :city="city"></index-header>
    <index-swiper :list="swiperInfo"></index-swiper>
    <index-icons :list="iconInfo"></index-icons>
    <index-sights></index-sights>
  </div>
</template>

<script>
import IndexHeader from './header.vue'
import IndexSwiper from './swiper.vue'
import IndexIcons from './icons.vue'
import IndexSights from './sights.vue'
import axios from 'axios'
export default {
  name: 'index',
  components: {
    IndexHeader,
    IndexSwiper,
    IndexIcons,
    IndexSights
  },
  data () {
    return {
      city: '',
      swiperInfo: [],
      iconInfo: []
    }
  },
  methods: {
    getIndexData () {
      const city = localStorage.city ? localStorage.city : ''
      axios.get('/api/index?city=' + city)
        .then(this.handleGetDataSucc.bind(this))
        .catch(this.handleGetDataErr.bind(this))
    },
    handleGetDataSucc (res) {
      const data = res.data.data
      this.swiperInfo = data.swiperList
      this.iconInfo = data.iconList
      this.city = data.city

      localStorage.city = data.city
      /* this.$bus.staticData = {
        city: data.city
      } */
    },
    handleGetDataErr () {
      console.log('error')
    },
    bindEvents () {
      this.$bus.$on('change', this.handleCityChange.bind(this))
    },
    handleCityChange (value) {
      this.city = value
      // localStorage.city = value
      this.getIndexData()
    }
  },
  created () {
    this.getIndexData()
    this.bindEvents()
  }
}
</script>

<style>

</style>
