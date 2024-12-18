<template>
  <div class="block text-center" style="text-align:center">
    <el-carousel height="200px" type="card">
      <el-carousel-item v-for="item in imageUrl" :key="item">
        <img :src="item.url" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>

  


 
    <div class="threecolumns">
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
      </p>
    </div>
    <div class="threecolumns">
      <div class="entry-detail" v-for="item in newProduct" :key="item">
        <img :src="item.url" alt="" width="60px" height="60px" />
        <router-link v-if="item.title === '泰式绿咖喱鸡'" :to="{ name: 'chickenstepsRoute' }">
          <h6>{{ item.title }}</h6>
        </router-link>
        <router-link v-if="item.title === '芒果糯米饭'" :to="{ name: 'mangostepsRoute' }">
          <h6>{{ item.title }}</h6>
        </router-link>
        <router-link v-if="item.title === '冬阴功汤'" :to="{ name: 'soupstepsRoute' }">
          <h6>{{ item.title }}</h6>
        </router-link>

        <p>{{ item.descb }}</p>
      </div>
    </div>



</template>
<script setup lang="ts">
import { ref } from 'vue';

const imageUrl = [
  { url: "/src/images/1.jpg" },
  { url: "https://p1.ssl.qhimgs1.com/sdr/400__/t0167d5bf5048d9f34b.jpg" },
  { url: "https://p1.ssl.qhimgs1.com/sdr/400__/t0185b7197301621df1.jpg" },
  { url: "https://p0.ssl.qhimgs1.com/sdr/400__/t01d67121b6ce280e3a.jpg" }];


const newProduct = ref([
  {
    url: "https://p2.ssl.qhimgs1.com/sdr/400__/t01a9a6c37cf774355c.jpg",
    title: '泰式绿咖喱鸡',
    descb: '这是一道经典的泰式美食，以绿咖喱酱、鸡肉等为主要食材，口味浓郁香辣，带有独特的泰式香料风味。'
  },
  {
    url: "https://p0.ssl.qhimgs1.com/sdr/400__/t0124e560452459d89e.jpg",
    title: '芒果糯米饭',
    descb: '泰式甜品的代表之一，将香甜的芒果搭配软糯的糯米饭，再淋上椰浆，口感丰富，甜而不腻。'
  },
  {
    url: "https://p0.ssl.qhimgs1.com/sdr/400__/t032b0abc8c16a1536a.jpg",
    title: '冬阴功汤',
    descb: '泰式酸辣汤的经典之作，以鲜虾、蘑菇、柠檬草等食材熬制而成，酸辣开胃，香气扑鼻。'
  }
]);

</script>


<style>

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
    font-size: 12px;
}

h6 {
    font-size: 16px;
    color: black;
}
</style>
