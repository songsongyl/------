<template>
  <div class="main">
            <main>
                <article>
                    <div class="multicol">
                        <h1>美食——</h1>
                        <h2>新中式茶饮</h2>
                        <p>
                            新中式茶饮是一种将传统茶文化与现代消费理念相结合的新型饮品形式。
这种茶饮不仅保留了传统茶的精髓，还通过现代化的创新手段，使其更符合当代消费者的需求。我们称之为✨“古茶新作”。奶茶放在茶饮行业而不是饮料部分，茶在我们的文化里具有重要的地位，但是随着奶奶各种加入，茶的位置隐退，但是仍旧是茶饮料，仍旧是以茶为基底，是吃茶的创新吃法；
                        </p>
                    </div>
                    <img src="../images/2024奶茶热销榜_1_没有什么比美食更让人解忧_来自小红书网页版.jpg" alt="">
                    <div class="multicol">
                        <p>
✨新中式茶饮的新颖之处<br>

1、新在“新的饮茶方式”（以堂食为主，使用现新颖的茶具）<br>
在新式茶馆中，使用的茶器与传统茶馆有所不同。手冲、煮茶、冷萃和调饮各有对应的茶具。不同的季节，如春、夏、秋、冬，会有不同的茶叶与茶具配合，以充分展现茶的香味、色泽和韵调。也可以吸引茶客自发拍照，打卡。<br>

2、新在“新的客户体验”（每款茶饮都有详细的介绍，门店氛围感更强）<br>
新中式茶馆的消费人群偏年轻群体，其实并没有那么懂茶，为了使年轻人更好地了解和喜欢茶，新中式茶馆会采用了一些巧妙的设计。制作过程全程可视化，现点现泡，以方便顾客观赏。此外，每一杯茶的出品都附有详细的介绍卡片，介绍茶叶的原料、产地、品种特点和香气等信息。<br>

3、新在“产品理念”（以茶为核心：使用“茶+N”的理念创新与延伸）<br>
茶+水：纯茶的新喝法：手冲纯茶/冷萃茶冷泡茶/现萃茶<br>
茶+奶：现泡茶与奶的新鲜融合<br>
茶+酒：创意特调，双重享受<br>
茶+果：果汁的甜美，又增添了茶的清香<br>
茶+糖水：甜蜜与茶香的结合<br>

4、新在“新在消费场景”(传统茶馆与现代元素结合)<br>
老茶馆玩新时尚：将传统茶馆与现代元素结合，既保留了茶馆的文化底蕴，又融入了时尚潮流，吸引年轻消费者。
新中式茶饮店不仅是喝茶的地方，更是社交、休闲、商务、工作的好去处。<br>
</p>
                    </div>
                    
                </article>
            </main>
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

<script>

</script>

<style scoped>
.main {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            margin-top: 100px;
        }

        .main h2 {
            font-size: 50px;
            margin-bottom: 40px;
        }

        .main span {
            padding: 0 100px;
            font-size: 30px;
        }



        /* @import url('https://fonts.googleapis.com/css?family=Lato:700,900'); */

        @font-face {
            font-family: Arno Pro;
            src: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ArnoPro-Regular.otf);
            font-style: normal;
        }

        @font-face {
            font-family: Arno Pro;
            src: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ArnoPro-Italic.otf);
            font-style: italic;
        }

        p {
            font-family: Arno Pro, serif;
            font-size: 1.4rem;
            line-height: 1.4;
            margin: 0;
        }

        p.credits {
            font-style: italic;
            text-indent: 0 !important;
            margin: 1rem 0;
        }

        p a {
            font-weight: bolder;
            color: #000;
            text-decoration: none;
        }

        @supports (font-variant-caps: small-caps) {
            .multicol:first-of-type p:first-of-type {
                font-variant-caps: small-caps;
            }
        }

        p:not(:first-of-type) {
            text-indent: 1.4rem;
        }

        .multicol {
            column-count: 4;
            column-gap: 2rem;
        }

        .multicol+img {
            margin: 2rem 0;
        }

        article {
            width: 80%;
            margin: 0 auto 4rem;
        }

        article img {
            width: 100%;
        }

        article header {
            margin-bottom: 2.5rem;
            padding-bottom: 4rem;
            border-bottom: 1px solid rgba(0, 0, 0, 0.8);
        }

        article h1 {
            margin-top: 0;
            font-size: 3rem;
        }

        article h2 {
            break-after: column;
            font-size: 1.5rem;
        }

        h1,
        h2 {
            font-family: Lato, sans-serif;
        }

        @media all and (max-width: 1600px) {
            .multicol {
                column-count: 3;
            }
        }

        @media all and (max-width: 1000px) {
            .multicol {
                column-count: 2;
            }
        }

        @media all and (max-width:800px) {
            article h2 {
                break-after: avoid;
            }

            .multicol {
                column-count: 1;
            }
        }

        @media all and (max-width:600px) {
            body {
                margin: 0;
            }

            article {
                width: 100%;
            }

            .multicol {
                padding: 0 1rem;
            }

            article header {
                margin-bottom: 2.5rem;
                padding-bottom: 0;
                border-bottom: none;
            }

            h1 {
                margin-bottom: 0;
            }
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
            background-image: url(../../images/茶饮/56.jpg);
        }

        .box .item:nth-of-type(2) {
            --offset: 2;
            background-image: url(../../images/茶饮//54.jpg);
        }

        .box .item:nth-of-type(3) {
            --offset: 3;
            background-image: url(../../images/茶饮/55.jpg);
        }

        .box .item:nth-of-type(4) {
            --offset: 4;
            background-image: url(../../images/茶饮/53.jpg);
        }

        .box .item:nth-of-type(5) {
            --offset: 5;
            background-image: url(../../images/茶饮/57.jpg);
        }

        .box .item:nth-of-type(6) {
            --offset: 6;
            background-image: url(../../images/茶饮/58.jpg);
        }

        .box .item:nth-of-type(7) {
            --offset: 7;
            background-image: url(../../images/茶饮/59.jpg);
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
