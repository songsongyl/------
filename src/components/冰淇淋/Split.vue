<template>
  <div>
    <header class="hero">
      <h1>Show some picture</h1>
    </header>
    
    <ul class="cards-split" :class="{'transition': isTransition}" @click="toggleTransition">
      <li class="card card-1">
        <img src="../../images/iscream/6.jpg" alt="Card 1" />
        <!-- <div class="content">
          <h1>Card 1 Title</h1>
          <p>Card description</p>
        </div> -->
      </li>
      <li class="card card-2">
        <img src="../../images/iscream/4.jpg" alt="Card 2" />
        <!-- <div class="content">
          <h1>Card 2 Title</h1>
          <p>Card description</p>
        </div> -->
      </li>
      <li class="card card-3">
        <img src="../../images/iscream/1.jpg" alt="Card 3" />
        <!-- <div class="content">
          <h1>Card 3 Title</h1>
          <p>Card description</p>
        </div> -->
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 控制 cards-split 动画的状态
const isTransition = ref(false);

// 切换 transition 状态
const toggleTransition = () => {
    console.log('Card clicked');
  isTransition.value = !isTransition.value;
};
</script>

<style scoped>
*,
*:before,
*:after {
  box-sizing: border-box;
}

html {
  min-height: 100%;
}

body {
  font-size: 14px;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 300;
  margin: 20px;
  height: 2000px;
  background: linear-gradient(to left top, #F5A1D5 0%, #CDD3E9 100%);
}

h1, h2, h3, h4, h5, h6, p {
  font-weight: 300;
  margin: 0;
  padding: 0;
}

header.hero {
  background: rgba(255, 255, 255, 0.6);
  text-align: center;
  /* padding: 20px 0; */
  padding-top: 50px;
  border-bottom: 4px solid rgba(255, 255, 255, 0.6);
  margin: 0 0 20px;
}

header.hero h1 {
  font-size: 3em;
  color: #555;
  margin: 0 0 5px;
}

hr {
  border: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.6);
  padding: 0 0 20px;
}

ul.cards-split {
  width: 660px;
  height: 280px;
  list-style-type: none;
  position: relative;
  margin: 0 auto 20px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.63, 0.15, 0.03, 1.12);
}

ul.cards-split li.title {
  margin: 0 0 20px;
}

ul.cards-split li.title h2 {
  font-weight: 700;
}

ul.cards-split li.card {
  background: #FFF;
  overflow: hidden;
  height: 200px;
  width: 200px;
  border-radius: 10px;
  position: absolute;
  left: 220px;
  box-shadow: 1px 2px 2px 0 #aaa;
  transition: all 0.4s cubic-bezier(0.63, 0.15, 0.03, 1.12);
}

ul.cards-split li.card img {
  max-width: 100%;
  height: auto;
}

ul.cards-split li.card div.content {
  padding: 5px 10px;
}

ul.cards-split li.card.card-1 {
  z-index: 10;
  transform: rotateZ(-2deg);
}

ul.cards-split li.card.card-2 {
  z-index: 9;
  transform: rotateZ(-7deg);
  transition-delay: 0.05s;
}

ul.cards-split li.card.card-3 {
  z-index: 8;
  transform: rotateZ(5deg);
  transition-delay: 0.1s;
}

ul.cards-split.transition li.card {
  transform: rotateZ(0deg);
}

ul.cards-split.transition li.card.card-1 {
  left: 0px;
}

ul.cards-split.transition li.card.card-2 {
  left: 440px;
}

ul.cards-split.transition li.card.card-3 {
  left: 220px;
}
</style>
