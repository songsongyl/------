<template>
    <!-- <header class="hero">
      <h1>Show some picture</h1>
    </header> -->
  <div class="container">
    <div class="box">
      <img src="../../images/iscream/classify2.webp" alt="Image 1" />
      <span>原味冰淇淋</span>
    </div>
    <div class="box">
      <img src="../../images/iscream/classify1.webp" alt="Image 2" />
      <span>芒果冰淇淋</span>
    </div>
    <div class="box">
      <img src="../../images/iscream/classify3.webp" alt="Image 3" />
      <span>巧克力冰淇淋</span>
    </div>
    <div class="box">
      <img src="../../images/iscream/classify4.webp" alt="Image 4" />
      <span>奥利奥冰淇淋</span>
    </div>
    <div class="box">
      <img src="../../images/iscream/classify5.webp" alt="Image 4" />
      <span>蓝莓冰淇淋</span>
    </div>
  </div>
</template>

<script setup>
// Vue 3 组合式 API
import { ref } from 'vue';

// 你可以在这里加入数据、方法等逻辑
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  padding: 4% 2%;
  box-sizing: border-box;
  height: 100vh;
}
header.hero {
  background: rgba(255, 255, 255, 0.6);
  text-align: center;
  padding-top: 50px;
  border-bottom: 4px solid rgba(255, 255, 255, 0.6);
  margin: 0 0 20px;
}

header.hero h1 {
  font-size: 3em;
  color: #555;
  margin: 0 0 5px;
}
.box {
  flex: 1;
  overflow: hidden;
  transition: 0.5s;
  margin: 0 2%;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
  line-height: 0;
}

.box img {
  width: 200%;
  height: calc(100% - 10vh);
  object-fit: cover;
  transition: 0.5s;
}

.box span {
  font-size: 3.8vh;
  display: block;
  text-align: center;
  height: 10vh;
  line-height: 2.6;
}

.box:hover {
  flex: 1 1 50%;
}

.box:hover img {
  width: 100%;
  height: 100%;
}
</style>
