<template>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="泰式料理" name="second">
            <ThailandVue /> 
        </el-tab-pane>
        <el-tab-pane label="法式料理" name="first">
            <FranceVue /> 
        </el-tab-pane>
        <el-tab-pane label="日式料理" name="third">
            <JapanVue />
        </el-tab-pane>
    </el-tabs> 
</template>
 <script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import ThailandVue from './Thailand.vue'
import FranceVue from './France.vue'
import JapanVue from './Japan.vue'



const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
}
</script> 

<style scoped>
.demo-tabs>.el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}


.demo-tabs>.el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}
</style>