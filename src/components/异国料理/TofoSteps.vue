<template>
  <div class="container">
    <!-- 使用 iframe 嵌入 Bilibili 视频 -->
    <iframe 
      src="https://player.bilibili.com/player.html?bvid=BV1cD4y1Z7MK&page=1"
      scrolling="no"  
      frameborder="no" 
      framespacing="0" 
      allowfullscreen="true" 
      width="600" 
      height="350"
      class="video-iframe">
    </iframe>
    <h2>需要的食材很少 但是超好吃 还可以做盖饭～</h2>
     <table class="tbs" v-for="item in nums" :key="item.id">
      <tr>
        <th>{{ item.name }}</th>
        <td>
          {{ item.number }}
        </td>
      </tr>
    </table>
    <!-- 使用el-steps组件展示步骤流程，设置最大宽度并根据active的值确定当前激活步骤，完成状态设为成功 -->
    <el-steps class="steps" :active="active" finish-status="success">
      <el-step title="Step 1" description="准备老豆腐一盒   照烧料汁：生抽+耗油+水+白砂糖+味霖或清酒 米酒都可以 搅拌均匀备用."></el-step>
      <el-step title="Step 2" description="老豆腐控水切块"></el-step>
      <el-step title="Step 3" description="少油不粘锅煎 tip：锅里那么多不是油 是豆腐的水汽 煎一会儿就没了。"></el-step>
      <el-step title="Step 4" description="双面煎 煎至金黄。"></el-step>
      <el-step title="Step 5" description="中火 倒入之前调制好的料汁  收汁即可装盘。"></el-step>
      <el-step title="Step 6" description="摆好盘后 可以撒白芝麻➕海苔碎➕海苔粉 我图省事撒的饭团料 鲣鱼芝麻海苔  你有什么都可以撒 只要自己喜欢 ～"></el-step>
    </el-steps>
    <el-button style="margin-top: 12px" @click="next">Next step</el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref ,reactive} from 'vue'

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
        name: "嫩豆腐",
        number:"1块（约300克），切成厚片"
    },
    {
        id:2,
        name: "葱",
        number:"1根，切碎（用于装饰）"
    },

    {
    id:3,
        name: "生抽（酱油)",
        number:"3大勺"
    },
  {
      id:5,
        name: "日本清酒（或米酒）",
        number:"2大勺"
    },
    {
        id:6,
        name: "味醂",
        number:"2大勺"
    },
    {
        id:7,
        name: "糖：1大勺",
        number:"1大勺"
    },
    {
        id:8,
        name: "蒜末",
        number:"1小勺"
    },
    {
        id:9,
        name: "姜末",
        number:"1小勺"
    },
    {
        id:10,
        name: "白芝麻➕海苔碎➕海苔粉 ",
        number:"适量（装饰）"
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
  max-width: 600px;
  width: 100%;
  margin: 20px 0;
}.tbs {
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