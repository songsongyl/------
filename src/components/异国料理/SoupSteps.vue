<template>
  <div class="container">
    <!-- 使用 iframe 嵌入 Bilibili 视频 -->
    <iframe 
      src="https://player.bilibili.com/player.html?bvid=BV1QP4y1m7BS&page=1" 
      scrolling="no"  
      frameborder="no" 
      framespacing="0" 
      allowfullscreen="true" 
      width="600" 
      height="350"
      class="video-iframe">
    </iframe>
    <h2>懒人版冬阴功汤，简单几步，一学就会！</h2>
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
      <el-step title="Step 1" description="材料准备：冬阴功汤料包(推荐购买泰国本土品牌，味道更正宗)
鱼露:30ml
香茅:2根
南姜:4~5片
柠檬叶:7~8片
小米辣:3个(切碎)
青柠:1颗(切片和挤汁)
海鲜菇、草菇、莴笋适量
豆腐:1块
罗氏虾:7~8只
白贝
其他海鲜(根据个人喜好添加)"></el-step>
      <el-step title="Step 2" description="爆香罗氏虾:热锅倒油，将虾煎至金黄，爆炒至出香味"></el-step>
      <el-step title="Step 3" description="加入香料:爆炒香茅、南姜、小米辣，炒出香味，加入500ml左右的水，倒入冬阴功调料包，熬煮开后加香茅叶"></el-step>
      <el-step title="Step 4" description="煮沸后加料:煮沸后加入海鲜菇和草菇等配料，接着放入虾和其他海鲜，继续煮至熟透。"></el-step>
      <el-step title="Step 5" description="调味:最后加入鱼露和青柠汁，轻轻搅拌后即可关火。注意不要煮太久，以免影响口感。"></el-step>
      <el-step title="Step 6" description="小贴士:
    1、青柠汁要在最后加入，以避免汤底发苦。
    2、可以根据个人口味调整辣度和酸度。
    3、冬阴功汤搭配泰国小泡面，味道更佳!"></el-step>
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
        name: "大虾",
        number:"200克（去壳去肠线）"
    },
    {
        id:2,
        name: "草菇：150克（切片）",
        number:"50克"
    },

    {
    id:3,
        name: "青柠叶",
        number:"3-4片"
    },
  {
      id:5,
        name: "香茅",
        number:"2根（拍扁后切段）"
    },
    {
        id:6,
        name: "椰奶",
        number:"200毫升（可选，用于增加浓郁度）"
    },
    {
        id:7,
        name: "鱼露",
        number:"2大勺"
    },
    {
        id:8,
        name: "红辣椒",
        number:"1-2个（根据口味调整，切片）"
    },
    {
        id:9,
        name: "姜黄粉",
        number:"1/2小勺（可选，用于增加颜色和香味）"
    },
    {
        id:10,
        name: "蒜末",
        number:"2瓣（切碎）"
    },
    {
    id:11,
        name: "香茅油（可选）：几滴",
        number:"（可选）几滴"
    }
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