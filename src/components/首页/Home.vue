<template>
  <div class="mouseimg" ref="imgRef"></div>
  <div class="shell">
    <div class="image" >
      <div class="card-wrap">
        <router-link to="/icecream">
          <div class="card">
            <div class="foodbg">
              <img src="../../images/首页/背景图3.jpg" alt="" />
            </div>

            <div class="food">
              <img src="../../images/首页/冰淇淋.png" alt="" class="ice-cream" />
            </div>
            <div class="card-content">
              <h1>中国传统美食</h1>
              <p>美味加倍</p>
            </div>
          </div>
          </router-link>
      </div>
    </div>

    <div class="heading">
      <h1>冰淇淋</h1>
    </div>
    <div class="text">
      <div>
        冰淇淋，亦称冰激凌，雪糕，而口感较柔软绵密者又称霜淇淋（soft
        ice），由圆锥形饼干所盛装者则称蛋卷冰淇淋或甜筒（ice cream
        cone），是一种冷冻的冰品、甜品。
      </div>
    </div>

    <div class="image" >
      <div class="card-wrap">
        <router-link to="/tea/chuantong">
        <div class="card">
          <div class="foodbg">
            <img src="../../images/首页/背景图1.jpg" alt="" />
          </div>
          <div class="food">
            <img src="../../images/首页/奶茶.png" alt="" />
          </div>
          <div class="card-content">
            <h1>中国传统美食</h1>
            <p>美味加倍</p>
          </div>
        </div>
        </router-link>
      </div>
    </div>
    <div class="heading">
      <h1>茶饮</h1>
    </div>
    <div class="text">
      <div>
        茶饮料是指以茶叶或茶叶的水提取液、浓缩液、茶粉或直接以茶的鲜叶为原料添加或不添加食品原辅料和食品添加剂，经加工制成的液体饮料。
      </div>
    </div>

    <div class="image" >
      <div class="card-wrap">
        <router-link to="/baking">
        <div class="card">
          <div class="foodbg">
            <img src="../../images/首页/背景图4.jpg" alt="" />
          </div>
          <div class="food">
            <img src="../../images/首页/烘焙.png" alt="" />
          </div>
          <div class="card-content">
            <h1>中国传统美食</h1>
            <p>美味加倍</p>
          </div>
        </div>
        </router-link>
      </div>
    </div>
    <div class="heading">
      <h1>烘焙</h1>
    </div>
    <div class="text">
      <div>
        烘焙（baking），又称为烘烤、焙烤，是指在物料燃点之下通过干热的方式使物料脱水变干变硬的过程。烘焙是面包、蛋糕类产品制作不可缺少的步骤，通过烘焙后淀粉产生糊化、蛋白质变性等一系列化学变化后，面包、蛋糕达到熟化的目的。也能使食物的口感发生变化。
      </div>
    </div>

    <div class="image" >
      <div class="card-wrap">
        <router-link to="/yiguoliaoli">
        <div class="card">
          <div class="foodbg">
            <img src="../../images/首页/背景图2.jpg" alt="" />
          </div>
          <div class="food">
            <img src="../../images/首页/异国料理.png" alt="" />
          </div>
          <div class="card-content">
            <h1>中国传统美食</h1>
            <p>美味加倍</p>
          </div>
        </div>
        </router-link>
      </div>
    </div>
    <div class="heading">
      <h1>异国料理</h1>
    </div>
    <div class="text">
      <div>
        街边摊位飘出香气的泰式炒面、甜蜜黏人的摩洛哥果仁蜜饼、阿根廷家庭必备的焦糖牛奶酱、酸甜开胃的越南春卷、带着独特香料风味的印度奶昔等
      </div>
    </div>

    <div class="image" >
      <div class="card-wrap">
        <router-link to="/food">
        <div class="card">
          <div class="foodbg">
            <img src="../../images/首页/背景图5.jpg" alt="" />
          </div>
          <div class="food">
            <img src="../../images/首页/地方美食.png" alt="" />
          </div>
          <div class="card-content">
            <h1>中国传统美食</h1>
            <p>美味加倍</p>
          </div>
        </div>
        </router-link>
      </div>
    </div>
    <div class="heading">
      <h1>地域美食</h1>
    </div>
    <div class="text">
      <div>
        地方美食是地域文化的重要组成部分，它承载着当地的历史记忆和文化特色。
        在中国这片广袤的土地上，每个地方都有着自己独特的美食传统。
        这些美食传统不仅反映了当地的物产和气候条件，更见证了历史的变迁和文化的交融。
      </div>
    </div>
  </div>
  <div class="footer">
    <div class="wrapper">
      <div class="right">
        <dl>
          <dt>美食分享宣传网站</dt>
          <dd><a href="#">关于</a></dd>
          <dd><a href="#">管理团队</a></dd>
          <dd><a href="#">开发人员</a></dd>
          <dd><a href="#">用户服务</a></dd>
          <dd><a href="#">帮助</a></dd>
        </dl>

        <dl>
          <dt>合作伙伴</dt>
          <dd><a href="#">合作平台</a></dd>
          <dd><a href="#">合作单位</a></dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const imgRef = ref(
  document.querySelector(".mouseimg") as HTMLDivElement | null
);

const deg = ref(0); // 旋转角度
const imgX = ref(0); // 图片相对于鼠标的x轴距离
const imgY = ref(0); // 图片相对于鼠标的y轴距离
const imgL = ref(0); // 图片的x轴位置
const imgT = ref(0); // 图片的y轴位置
const yRotation = ref(0); // 图片翻转角度
let interval: number | undefined = undefined; // 定时器ID
let index = 0; // 计数器

// 鼠标移动事件
const handleMouseMove = (event: MouseEvent) => {
  if (!imgRef.value) return;
  const imgEl = imgRef.value;

  imgX.value = event.x - imgEl.offsetLeft - imgEl.clientWidth / 2;
  imgY.value = event.y - imgEl.offsetTop - imgEl.clientHeight / 2;
  deg.value = (360 * Math.atan2(imgY.value, imgX.value)) / (2 * Math.PI);
  index = 0;

  if (imgEl.offsetLeft < event.clientX) {
    yRotation.value = -180;
  } else {
    yRotation.value = 0;
  }
};

// 动画逻辑
const startAnimation = () => {
  interval = window.setInterval(() => {
    if (index < 50) {
      imgL.value += imgX.value / 50;
      imgT.value += imgY.value / 50;
    }
    if (imgRef.value) {
      imgRef.value.style.transform = `rotateZ(${deg.value}deg) rotateY(${yRotation.value}deg)`;
      imgRef.value.style.left = `${imgL.value}px`;
      imgRef.value.style.top = `${imgT.value}px`;
    }
    index++;
  }, 10);
};

// 组件挂载和卸载逻辑
onMounted(() => {
  imgRef.value = document.querySelector(".mouseimg") as HTMLDivElement;
  if (!imgRef.value) {
    console.error("Element with class .mouseimg not found!");
    return;
  }
  // 添加鼠标事件监听
  window.addEventListener("mousemove", handleMouseMove);

  // 设置图片的 pointer-events 为 none 避免鼠标事件被图片拦截
  if (imgRef.value) {
    imgRef.value.style.pointerEvents = "none";
  }

  // 启动动画
  startAnimation();
});

onBeforeUnmount(() => {
  // 移除鼠标事件监听
  window.removeEventListener("mousemove", handleMouseMove);
  if (interval) {
    clearInterval(interval);
  }
});
import { useRouter } from "vue-router";

const router = useRouter();
function ice_cream() {
  router.push("/test");
}
</script>

<style scoped>
* {
  cursor: url("../../images/首页/卡通.gif"), auto;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

/* gif桌宠跟随效果 */
.mouseimg {
  z-index: 99;
  width: 50px;
  height: 50px;
  position: absolute;
  background-image: url("../../images/首页/绵羊.gif");
  background-size: cover;
}
/* card */

.card-wrap {
  width: 100%;
  height: 90vh;
  background: url(../../img/tea8.jpg) no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card {
  width: 440px;
  height: 200px;
  position: relative;
  background-color: #000;
}
.foodbg {
  width: 440px;
  height: 200px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 0px 30px 20px rgba(255, 255, 255, 0.1);
  transform-origin: bottom;
  transition: 1s;
}
.foodbg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.food {
  display: flex;
  width: 440px;
  height: 200px;
  position: absolute;
  bottom: 0px;
  transform-origin: bottom;
  transition: 2s;
}
.food img {
  
  height: 100%;
}
.card-content {
  width: 440px;
  padding: 10px;
  color: #fff;
  position: absolute;
  bottom: -50px;
  opacity: 0;
  transition: 2s;
}
.card-content h1 {
  font-weight: 200;
}
.card-content p {
  font-weight: 200;
  padding-top: 10px;
  font-size: 14px;
}

.card:hover .foodbg {
  transform: perspective(1000px) rotateX(30deg) skewX(-20deg);
}

.card:hover .food {
  transform: scale(1.3);
}
.card:hover .card-content {
  opacity: 1;
  transform: translateY(120px);
}
.ice-cream {
  cursor: url("../../images/首页/冰淇淋2.png"), auto;
}
/* 主体 */
.shell {
  height: 100vh;
  overflow-x: hidden;
  perspective: 3px;
}
.shell > div {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  letter-spacing: 2px;
}
.image {
  transform: translateZ(-1px) scale(1.6);
  background-size: cover;
  background-color: #000;
  height: 100vh;
  z-index: -1;
}
.text {
  height: 50vh;
  background-color: #fff;
}
.text h1 {
  color: #000;
}
.heading {
  z-index: -1;
  transform: translateY(-30vh) translateZ(1px);
  color: #fff;
  font-size: 30px;
}
/* footer */
/* footer */
.wrapper {
  margin: 0 auto;
  width: 1200px;
}
.footer {
  padding-top: 60px;
  height: 273px;
  background-color: #f2f1f1;
}

.footer .wrapper {
  display: flex;
  justify-content: space-between;
}

.footer .right {
  display: flex;
}

.footer .right dl {
  margin-left: 130px;
}

.footer .right dt {
  margin-bottom: 12px;
  font-size: 16px;
  line-height: 23px;
}

.footer .right a {
  font-size: 14px;
  color: #666;
  line-height: 24px;
}
</style>
