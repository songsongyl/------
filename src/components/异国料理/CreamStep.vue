<template>
  <div class="container">
  <div>
    <!-- 使用 iframe 嵌入 Bilibili 视频 -->
    <iframe 
       src="https://player.bilibili.com/player.html?bvid=BV19q4y1x7i2&page=1" 
      scrolling="no" 
      frameborder="no" 
      framespacing="0" 
      allowfullscreen="true" 
      width="600" 
      height="350">
    </iframe>
    <h2>法式奶油蘑菇汤|奶香四溢的美味</h2>
    </hr>
    <table class="tbs" v-for="item in nums" :key="item.id">
      <tr>
        <th>{{ item.name }}</th>
        <td>
          {{ item.number }}
        </td>
      </tr>
    </table>
  </div>
    <!-- 使用el-steps组件展示步骤流程，设置最大宽度并根据active的值确定当前激活步骤，完成状态设为成功 -->
    <el-steps style="max-width: 600px" :active="active" finish-status="success">
      <el-step title="Step 1" description="准备蘑菇:
蘑菇洗净，去掉底部根部，切成薄片。洋葱切碎，大蒜切末。"></el-step>
      <el-step title="Step 2" description="炒香蘑菇:
。在大锅中加热黄油，放入洋葱炒至透明，加入大蒜继续翻炒，然后放入蘑菇片，翻炒至蘑菇出水并略微变软。"></el-step>
      <el-step title="Step 3" description="制作汤底:
。撒入面粉，搅拌均匀，使蘑菇和面粉充分融合。逐渐倒入鸡汤，边倒边搅拌，确保没有结块。加入白葡萄酒，煮沸后转小火炖煮15分钟"></el-step>
      <el-step title="Step 4" description=".搅拌打碎:
·用搅拌器将锅内的蘑菇汤打碎至顺滑的浓汤。如果喜欢口感较粗的汤，可以只搅拌一部分，保留部分蘑菇颗粒。"></el-step>
      <el-step title="Step 5" description="加入奶油:
·将浓奶油倒入汤中，搅拌均匀。继续小火加热5分钟，不要煮沸，以免奶油破裂。用盐和胡椒调味。"></el-step>
      <el-step title="Step 6" description=".装饰与上桌:
·将蘑菇汤倒入碗中，撒上切碎的欧芹装饰。可以搭配烤脆的法棍片或面包块一起享用。"></el-step>
    </el-steps>
    <el-button style="margin-top: 12px" @click="next">Next step</el-button>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const active = ref(0)

const nums = reactive([
    {
        id:1,
        name: "蘑菇",
        number:"500克(可混合使用不同种类的蘑菇如白蘑菇、褐蘑菇等"
    },
    {
        id:2,
        name: "黄油",
        number:"50克"
    },

    {
    id:3,
        name: "洋葱",
        number:"1个(切碎)"
    },
  {
      id:5,
        name: "大蒜",
        number:"切碎"
    },
    {
        id:6,
        name: "面粉",
        number:"2汤匙"
    },
    {
        id:7,
        name: "鸡汤",
        number:"500毫升"
    },
    {
        id:8,
        name: "浓奶油",
        number:"200毫升"
    },
    {
        id:9,
        name: "白葡萄酒",
        number:"100毫升"
    },
    {
        id:10,
        name: "盐和胡椒",
        number:"适量"
    },
    {
    id:11,
        name: "欧芹:少许(装饰用)",
        number:"装饰用"
    }
])

const next = () => {
  if (active.value < 5) {
    active.value++
  } else {
    active.value = 0
  }
}
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


