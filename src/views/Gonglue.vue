<template>
     <div>
          <div class='top_bar'>
          <button></button>
          <h2>融资攻略</h2>
    </div>
    <ul class="nav_ul">
        <li><a href="#" class="select">全部</a></li>
        <li><a href="#">贷款</a></li>
        <li><a href="#">网贷</a></li>
        <li><a href="#">创投</a></li>
        <li><a href="#">信用卡</a></li>
    </ul>
     <Slider></Slider>
    
    
     <ul class="gonglue_list">
       <li>
          <img src="//res.rongzi.com/content/upload/images/CoverImg/2019-08-01/ccca45f3-bbb0-4154-a18a-cdf170f7b4c5.jpg">
          <div class="gonglue_info">
               <h3>个人短期贷款最高额度是多少，个人贷款期限是多久</h3>
               <p>2019-07-31 21:20:00</p>
               <span>贷款</span>
          </div>
       </li>
         <li>
          <img src="//res.rongzi.com/content/upload/images/CoverImg/2019-08-01/ccca45f3-bbb0-4154-a18a-cdf170f7b4c5.jpg">
          <div class="gonglue_info">
               <h3>个人短期贷款最高额度是多少，个人贷款期限是多久</h3>
               <p>2019-07-31 21:20:00</p>
               <span>贷款</span>
          </div>
       </li>
         <li>
          <img src="//res.rongzi.com/content/upload/images/CoverImg/2019-08-01/ccca45f3-bbb0-4154-a18a-cdf170f7b4c5.jpg">
          <div class="gonglue_info">
               <h3>个人短期贷款最高额度是多少，个人贷款期限是多久</h3>
               <p>2019-07-31 21:20:00</p>
               <span>贷款</span>
          </div>
       </li>
         <li>
          <img src="//res.rongzi.com/content/upload/images/CoverImg/2019-08-01/ccca45f3-bbb0-4154-a18a-cdf170f7b4c5.jpg">
          <div class="gonglue_info">
               <h3>个人短期贷款最高额度是多少，个人贷款期限是多久</h3>
               <p>2019-07-31 21:20:00</p>
               <span>贷款</span>
          </div>
       </li>
        <li>
          <img src="//res.rongzi.com/content/upload/images/CoverImg/2019-08-01/ccca45f3-bbb0-4154-a18a-cdf170f7b4c5.jpg">
          <div class="gonglue_info">
               <h3>个人短期贷款最高额度是多少，个人贷款期限是多久</h3>
               <p>2019-07-31 21:20:00</p>
               <span>贷款</span>
          </div>
       </li>
     </ul>
      </div>

  


</template>
<script>

import Slider from './hslider.vue'

export default {
  components:{
 
     Slider,

    
  }
}
</script>


<style lang='scss' scoped>
.top_bar{ height: 45px;border-bottom: 1px solid #f3f3f3; background: #e62117;color: #fff;}
.top_bar button{ position:absolute; left: 0; top:0; height: 45px; width: 30px;}
.top_bar h2{ text-align: center; font-size: 18px; line-height: 45px; font-weight: normal;}

.nav_ul{

   display: flex;
   background: #fff;
   height: 36px;
    li{
      font-size: 16px;
      line-height: 36px;
      flex:1;
     
      a{
        display: block;  
      }
      .select{
          border-bottom:2px solid #f85050;
          color: #f85050;
        }  
    }
 }
.gonglue_banner{height: 175px;}
.gonglue_list{
    background: #fff;
     li{
       clear: both;
       padding:13px;
        border-bottom:1px solid #e6e6e6;
       img{
         float: left;
         width: 90px;
         height: 60px;
       }
       .gonglue_info{
         padding-left: 100px;
          position: relative;
        
         h3{
           font-size: 12px;
           color:#222;
           text-align: left;
           font-weight: normal;
         }
         p{
           color: #acacac; 
           font-size: 12px;
            text-align: left;
            line-height: 22px;
            padding-top: 5px;
           }
           span{
             display: inline-block;
             font-size: 12px;
             border:1px solid #00b7ee;
             color:#00b7ee;
             padding: 2px 3px;
             border-radius: 2px; 
             position: absolute;
            
             bottom: 0;
             right: 0;
           }
       }
     }


}
</style>
