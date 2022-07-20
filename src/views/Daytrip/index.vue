<template>
  <div>
    <div v-for="(item, index) in list" :key="index">
        {{item}}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'daytrip',
  data () {
    return {
      list: []
    }
  },
  props: ['id'],
  watch: {
    id () {
      this.getDayTripInfo()
      console.log('hhhh')
    }
  },
  created () {
    /* this.$watch(
      () => this.id,
      (toParams, previousParams) => {
        // 对路由变化做出响应...
        console.log('hhhh')
        this.getDayTripInfo()
      }
    ) */
    this.getDayTripInfo()
  },
  methods: {
    getDayTripInfo () {
      axios.get('/api/daytrip?id=' + this.id)
        .then(this.handleGetDataSucc.bind(this))
        .catch(this.handleGetDataErr.bind(this))
    },
    handleGetDataSucc (res) {
      console.log(res)
      this.list = res.data.data.list
    },
    handleGetDataErr () {

    }
  }
}
</script>

<style>

</style>
