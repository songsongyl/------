<template>
  <div class="block text-center" style="text-align:center">
   <el-carousel height="200px" type="card">
    <el-carousel-item v-for="item in imageUrl" :key="item">
     <img :src="item.url" alt="" />
    </el-carousel-item>
   </el-carousel>
  </div>
 



  <div id="content-wrapper" class="row">
    <div class="threecolumns">
        <h4>最新发布</h4>
        <p>
            <strong>最新发布</strong><br><br>
             料理是一场原地旅行<br>
              今天在日本<br>
              精致、健康、注重季节性食材<br>
              我心中日料N0.1<br>
              三文鱼厚实肥美，油脂感丰富!<br>
              是味蕾与心灵的盛宴<br>
              是海洋的馈赠<br>
              是纯粹的美味<br>
              lalal<br>
              lalal<br>
              lalal<br>
            
        </p>
    </div>

    <div class="threecolumns">
    <div class="entry-detail" v-for="item in newProduct" :key="item">
     <img :src="item.url" alt="" width="60px" height="60px" />
     <router-link v-if="item.title === '寿喜烧'" :to="{ name: 'chickenstepsRoute' }">
      <h7>{{ item.title }}</h7>
     </router-link>
     <router-link v-if="item.title === '三文鱼牛油果拌饭'" :to="{ name: 'mangostepsRoute' }">
      <h7>{{ item.title }}</h7>
     </router-link>
     <router-link v-if="item.title === '日式照烧豆腐'" :to="{ name: 'tofostepsRoute' }">
      <h7>{{ item.title }}</h7>
     </router-link>
 
     <p>{{ item.descb }}</p >
    </div>
   </div>



  </div>
 
 
  <!-- <div class="threecolumns">
    <h4>热门推荐</h4>
    <p>
     料理是一场原地旅行<br>
     今天在泰国<br>
     萨瓦迪卡<br>
     泰里泰气的一天<br>
     来一碗咖喱就饭<br>
     吃得多想得少 开开心心没烦恼..<br>
     lalal<br>
     lalal<br>
     lalal<br>
     lalal<br>
    </p >
  </div> -->


 
 
 
 </template>
 
 
<script setup lang="ts">
import { ref } from 'vue';

const imageUrl = [
  { url: "/src/images/异国料理/15.jpg" },
  { url: "/src/images/异国料理/16.jpg" },
  { url: "/src/images/异国料理/17.jpg" },
  { url: "/src/images/异国料理/18.jpg" }];


const newProduct = ref([
  {
    url: "/src/images/异国料理/19.jpg",
    title: '寿喜烧',
    descb: '寿喜烧（Sukiyaki）是日本的传统火锅，以甜酱油为基础的汤底烹煮牛肉、蔬菜等食材。这道菜通常搭配生鸡蛋液作为蘸料，口感丰富。'
  },
  {
    url: "/src/images/异国料理/20.jpg",
    title: '三文鱼牛油果拌饭',
    descb: '是一道美味且营养丰富的料理，将新鲜三文鱼与成熟牛油果切片混合，加入少许酱油和芥末调味后铺在温热的米饭上，口感丰富且营养均衡。'
  },
  {
    url: "/src/images/异国料理/21.jpg",
    title: '日式照烧豆腐',
    descb: '甜咸适中的照烧酱和外焦里嫩的豆腐而受到喜爱，选用嫩滑豆腐块，用特制照烧酱汁慢炖至入味，外皮略带焦香而内里保持柔嫩。'
  }
]);
</script>
 
 
 <style>
 
.row {
    /* 设置为flex布局，以便使用相关属性进行元素布局控制 */
    display: flex;

    /* 设置元素按行排列 */
    flex-direction: row;

    /* 不允许换行 */
    flex-wrap: nowrap;

    /* 在水平方向上居中对齐元素 */
    justify-content: center; 

    /* 在垂直方向上居中对齐元素 */
     align-items: center; 

    /* 设置元素拉伸以填满容器高度（可选，根据具体需求决定是否保留） */
     align-items: stretch; 

    /* 设置高度为100%，使该块填满父容器的高度（假设父容器有明确高度） */
    height: 100%;

    /* 设置宽度为100%，使该块填满父容器的宽度（假设父容器有明确宽度） */
    width: 100%;
}
 /* 整体的.threecolumns 元素设置为横向排列 */
 .threecolumns {
   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   align-items: stretch;
   margin: 30px;
 }
 
 /* 每个.threecolumns 内部的内容设置为纵向排列 */
 .threecolumns > * {
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: stretch;
 }
 
 .threecolumns:first-child {
   /* 第一个.threecolumns 元素内的h4和p垂直排列 */
   justify-content: space-between;
 }
 
 .entry-detail {
   font-size: 10px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: flex-start;
 }
 
 .entry-detail img {
   width: 150px;
   height: 150px;
   margin-right: 50px;
   /* 可根据需求调整图片与文字之间的间距 */
 }
 
 .entry-detail p {
   width: 150px;
   /* 设置段落宽度与图片宽度一致 */
 }
 
 h4 {
   font-size: 20px;
   font-weight: bold;
   color: black;
 }
 
 p {
   font-size: 14px;
 }
 
 h7 {
   font-size: 17px;
   color: black;
 }
 </style>
 
 





<!-- <template>
  <div class="block text-center" style="text-align:center">
    <el-carousel height="200px" type="card">
      <el-carousel-item v-for="item in imageUrl" :key="item">
        <img :src="item.url" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
  <div id="content-wrapper" class="row">
    <div class="threecolumns">
      <h4>热门推荐</h4>
      <p>
        料理是一场原地旅行<br>
        今天在日本<br>
        精致、健康、注重季节性食材<br>
        我心中日料N0.1<br>
        三文鱼厚实肥美，油脂感丰富!<br>
        是味蕾与心灵的盛宴<br>
        是海洋的馈赠<br>
        是纯粹的美味<br>
        lalal<br>
        lalal<br>
        lalal<br>
      </p>
    </div>
    <div class="threecolumns">
      <div class="entry-detail" v-for="item in newProduct" :key="item">
        <img :src="item.url" alt="" width="60px" height="60px" />
        <router-link v-if="item.title === '寿喜烧'" :to="{ name: 'chickenstepsRoute' }">
          <h6>{{ item.title }}</h6>
        </router-link>
        <router-link v-if="item.title === '三文鱼牛油果拌饭'" :to="{ name: 'mangostepsRoute' }">
          <h6>{{ item.title }}</h6>
        </router-link>
        <router-link v-if="item.title === '日式照烧豆腐'" :to="{ name: 'tofostepsRoute' }">
          <h6>{{ item.title }}</h6>
        </router-link>

        <p>{{ item.descb }}</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const imageUrl = [
  { url: "/src/images/异国料理/15.jpg" },
  { url: "/src/images/异国料理/16.jpg" },
  { url: "/src/images/异国料理/17.jpg" },
  { url: "/src/images/异国料理/18.jpg" }];


const newProduct = ref([
  {
    url: "/src/images/异国料理/19.jpg",
    title: '寿喜烧',
    descb: '寿喜烧（Sukiyaki）是日本的传统火锅，以甜酱油为基础的汤底烹煮牛肉、蔬菜等食材。这道菜通常搭配生鸡蛋液作为蘸料，口感丰富。'
  },
  {
    url: "/src/images/异国料理/20.jpg",
    title: '三文鱼牛油果拌饭',
    descb: '是一道美味且营养丰富的料理，将新鲜三文鱼与成熟牛油果切片混合，加入少许酱油和芥末调味后铺在温热的米饭上，口感丰富且营养均衡。'
  },
  {
    url: "/src/images/异国料理/21.jpg",
    title: '日式照烧豆腐',
    descb: '甜咸适中的照烧酱和外焦里嫩的豆腐而受到喜爱，选用嫩滑豆腐块，用特制照烧酱汁慢炖至入味，外皮略带焦香而内里保持柔嫩。'
  }
]);
</script>


<style scoped>
.row {
  /* 设置为flex布局，以便使用相关属性进行元素布局控制 */
  display: flex;

  /* 设置元素按行排列 */
  flex-direction: row;

  /* 不允许换行 */
  flex-wrap: nowrap;

  /* 在水平方向上居中对齐元素 */
  justify-content: center;

  /* 在垂直方向上居中对齐元素 */
  align-items: center;

  /* 设置元素拉伸以填满容器高度（可选，根据具体需求决定是否保留） */
  align-items: stretch;

  /* 设置高度为100%，使该块填满父容器的高度（假设父容器有明确高度） */
  height: 100%;

  /* 设置宽度为100%，使该块填满父容器的宽度（假设父容器有明确宽度） */
  width: 100%;
}

.threecolumns {
  /* 每个.threecolumns 元素内部布局设置 */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  margin: 30px;
}

.threecolumns:first-child {
  /* 第一个.threecolumns 元素内的h4和p垂直排列 */
  justify-content: space-between;
}

.threecolumns:nth-child(2) {

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
}

.threecolumns:nth-child(3) {

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
}

.threecolumns:nth-child(3) {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
}


.entry-detail {
  font-size: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.entry-detail img {
  width: 150px;
  height: 150px;
  margin-right: 50px;
  /* 可根据需求调整图片与文字之间的间距 */
}

.entry-detail p {
  width: 150px;
  /* 设置段落宽度与图片宽度一致 */

}

h4 {
  font-size: 20px;
  font-weight: bold;
  color: black;

}

p {
  font-size: 12px;
}

h6 {
  font-size: 16px;
  color: black;

}
</style> -->
