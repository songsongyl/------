<template>
  <div class="banner-container">
    <van-swipe :autoplay="3000" :interval="500" show-indicators>
      <van-swipe-item>
        <img src="../../images/iscream/bg1.jpg" alt="Image 1" class="banner-image" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../images/iscream/bg2.webp" alt="Image 2" class="banner-image" />
      </van-swipe-item>
      <!-- <van-swipe-item>
        <img src="../assets/iscream/bg1.png" alt="Image 3" class="banner-image" />
      </van-swipe-item> -->
    </van-swipe>
  </div>
</template>

<script setup>
// import { Swipe, SwipeItem } from 'vant';
</script>

<style scoped>
.banner-container {
     margin:0 auto;
    /* margin-top: 42px; */
    margin-top:100px;
  width: 100%;
 
  height: 500px;  /* 增加容器高度来适应更大的图片 */
  overflow: hidden;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 使图片在容器中保持比例 */
}
</style>
