<!-- src/components/Header.vue -->
<template>
  <header>
    <nav>
      <ul class="menu">
        <li><a href="#/icecream/#sec1" @click="scrollToSection('sec1')" class="tab">简单介绍</a></li>
        <li><a href="#/icecream/#sec2" @click="scrollToSection('sec2')" class="tab">美味展示</a></li>
        <li><a href="#/icecream/#sec3" @click="scrollToSection('sec3')" class="tab">制作方法</a></li>
        <li><router-link to="/home" class="tab">首页</router-link></li>
      </ul>
      <!-- indicator 是下方的指示条容器，indicator-line 是指示条本身，用来显示菜单项的选中状态。 -->
      <div class="indicator">
        <div class="indicator-line"></div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const activeTab = ref('');
//点击导航栏的菜单项时，页面会平滑滚动到对应的部分（通过 scrollToSection 方法）。sectionId 是传递给函数的目标部分的 ID，offsetTop - 80 让滚动位置略低于顶部，以避免固定头部遮挡内容。
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 80, // Offset for fixed header
      behavior: 'smooth'
    });
  }
};



//3. 动态指示器的更新：当滚动到某个部分时，指示条的宽度和位置会变化，指示当前活跃的菜单项。通过 setLine 方法来动态更新指示条的宽度和位置。
const setLine = (tab) => {
  const tabWidth = tab.offsetWidth;
  const tabPos = tab.getBoundingClientRect().left;
  const line = document.querySelector('.indicator-line');
  line.style.width = `${tabWidth}px`;
  line.style.left = `${tabPos}px`;
};
//当页面滚动到某个部分时，对应的菜单项会添加 active-tab 类，改变文字颜色;通过 window.addEventListener('scroll') 监听滚动事件，动态检测页面的滚动位置，判断哪些部分在视口内，进而高亮相应的菜单项。
window.addEventListener('scroll', () => {
  document.querySelectorAll('.tab').forEach(tab => {
    const section = document.querySelector(tab.getAttribute('section[[id^="sec"]]'));
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      tab.classList.add('active-tab');
      setLine(tab);
    } else {
      tab.classList.remove('active-tab');
    }
  });
});
</script>

<style scoped>
/* Increase the height of the header */
header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  /* margin-bottom: 300px; */
  background: #3ae0ae;
  z-index: 11;
  height: 80px;
  /* Increased height */
  padding: 10px 0;
  /* Added padding for spacing */
}

.menu {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0;
  list-style: none;
  text-align: center;
  width: auto;
  /* Ensure the menu does not stretch full width */
}


.menu li {
  margin: 0 30px;
}

.tab {
  padding: 12px 24px;
  color: #FFFFFF;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: .025em;
  text-decoration: none;
  display: inline-block;
}

.active-tab {
  color: #FDE3A7;
}

.indicator {
  position: relative;
  width: 100%;
  height: 3px;
  background: #53f8c7;
}

.indicator-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 100%;
  background: #FDE3A7;
  transition:
    width ease .3s,
    left cubic-bezier(.4, .95, .5, 1.5) .5s;
}
</style>
