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
            今天在法国<br>
            法餐中的经典<br>
            日落，晚风，鲜花，见面<br>
            生活永远需要仪式感<br>
            慢慢的法式浪漫气息<br>
            高级，安静，优雅<br>
            lalal<br>
          lalal<br>
            lalal<br>
      
            
        </p>
    </div>

    <div class="threecolumns">
    <div class="entry-detail" v-for="item in newProduct" :key="item">
     <img :src="item.url" alt="" width="60px" height="60px" />
     <router-link v-if="item.title === '奶油蘑菇汤'" :to="{ name: 'creamstepRoute' }">
      <h7>{{ item.title }}</h7>
     </router-link>
     <router-link v-if="item.title === '法式蜗牛'" :to="{ name: 'mangostepsRoute' }">
      <h7>{{ item.title }}</h7>
     </router-link>
     <router-link v-if="item.title === '法式鹅肝'" :to="{ name: 'soupstepsRoute' }">
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
  { url: "/src/images/异国料理/8.jpg" },
  { url: "/src/images/异国料理/9.jpg" },
  { url: "/src/images/异国料理/11.jpg" },
   // { url: "/src/images/异国料理/22.jpg" }
 ];


const newProduct = ref([
  {
    url: "/src/images/异国料理/12.jpg",
    title: '奶油蘑菇汤',
    descb: '奶油蘑菇汤以新鲜蘑菇、黄油和奶油为主要原料，口感浓郁顺滑。通常加入洋葱和大蒜提味，搭配香草和白葡萄酒，味道丰富而醇厚，是冬日暖身的佳选。'
  },
  {
    url: "/src/images/异国料理/13.jpg",
    title: '法式蜗牛',
    descb: '法式蜗牛（Escargot）口感鲜美且富有层次，这道菜常作为开胃菜出现在高级餐厅中，不仅味道独特，还富有文化意义，是体验法国美食文化的绝佳选择。'
  },
  {
    url: "/src/images/异国料理/14.jpg",
    title: '法式鹅肝',
    descb: '法式鹅肝（Foie Gras）法国高级料理中的珍馐，以其细腻、丰富的口感著称。用鸭或鹅的肝脏制成，可以煎、烤或制成慕斯，搭配果酱或面包，味道浓郁而奢华'
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
        今天在法国<br>
        法餐中的经典<br>
        日落，晚风，鲜花，见面<br>
        生活永远需要仪式感<br>
        慢慢的法式浪漫气息<br>
        高级，安静，优雅<br>
        lalal<br>
        lalal<br>
        lalal<br>
      </p>
    </div>
    <div class="threecolumns">
      <div class="entry-detail" v-for="item in newProduct" :key="item">
        <img :src="item.url" alt="" width="60px" height="60px" />
        <router-link v-if="item.title === '奶油蘑菇汤'" :to="{ name: 'creamstepRoute' }">
          <h6>{{ item.title }}</h6>
        </router-link>
        <router-link v-if="item.title === '法式蜗牛'" :to="{ name: 'mangostepsRoute' }">
          <h6>{{ item.title }}</h6>
        </router-link>
        <router-link v-if="item.title === '法式鹅肝'" :to="{ name: 'tofostepsRoute' }">
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
  { url: "/src/images/异国料理/8.jpg" },
  { url: "/src/images/异国料理/9.jpg" },
  { url: "/src/images/异国料理/10.jpg" },
  { url: "/src/images/异国料理/11.jpg" }];


const newProduct = ref([
  {
    url: "/src/images/异国料理/12.jpg",
    title: '奶油蘑菇汤',
    descb: '奶油蘑菇汤以新鲜蘑菇、黄油和奶油为主要原料，口感浓郁顺滑。通常加入洋葱和大蒜提味，搭配香草和白葡萄酒，味道丰富而醇厚，是冬日暖身的佳选。'
  },
  {
    url: "/src/images/异国料理/13.jpg",
    title: '法式蜗牛',
    descb: '法式蜗牛（Escargot）口感鲜美且富有层次，这道菜常作为开胃菜出现在高级餐厅中，不仅味道独特，还富有文化意义，是体验法国美食文化的绝佳选择。'
  },
  {
    url: "/src/images/异国料理/14.jpg",
    title: '法式鹅肝',
    descb: '法式鹅肝（Foie Gras）法国高级料理中的珍馐，以其细腻、丰富的口感著称。用鸭或鹅的肝脏制成，可以煎、烤或制成慕斯，搭配果酱或面包，味道浓郁而奢华'
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
