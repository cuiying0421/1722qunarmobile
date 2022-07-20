<template>
  <div class="slide-container">
    <swiper :options="swiperOption" v-if="hasSwiper">
      <!-- slides -->
      <swiper-slide v-for="item in list" :key="item.id">
        <img class="slide-img" :src="item.imgUrl" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'index-swiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: 2000,
        loop: true,
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    hasSwiper () {
      return !!this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/varibles.styl';

.swiper-pagination >>> .swiper-pagination-bullet-active
  background: $bgColor;

.swiper-pagination
  top: 2rem

.slide-container
  overflow: hidden;
  height: 0;
  padding-bottom: 31.25%;
  .slide-img
    width: 100%;
</style>
