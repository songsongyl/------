<template>
   <section id="sec2" class="sec">
  <div id="Co_create_works">
    <div class="h2">
      <h2>夏日美味</h2>
    </div>
    <ul class="Co_create_works_box">
      <li v-for="(work, index) in worksList" :key="index">
        <div class="works_box_img"></div>
        <h3>{{ work.title }}</h3>
        <p class="works_box_txt">{{ work.description }}</p>
      </li>
    </ul>
  </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const worksList = ref([
  {
    title: '让味蕾跳舞',
    description: '让味蕾跳舞，冰淇淋来助阵'
  },
  {
    title: '夏日最美丽的魔法',
    description: '冰淇淋，是夏日最美丽的魔法'
  },
  {
    title: '一勺冰淇淋快乐加倍',
    description: '带上一口冰淇淋，带走一份快乐'
  }
]);

</script>

<style scoped>
#Co_create_works {
    width: 100%;
    padding: 50px 0px;
    background-color:#95ddc7;
}

.Co_create_works_box {
    width: 1100px;
    margin: 0 auto;
}

.Co_create_works_box li {
    width: 296px;
    display: inline-block;
    margin: 30px 30px;
    background-color: #fff;
    border-radius: 20px;
    padding: 20px 20px;
}

.h2 h2{
  padding-top: 50px;
  font-size: 50px;
  text-align: center;
  color: #fff;
}

.works_box_img {
    width: 100%;
    height: 296px;
    overflow: hidden;
    /* 隐藏超出容器的部分 */
    text-align: center;
    /* 图片水平居中 */
    position: relative;
}

.Co_create_works_box li:nth-child(1) .works_box_img {
    background: url(../../images/iscream/R-C.jpg) no-repeat;
    background-position: center;
    background-size: cover;
}

.Co_create_works_box li:nth-child(2) .works_box_img {
    background: url('../../images/iscream/true2.jpg') no-repeat;
    background-position: center;
    background-size: cover;
}

.Co_create_works_box li:nth-child(3) .works_box_img {
    background: url('../../images/iscream/true3.jpg') no-repeat;
    background-position: center;
    background-size: cover;
}

.Co_create_works_box h3 {
    font-size: 26px;
    line-height: 40px;
    margin: 10px 0px;
}

.Co_create_works_box li {
    cursor: pointer;
}


.works_box_txt {
    height: 78px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    /* -webkit-line-clamp: 3; */
    overflow: hidden;
    font-size: 14px;
    color: #999;
    line-height: 26px;
}

</style>