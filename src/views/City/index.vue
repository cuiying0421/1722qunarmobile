<template>
  <div>
    <Header></Header>
    <Search :list="hotCityInfo" :city="city"></Search>
  </div>
</template>

<script>
import Header from './header'
import Search from './search'
import axios from 'axios'
export default {
  name: 'city',
  data () {
    return {
      hotCityInfo: [],
      city: ''
    }
  },
  components: {
    Header,
    Search
  },
  methods: {
    getIndexData () {
      const city = localStorage.city ? localStorage.city : ''
      axios.get('/api/city?city=' + city)
        .then(this.handleGetDataSucc.bind(this))
        .catch(this.handleGetDataErr.bind(this))
    },
    handleGetDataSucc (res) {
      const data = res.data.data
      this.hotCityInfo = data.hotCityList
      this.city = data.city
      // this.$bus.$emit('change', data.city)
      localStorage.city = data.city
      // console.log(this.hotCityInfo, 'city的数据')
    },
    handleGetDataErr () {
      console.log('error')
    }
  },
  created () {
    this.getIndexData()
  }
}
</script>

<style lang="stylus" scoped>

</style>
