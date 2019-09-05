<!--  -->
<template>
<div class="home" >
      <div class='top_bar' >
          <button>￥</button>
          <ul class="dh_ul">
              <li>极速贷</li>
              <li>信用卡</li>
              <li class="select">大额贷</li>
          </ul>
      </div>

<section class="part">
       <ul class="pro_list">
           <li>
               <div class="pro_cot">
                      <p><img src="../assets/bank_1.jpg"></p>
                      <dl>
                          <dt>华夏银行 - 普通信用卡</dt>
                          <dd><span>信用卡</span><em>|</em><span>15天放款</span></dd>
                          <dd class="data">无身份要求</dd>
                      </dl>
                      <div class="pro_note">
                          <p class="red">总利息：2.62万</p>
                          <p>月供：1.05万/每月</p>
                      </div>
               </div>
           </li>
             <li>
               <div class="pro_cot">
                      <p><img src="../assets/bank_1.jpg"></p>
                      <dl>
                          <dt>华夏银行 - 普通信用卡</dt>
                          <dd><span>信用卡</span><em>|</em><span>15天放款</span></dd>
                          <dd class="data">无身份要求</dd>
                      </dl>
                      <div class="pro_note">
                          <p class="red">总利息：2.62万</p>
                          <p>月供：1.05万/每月</p>
                      </div>
               </div>
           </li>
             <li>
               <div class="pro_cot">
                      <p><img src="../assets/bank_1.jpg"></p>
                      <dl>
                          <dt>华夏银行 - 普通信用卡</dt>
                          <dd><span>信用卡</span><em>|</em><span>15天放款</span></dd>
                          <dd class="data">无身份要求</dd>
                      </dl>
                      <div class="pro_note">
                          <p class="red">总利息：2.62万</p>
                          <p>月供：1.05万/每月</p>
                      </div>
               </div>
           </li>
             <li>
               <div class="pro_cot">
                      <p><img src="../assets/bank_1.jpg"></p>
                      <dl>
                          <dt>华夏银行 - 普通信用卡</dt>
                          <dd><span>信用卡</span><em>|</em><span>15天放款</span></dd>
                          <dd class="data">无身份要求</dd>
                      </dl>
                      <div class="pro_note">
                          <p class="red">总利息：2.62万</p>
                          <p>月供：1.05万/每月</p>
                      </div>
               </div>
           </li>
       </ul>
  
</section>
</div>
</template>
<script>
      let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
      //得到html的Dom元素
      let htmlDom = document.getElementsByTagName('html')[0];
      //设置根元素字体大小
      if(htmlWidth>750){htmlWidth=750}
      htmlDom.style.fontSize = htmlWidth / 10 + 'px';
    </script>
<script>
import { Indicator } from "mint-ui"
// @ is an alias to /src


export default {
  

 
}
</script>

<style lang='scss' scoped>
@import "../assets/style/common.css";
.top_bar{ height: 45px;border-bottom: 1px solid #f3f3f3; background: #fff;margin-bottom:5px;}
.top_bar button{ position:absolute; left: 0; top:0; height: 45px; width: 30px;}
.dh_ul{ height: 45px;    display: flex; padding: 0 40px; }
.dh_ul li{ line-height: 45px;  font-size: 16px;box-sizing: border-box;flex: 1; font-weight: bold;}
.dh_ul li.select{color:#f85050; }

.pro_list li{ padding: 15px 10px 12px 10px; border-bottom: 1px solid #e1e1e1; overflow: hidden; zoom: 1; }
.pro_cot{position: relative;overflow: hidden; zoom: 1; }
.pro_cot p{float: left;}
.pro_cot p img{ width: 50px; height: 50px;}
.pro_cot dl{ float: left; padding-left: 10px; text-align: left;}
.pro_cot dl dt{ font-size: 15px; line-height: 20px;}
.pro_cot dl dd{ font-size:13px; line-height: 20px;}
.pro_cot dl dd em{ padding: 0 5px; }
.pro_cot dl dd.data{ color:#999;}
.pro_note{ position: absolute; right: 0; bottom: 0;line-height: 20px;}
.pro_note p{ font-size:13px;}
.pro_note p.red{color:#f85050}





</style>