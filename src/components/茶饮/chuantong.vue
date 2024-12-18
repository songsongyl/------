<template>
<div class="container1">
        <div class="box1">
            <img src="../../images/茶饮/茶知识🍵_一张图带你了解中国茶的起源与_1_是学姐吖～_来自小红书网页版.jpg" alt="">
            <span>起源与发展</span>
        </div>


        <div class="box1">
            <img src="../../images/茶饮/茶知识🍵_一张图带你了解中国茶的起源与_3_是学姐吖～_来自小红书网页版.jpg" alt="">
            <span>始于神农氏</span>
        </div>


        <div class="box1">
            <img src="../../images/茶饮/茶知识🍵_一张图带你了解中国茶的起源与_4_是学姐吖～_来自小红书网页版.jpg" alt="">
            <span>魏晋南北朝</span>
        </div>
        <div class="box1">
            <img src="../../images/茶饮/茶知识🍵_一张图带你了解中国茶的起源与_5_是学姐吖～_来自小红书网页版.jpg" alt="">
            <span>隋唐</span>
        </div>
        <div class="box1">
            <img src="../../images/茶饮/茶知识🍵_一张图带你了解中国茶的起源与_6_是学姐吖～_来自小红书网页版.jpg" alt="">
            <span>宋元</span>
        </div>
        <div class="box1">
            <img src="../../images/茶饮/茶知识🍵_一张图带你了解中国茶的起源与_7_是学姐吖～_来自小红书网页版.jpg" alt="">
            <span>明清</span>
        </div>
        <div class="box1">
            <img src="../../images/茶饮/茶知识🍵_一张图带你了解中国茶的起源与_8_是学姐吖～_来自小红书网页版.jpg" alt="">
            <span>现代</span>
        </div>

    </div>

	 <div class="shell">
        <input type="radio" name="position">
        <input type="radio" name="position">
        <input type="radio" name="position">
        <input type="radio" name="position" checked>
        <input type="radio" name="position">
        <input type="radio" name="position">
        <input type="radio" name="position">
        <div class="box">
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
        </div>
    </div>

	

</template>
<script setup>
</script>
<style scoped>
   .container1 {
            display: flex;
            width: 100%;
            padding: 4% 2%;
            box-sizing: border-box;
            height: 100vh;
        }


        .box1 {
            flex: 1;
            overflow: hidden;
            transition: 0.5s;
            margin: 0 2%;
            box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
            line-height: 0;
        }

        .box1>img {
            width: 200%;
            height: calc(100% - 10vh);
            object-fit: cover;
            transition: 0.5s;
        }

        .box1>span {
            font-size: 3vh;
            display: block;
            text-align: center;
            height: 5vh;
            line-height: 2.5;
            font-family: tahoma;
            color: #333;
            text-transform: uppercase;
        }


        .box1:hover {
            flex: 1 1 50%;
        }

        .box1:hover>img {
            width: 100%;
            height: 100%;
        }  


		 .shell {
            justify-content: center;
            align-items: center;
            flex-direction: column;
            display: grid;
            grid-template-rows: 500px 200px;
            margin-top: 40px;
        }

        .box {
            /*  将容器放置在第一行，其高度为第一行的高度 */
            grid-row: 1 / 2;
            /*  将容器放置在第一列，其宽度为第一到第八列的宽度 */
            grid-column: 1 / 8;
            width: 100vw;
            height: 570px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            /* 设置 3D 转换，以便于创建立体效果 */
            transform-style: preserve-3d;
            /* 定义立体效果的观察距离 */
            perspective: 800px;
            /* 定义容器内包含的元素数量 */
            --items: 7;
            /* 定义容器内居中显示的元素 */
            --middle: 4;
            /* 定义容器内当前位置的元素 */
            --position: 3;
        }

        div.item {
            position: absolute;
            width: 350px;
            height: 500px;
            background-color: coral;
            /* 定义一个 CSS 变量 --r 的值为 var(--position) - var(--offset) */
            --r: calc(var(--position) - var(--offset));
            /* 定义变量 --abs 的值为 var(--r) * -1 和 var(--r) 中的最大值 */
            --abs: max(calc(var(--r) * -1), var(--r));
            /* 元素的过渡效果为所有属性在 0.25 秒内以线性方式变化 */
            transition: all 0.25s linear;
            /* 旋转-10deg*var(--r)角度,并向x轴负方向平移-330px*var(--r) */
            transform: rotateY(calc(-10deg * var(--r))) translateX(calc(-330px * var(--r)));
            /* 使当前的图片位于最前面 */
            z-index: calc((var(--position) - var(--abs)));
            background-size: cover;
            box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.6);
            border: #b5c5ff 10px solid;
            border-radius: 5px;
        }

        input {
            width: 35px;
            height: 35px;
            margin: 80px;
        }

        .box .item:nth-of-type(1) {
            --offset: 1;
            background-image: url(../../images/茶饮/9.jpg);
        }

        .box .item:nth-of-type(2) {
            --offset: 2;
            background-image: url(../../images/茶饮/10.jpg);
        }

        .box .item:nth-of-type(3) {
            --offset: 3;
            background-image: url(../../images/茶饮/11.jpg);
        }

        .box .item:nth-of-type(4) {
            --offset: 4;
            background-image: url(../../images/茶饮/12.jpg);
        }

        .box .item:nth-of-type(5) {
            --offset: 5;
            background-image: url(../../images/茶饮/13.jpg);
        }

        .box .item:nth-of-type(6) {
            --offset: 6;
            background-image: url(../../images/茶饮/14.jpg);
        }

        .box .item:nth-of-type(7) {
            --offset: 7;
            background-image: url(../../images/茶饮/15.jpg);
        }

        input:nth-of-type(1) {
            grid-column: 1/2;
            grid-row: 2/3;
        }

        input:nth-of-type(2) {
            grid-column: 2/3;
            grid-row: 2/3;
        }

        input:nth-of-type(3) {
            grid-column: 3/4;
            grid-row: 2/3;
        }

        input:nth-of-type(4) {
            grid-column: 4/5;
            grid-row: 2/3;
        }

        input:nth-of-type(5) {
            grid-column: 5/6;
            grid-row: 2/3;
        }

        input:nth-of-type(6) {
            grid-column: 6/7;
            grid-row: 2/3;
        }

        input:nth-of-type(7) {
            grid-column: 7/8;
            grid-row: 2/3;
        }

        /* 用于更新选中的 position */
        input:nth-of-type(1):checked~.box {
            --position: 1;
        }

        input:nth-of-type(2):checked~.box {
            --position: 2;
        }

        input:nth-of-type(3):checked~.box {
            --position: 3;
        }

        input:nth-of-type(4):checked~.box {
            --position: 4;
        }

        input:nth-of-type(5):checked~.box {
            --position: 5;
        }

        input:nth-of-type(6):checked~.box {
            --position: 6;
        }

        input:nth-of-type(7):checked~.box {
            --position: 7;
        }
		    
</style>

