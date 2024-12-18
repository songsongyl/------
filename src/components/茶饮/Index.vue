<template>
    <a-layout class="layout">
        <a-layout-header>
            <div class="logo" />
            <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
                <a-menu-item key="1"><router-link to="/home">首页</router-link></a-menu-item>
                <a-menu-item key="2"><router-link to="/tea/chuantong">茶饮</router-link></a-menu-item>
                <a-menu-item key="3"><router-link to="/food">地域美食</router-link></a-menu-item>
                <a-menu-item key="4"><router-link to="/baking">烘焙</router-link></a-menu-item>
                <a-menu-item key="5"><router-link to="/yiguoliaoli">异国料理</router-link></a-menu-item>
                <a-menu-item key="6"><router-link to="/icecream">冰淇淋</router-link></a-menu-item>
            </a-menu>
        </a-layout-header>
        <a-layout-content style="padding: 0">
            <lunbotu/>
            <!-- 导航区 -->
             <div class="nav">
                <router-link to="/tea/chuantong" class="custom-btn btn-4"><span>传统茶饮</span></router-link>
                <router-link to="/tea/xiandai" class="custom-btn btn-4"><span>现代茶饮</span></router-link>
                <router-link to="/tea/talkshare" class="custom-btn btn-4"><span>交流分享</span></router-link>
             </div>
               
             <!-- 展示区 -->
              <div class="main-content">
                <router-view></router-view>
              </div>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
            茶饮 ©2024 美食分享
        </a-layout-footer>
    </a-layout>
</template>
<script setup>
import { ref } from 'vue';
import lunbotu from './lunbotu.vue';
import { RouterView, RouterLink } from 'vue-router';
const selectedKeys = ref(['2']);
</script>
<style scoped>
a {
  text-decoration: none;
}
.layout {
    width: 100%;
    height: 100%;
}
.site-layout-content {
    min-height: 280px;
    padding: 24px;
    background: #fff;
}

#components-layout-demo-top .logo {
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top .logo {
    float: right;
    margin: 16px 0 16px 24px;
}

[data-theme='dark'] .site-layout-content {
    background: #141414;
}
.ant-layout-header {
    background-color: rgb(166, 252, 241);
}
.ant-menu-dark {
    background-color: rgb(166, 252, 241);
    color: black;
    font-size: 16px;
}
.ant-layout-footer {
    background-color: rgb(166, 252, 241);
}
.nav {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin: 0 200px;
}
         .custom-btn {
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
    7px 7px 20px 0px rgba(0, 0, 0, .1),
    4px 4px 5px 0px rgba(0, 0, 0, .1);
  outline: none;
  text-decoration: none; /* 去掉默认的链接下划线 */
}

.btn-4 {
  background-color: #4dccc6;
  background-image: linear-gradient(315deg, #4dccc6 0%, #96e4df 74%);
  line-height: 42px;
  padding: 0;
  border: none;
}

.btn-4:hover {
  background-color: #89d8d3;
  background-image: linear-gradient(315deg, #89d8d3 0%, #03c8a8 74%);
}

.btn-4 span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  color: black;
  font-size: 16px;
}

.btn-4:before,
.btn-4:after {
  position: absolute;
  content: "";
  right: 0;
  top: 0;
  box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, .9),
    -4px -4px 6px 0 rgba(116, 125, 136, .2),
    inset -4px -4px 6px 0 rgba(255, 255, 255, .9),
    inset 4px 4px 6px 0 rgba(116, 125, 136, .3);
  transition: all 0.3s ease;
}

.btn-4:before {
  height: 0%;
  width: .1px;
}

.btn-4:after {
  width: 0%;
  height: .1px;
}

.btn-4:hover:before {
  height: 100%;
}

.btn-4:hover:after {
  width: 100%;
}

.btn-4 span:before,
.btn-4 span:after {
  position: absolute;
  content: "";
  left: 0;
  bottom: 0;
  box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, .9),
    -4px -4px 6px 0 rgba(116, 125, 136, .2),
    inset -4px -4px 6px 0 rgba(255, 255, 255, .9),
    inset 4px 4px 6px 0 rgba(116, 125, 136, .3);
  transition: all 0.3s ease;
}

.btn-4 span:before {
  width: .1px;
  height: 0%;
}

.btn-4 span:after {
  width: 0%;
  height: .1px;
}

.btn-4 span:hover:before {
  height: 100%;
}

.btn-4 span:hover:after {
  width: 100%;
}
</style>