<!--  -->
<template>
<div class="home" >
      <div class='top_bar' >
          <button>￥</button>
          <ul class="dh_ul">
              <li>极速贷</li>
              <li class="select">信用卡</li>
              <li>大额贷</li>
          </ul>
      </div>

<section class="part noskin">
     <ul class="bank_list">
         <li>
             <span>热</span>
             <div class="bank_con">
             <h3><img src="../assets/bank_pic.jpg"></h3>
             <dl>
                 <dt>梦卡经典白金卡</dt>
                 <dd>免息期:<em>50</em>天</dd>
                  <dd>平均额度:<em>10</em>万元</dd>
             </dl>
             <h4>立即申请</h4>
             </div>
             <div class="contrast_bar">
                 <p class="left">天天5折享美食，更有日日优惠福利券</p>
                 <p class="right"><i class="iconfont yec"></i>加入对比</p>
             </div>
         </li>
           <li>
             <span>热</span>
             <div class="bank_con">
             <h3><img src="../assets/bank_pic.jpg"></h3>
             <dl>
                 <dt>梦卡经典白金卡</dt>
                 <dd>免息期:<em>50</em>天</dd>
                  <dd>平均额度:<em>10</em>万元</dd>
             </dl>
             <h4>立即申请</h4>
             </div>
             <div class="contrast_bar">
                 <p class="left">天天5折享美食，更有日日优惠福利券</p>
                 <p class="right"><i class="iconfont yec"></i>加入对比</p>
             </div>
         </li>
           <li>
             <span>热</span>
             <div class="bank_con">
             <h3><img src="../assets/bank_pic.jpg"></h3>
             <dl>
                 <dt>梦卡经典白金卡</dt>
                 <dd>免息期:<em>50</em>天</dd>
                  <dd>平均额度:<em>10</em>万元</dd>
             </dl>
             <h4>立即申请</h4>
             </div>
             <div class="contrast_bar">
                 <p class="left">天天5折享美食，更有日日优惠福利券</p>
                 <p class="right"><i class="iconfont yec"></i>加入对比</p>
             </div>
         </li>
           <li>
             <span>热</span>
             <div class="bank_con">
             <h3><img src="../assets/bank_pic.jpg"></h3>
             <dl>
                 <dt>梦卡经典白金卡</dt>
                 <dd>免息期:<em>50</em>天</dd>
                  <dd>平均额度:<em>10</em>万元</dd>
             </dl>
             <h4>立即申请</h4>
             </div>
             <div class="contrast_bar">
                 <p class="left">天天5折享美食，更有日日优惠福利券</p>
                 <p class="right"><i class="iconfont yec"></i>加入对比</p>
             </div>
         </li>
           <li>
             <span>热</span>
             <div class="bank_con">
             <h3><img src="../assets/bank_pic.jpg"></h3>
             <dl>
                 <dt>梦卡经典白金卡</dt>
                 <dd>免息期:<em>50</em>天</dd>
                  <dd>平均额度:<em>10</em>万元</dd>
             </dl>
             <h4>立即申请</h4>
             </div>
             <div class="contrast_bar">
                 <p class="left">天天5折享美食，更有日日优惠福利券</p>
                 <p class="right"><i class="iconfont yec"></i>加入对比</p>
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

.bank_list{
    margin-top: 25px;
}
.bank_list li{ 
    padding: 30px 20px;
    position: relative;
     margin-bottom: 10px;
    background: #fff;
    span{ display: block;
    height:30px ;
    width: 29px;
    background:url(../assets/icon_hot.png) no-repeat ;
    background-size: auto 100%;
    font-size:12px;
    color: #fff;
    position: absolute;
    top: -5px;
    left: 5px;
    line-height: 25px;
   
    }
    .bank_con{ 
        clear: both;
        padding-bottom: 10px;
        overflow: hidden; 
        zoom:1;
        h3{
        font-size: 14px;
        color: #888;
        float: left;
        img{
            width:98px ;
            height: 61px;
        }  
    }
    dl{
        float: left;
        padding-left:15px;
        line-height: 22px;
        dt{ 
            font-size: 15px; 
            font-weight: bold;
        }
        dd{
            font-size: 13px;
            text-align: left;
            color:#999;
            em{
                font-style: normal;
                color:#f85050;
            }
        }
       
    }
     h4{
         position: absolute;
         right: 10px;
            background:#f85050;
            color:#fff;
            border-radius:100%;
            height:25px;
            width: 25px;
            font-size:12px;
            font-weight: normal;
            line-height: 16px;
            word-wrap:break-word;
            padding:10px;
            margin-top: 5px;
   
        }
    }
    
    .contrast_bar{
         font-size:13px;
         clear:both;
         border-top:1px solid #ddd;

         p{
             line-height: 25px;
            
           
         }
          .left{
                width: 50%;
                color: #666;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                float: left;

            }
            .right{
                float:right;
                  color: #999;
                font-size:12px;
            }
        

}

}



</style>