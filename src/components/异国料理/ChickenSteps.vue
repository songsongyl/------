<template>
  <div class="container">
  <div>
    <!-- 使用 iframe 嵌入 Bilibili 视频 -->
    <iframe 
      src="https://player.bilibili.com/player.html?bvid=BV1Xq4y1S78p&page=1" 
      scrolling="no" 
      frameborder="no" 
      framespacing="0" 
      allowfullscreen="true" 
      width="600" 
      height="350">
    </iframe>
    <h2>泰式椰香咖喱鸡!正宗泰国风味!</h2>
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
      <el-step title="Step 1" description="鸡腿去骨切小块，加入盐、黑胡椒调味备用洋葱、彩椒、番茄、土豆切块备用"></el-step>
      <el-step title="Step 2" description="大蒜切片:香菜洗净切下根备用"></el-step>
      <el-step title="Step 3" description="锅中热油倒入鸡腿肉，炒熟盛出备用，剩下的油爆香大蒜、洋葱、香菜根，放入咖喱酱翻炒出香味(可以放一根小米辣)"></el-step>
      <el-step title="Step 4" description="分别倒入彩椒、番茄翻炒出水分，加入1勺盐，倒入鸡肉，倒入没过食材的水，倒入半碗水淀粉"></el-step>
      <el-step title="Step 5" description="大火煮至浓稠，倒入200ml椰浆，撒上香菜末即可出锅啦~"></el-step>
      <el-step title="Step 6" description="泰式咖喱的香味加上浓浓的椰香，直接把我香迷糊了，鲜嫩多汁的鸡肉，软糯的土豆，真的太好吃了，我最后把汤汁都拌饭了，一点都没浪费!!"></el-step>
    </el-steps>
    <el-button style="margin-top: 12px" @click="next">Next step</el-button>
  </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'

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
        name: "鸡腿",
        number:"2个"
    },
    {
        id:2,
        name: "土豆",
        number:"1个"
    },

    {
    id:3,
        name: "番茄",
        number:"2个(切碎)"
    },
  {
      id:5,
        name: "彩椒",
        number:"2个"
    },
    {
        id:6,
        name: "洋葱",
        number:"半个"
    },
    {
        id:7,
        name: "大蒜",
        number:"5粒"
    },
    {
        id:8,
        name: "香菜",
        number:"1把"
    },
    {
        id:9,
        name: "泰式黄咖喱酱",
        number:"50g"
    },
    {
        id:10,
        name: "椰浆",
        number:"200ml"
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