<template>
  <div class="container-fluid p-0">
    <div class="row">
      <div class="col-3">
        <div class="menu-sidebar">
          <div v-for="(item, index) in menuItems" :key="index" :class="{ active: activeIndex === index }"
            @click="setActiveIndex(index)">
            <span :class="{ light: true, 'bg-primary': activeIndex === index }"></span>
            <span>{{ item.title }}</span>
          </div>
        </div>
      </div>
      <div class="col-9">
        <ul class="nacc">
          <li v-for="(content, index) in contents" :key="index" :class="{ active: activeIndex === index }">
            <div>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ content.text }}</p>
               <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ content.text1 }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue';
// 模拟菜单数据
const menuItems = [
  { title: '开始步骤' },
  { title: '中间步骤' },
  { title: '最后步骤' }
];
// 模拟内容数据
const contents = [
  {
    text: '1.准备基础奶油混合:将牛奶和奶油倒入锅中,轻轻加热至温热(约40°C),但不要煮沸,同时，将蛋黄和糖放入一个大碗中，使用打蛋器搅拌至糖完全溶解，且蛋黄变得稍微发白。',
    text1:'2.混合蛋黄与奶液：慢慢地将温热的奶油混合液倒入蛋黄中，边倒边搅拌，防止蛋黄被烫熟。然后将混合液倒回锅中，用中小火加热，不断搅拌，直到混合物变得稍微浓稠，可以覆盖勺背。注意不要让它煮沸，否则会变成蛋花汤。'
  },
  {
    text: `3.冷却并加入香草精：将奶液从火上移开,加入香草精(可选)，然后将其过滤到一个干净的容器中,去除可能的固体颗粒。将混合物冷却至室温后,放入冰箱冷藏至少2小时,让其完全冷却。`,
    text1: `4.搅拌并冷冻:将冷却后的混合物倒入冰淇淋机中,按照冰淇淋机的说明操作进行搅拌，直到冰淇淋达到浓稠的状态。如果没有冰淇淋机，可以将混合物倒入一个容器中，放入冰箱,每30分钟取出搅拌一次,直到冰淇淋变硬且蓬松。
`

  },
  {
    text: `5.冷冻定型:完成搅拌后,将冰淇淋转移到密封容器中,放入冰箱冷冻约4小时或直到完全凝固。`,
    text1: `小贴士：可以根据个人喜好加入其他食材，如果泥、巧克力、坚果等；没有冰淇淋机时，冷冻过程中每隔一段时间搅拌可以避免冰淇淋变成硬块，增加奶油感和细腻度。`
  }
];

// 当前激活的索引
const activeIndex = ref(0);

// 设置激活索引的函数
const setActiveIndex = (index) => {
  activeIndex.value = index;
};
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css?family=Oswald');

/* body {
  width: 1100px;
  position: relative;
  font-family: 'Oswald', sans-serif;
  background: #fff;
  color: #fff;
  font-size: 20px;
} */
.container-fluid {
  width: 1000px;
  margin-top:30px;
}
.menu-sidebar div {
  padding: 15px 20px 15px 40px;
  margin-bottom: 10px;
  color: #fff;
  background: #3ae0ae;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-weight: 700;
  transition: 1s all cubic-bezier(0.075, 0.82, 0.165, 1);
  border: none;
  border-radius: 0.25rem;
}

.menu-sidebar div:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.menu-sidebar div span.light {
  height: 10px;
  width: 10px;
  position: absolute;
  top: 24px;
  left: 15px;
  background-color: #303F9F;
  border-radius: 100%;
  transition: 1s all cubic-bezier(0.075, 0.82, 0.165, 1);
}

.menu-sidebar div.active span.light {
  background-color: #FBC02D;
  left: 0;
  height: 100%;
  width: 3px;
  top: 0;
  border-radius: 0;
}

.menu-sidebar div.active {
  color: #FBC02D;
  padding: 15px 20px 15px 20px;
}

ul.nacc {
  position: relative;
  height: 0px;
  list-style: none;
  margin: 0;
  padding: 0;
  transition: 0.5s all cubic-bezier(0.075, 0.82, 0.165, 1);
}

ul.nacc li {
  opacity: 0;
  transform: translateX(50px);
  position: absolute;
  list-style: none;
  transition: 1s all cubic-bezier(0.075, 0.82, 0.165, 1);
}

ul.nacc li.active {
  transition-delay: 0.3s;
  z-index: 2;
  opacity: 1;
  transform: translateX(0px);
}

ul.nacc li p {
  margin: 0;
  font-size: 20px;
}
</style>
