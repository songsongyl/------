<template>
<div class="messages">
        <h1>留言板</h1>
      <div class="form"> 
          <input type="text" id="username" placeholder="用户名" v-model="inputName"> 
          <textarea placeholder="留言内容"id="message" v-model="inputMessage"></textarea> 
          <button id="submitBtn" type="button" @click="addMassage">留言</button> 
      </div>
          <div id="messageBoard">
            <div class="message" v-for="(msg, index) in messages.slice().reverse()" :key="index">
                <div class="message-info">
                    <div class="info"> 
                      <img src="../../images/茶饮/2.jpg" alt="头像" width="50" height="50"> 
                      <strong>{{msg.name}}</strong> 
                    </div>
                      <span>发布于:{{msg.time}}</span>
                </div>
                <div class="content"> {{msg.content}} </div>
            </div>
          </div>
</div> 
</template>

<script setup>
import { reactive, ref } from 'vue';


  function nowDate(time) {
    var year = time.getFullYear(); // 年
    var month = (time.getMonth() + 1).toString().padStart(2, '0'); // 月
    var date = time.getDate().toString().padStart(2, '0'); // 日
    var hour = time.getHours().toString().padStart(2, '0'); // 时
    var minute = time.getMinutes().toString().padStart(2, '0'); // 分
    var second = time.getSeconds().toString().padStart(2, '0'); // 秒
    return (
      year + "/" + month + "/" + date + " " + hour + ":" + minute + ":" + second
    )
  }
  // console.log(time);
  // console.log(nowDate(time));

let inputName = ref('');
let inputMessage = ref('');
//const avatarUrl = ref('../images/2.jpg'); // 假设头像URL是固定的
let messages = reactive([
  { name: '鸣乐', content: '茉莉花茶好喝~ ', time: '2024/11/21 08:00:00' },
  { name: '嘻嘻', content: '草莓椰奶露好喝~ ', time: '2024/11/22 08:00:00' }
]);
const addMassage = () => {
  //console.log('1111111111')
  if (inputMessage.value == '') {
          //console.log('222222')
          alert('请输入内容');
            return;
        }
        
        if (inputName.value == '') {
            inputName.value = '匿名';
  }
  var getTime = new Date().getTime(); //获取到当前时间戳
  var dateTime = new Date(getTime); //创建一个日期对象
  messages.push({
    name: inputName.value,content:inputMessage.value,time: nowDate(dateTime)
  })
  //console.log(messages)
  inputName.value = '';
  inputMessage.value = '';
        
        
}
</script>

<style scoped>
/* 将原始CSS样式复制到这里，并根据需要进行调整 */

        .messages {
            margin: 50px;
            width: 1200px;
            padding: 50px 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            background-color: rgb(166, 252, 241);
            border-radius: 40px;
            box-shadow: 0 10px 50px #00000019;
        }

        .form {
            display: flex;
            justify-content: center;
            position: relative;
            flex-direction: column;
            width: 100%;
            padding-bottom: 90px;
        }

        input:focus,
        textarea:focus {
            outline: none;
        }

        input,
        textarea {
            border: none;
            color: #000;
            margin-bottom: 40px;
            font: 900 60px '';
            border-radius: 10px;
            padding: 30px;
        }

        #username {
            height: 90px;
        }

        #message {
            height: 200px;
        }

        .messages h1 {
            width: 100%;
            text-align: left;
            margin-bottom: 70px;
            font-size: 140px;
            background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            letter-spacing: 10px;
        }

        #submitBtn {
            position: absolute;
            right: 0;
            bottom: 0;
            background-image: linear-gradient(90deg, #e0c3fc 0%, #8ec5fc 100%);
            border: none;
            font-size: 45px;
            letter-spacing: 5px;
            width: 250px;
            height: 80px;
            border-radius: 50PX;
        }

        #messageBoard {
            width: 100%;
            text-align: left;
        }

        @keyframes messageFadeIn {
            to {
                opacity: 1;
            }
        }

        .message {
            width: 100%;
            margin: 10px;
            padding: 10px;
            opacity: 0;
            animation: messageFadeIn 0.5s ease forwards;
            background-image: linear-gradient(90deg, #8ec5fc 0%, #e0c3fc 100%);
            background-color: #fff;
            margin: 70px 0;
            border-radius: 10px;
            box-shadow: 0 10px 20px #00000026;
            text-shadow: 0px 0px 20px #ffffff;
        }

        .message-info {
            height: 100px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 36px;
            position: relative;
        }

        .info {
            transform: translateY(-30px);
        }

        .info img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            border: 10px #fff solid;
        }

        strong {
            position: absolute;
            width: 800px;
            letter-spacing: 3px;
            top: 70px;
            left: 170px;
        }

        .message-info span {
            position: absolute;
            top: 10px;
            right: 10px;
        }

        .content {
            font-size: 44px;
            margin: 30px;
            width: 95%;
        }
</style>