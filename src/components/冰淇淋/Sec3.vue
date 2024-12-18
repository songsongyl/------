<template>
  <section id="sec3" class="sec">
    <h3>制作流程图</h3>
    <img src="../../images/iscream/make1.png">
  </section>
</template>

<script setup>
  name: 'Sec3'
</script>

<style scoped>
.sec {
  position: relative;
  width: 90%;
  max-width: 1100px;
  margin: 80px auto;
  /* padding: 40px; */
  background: #ffffff;
  box-shadow: 0 8px 16px rgba(50, 50, 90, 0.1), 0 2px 7px rgba(0, 0, 0, 0.07);
}
.sec:before, .sec:after {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: #3ae0ae;
  z-index: -1;
}
.sec:before {
  width: 40%;
  max-width: 200px;
  height: 13px;
  bottom: -13px;
}
.sec:after {
  width: 50px;
  height: 50px;
  bottom: -25px;
  border-radius: 25px;
}
p {
  font-size: 0.9em;
}
h3 {
  
  padding-top: 100px;
  padding-bottom: 20px;
  letter-spacing: 0.25em;
  color: #3ae0ae;
  text-align: center;
  /* border-bottom: 1px solid #dddddd; */
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 保持图片比例，并裁剪多余部分以填充容器 */
}

</style>
