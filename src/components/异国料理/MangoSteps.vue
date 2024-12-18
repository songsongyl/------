<template>
  <div class="container">
  <div>
    <!-- 使用 iframe 嵌入 Bilibili 视频 -->
    <iframe 
      src="https://player.bilibili.com/player.html?bvid=BV1Ni4y1K7Z8&page=1" 
      scrolling="no" 
      frameborder="no" 
      framespacing="0" 
      allowfullscreen="true" 
      width="600" 
      height="350">
    </iframe>
    <h2>香甜软糯糯！超好吃的泰式芒果糯米饭～</h2>
     <table class="tbs" v-for="item in nums" :key="item.id">
      <tr>
        <th>{{ item.name }}</th>
        <td>
          {{ item.number }}
        </td>
      </tr>
    </table>
    <!-- 使用el-steps组件展示步骤流程，设置最大宽度并根据active的值确定当前激活步骤，完成状态设为成功 -->
    <el-steps style="max-width: 600px" :active="active" finish-status="success">
      <el-step title="Step 1" description="糯米，反复搓洗到清澈，浸泡至少4小时"></el-step>
      <el-step title="Step 2" description="蒸糯米。铺一层纱布，一层斑叶增香。水开后大火蒸40分钟，蒸出来的糯米粒粒分明"></el-step>
      <el-step title="Step 3" description="300ml椰浆+15g白糖+2g盐+斑叶，小火煮到微微沸腾。倒入糯米中，使糯米被椰浆包裹，搅拌均匀，浸泡15分钟"></el-step>
      <el-step title="Step 4" description="准备芒果，选择成熟度高、果肉饱满的芒果，去皮去核，切成小块备用"></el-step>
      <el-step title="Step 5" description="调制淋的椰浆。100ml椰浆+15g白糖+1g盐+斑斓叶1片+玉米淀粉5g勾芡，小火慢煮至微微沸腾冒泡，微稠的状态"></el-step>
      <el-step title="Step 6" description="摆盘，淋上椰浆，撒上炸绿豆仁就OK啦!美美饱餐一顿!萨瓦迪卡~"></el-step>
    </el-steps>
    <el-button style="margin-top: 12px" @click="next">Next step</el-button>
  </div>
  </div>
</template>

<script lang="ts" setup>
import { ref , reactive} from 'vue'

const active = ref(0)

const next = () => {
  if (active.value < 5) {
    active.value++
  } else {
    active.value = 0
  }
}

const nums = reactive([
    {
        id:1,
        name: "糯米",
        number:"300克(推荐泰国糯米)"
    },
    {
        id:2,
        name: "成熟芒果",
        number:"2-3个（根据大小调整）"
    },

    {
    id:3,
        name: "椰奶",
        number:"400ml"
    },
  {
      id:5,
        name: "细砂糖",
        number:"60克（可根据口味调整）"
    },
    {
        id:6,
        name: "盐",
        number:"1/4小勺"
    },
    {
        id:7,
        name: "椰丝（可选）",
        number:"适量，用于装饰"
    },
    {
        id:8,
        name: "斑叶",
        number:"5-7片"
    },
    {
        id:9,
        name: "玉米淀粉",
        number:"5g"
    },
  
])
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.video-iframe {
  margin: 20px 0;
}

.steps {
  max-width: 900px;
  width: 100%;
  margin: 20px 0;
}
.tbs {
  width: 100%; /* 使表格宽度占满父容器 */
  border-collapse: collapse; /* 合并边框 */
}

.tbs th, .tbs td {
  border: 1px solid #ddd; /* 添加边框 */
  padding: 8px; /* 内边距 */
  text-align: left; /* 文本居中 */
}

.tbs th {
  background-color: #f2f2f2; /* 背景颜色 */
  font-weight: bold; /* 加粗字体 */
}

.tbs tr:first-child th {
  border-bottom: 2px solid #ddd; /* 第一行下方加粗边框 */
}

.tbs tr:last-child td {
  border-top: 2px solid #ddd; /* 最后一行上方加粗边框 */
}
</style>