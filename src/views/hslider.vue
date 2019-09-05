<template>
  <div class="home">
       <swiper :options="swiperOption">
            <swiper-slide class="swiper-slide">
                  <img src="//res.rongzi.com/content/upload/images/CoverImg/2019-01-19/cf643c37-2c47-4af7-ac65-2604bdc6ad9b.jpg">
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <img src="//res.rongzi.com/content/upload/images/CoverImg/2017-11-22/0270df20-a976-400e-aa34-d4b836737497.jpg"></swiper-slide>
            <swiper-slide class="swiper-slide">  <img src="//res.rongzi.com/content/upload/images/CoverImg/2019-01-18/30f5b7d0-d78e-4da3-9513-fde500a8f0c7.jpg"></swiper-slide>
           <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>

  </div>
</template>


<script>
import 'swiper/dist/css/swiper.css'   
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {  
 
 components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="scss">
.swiper-slide{
  height: 175px;
  img{
    height: 175px;
    width: 100%;
  }

}


</style>

