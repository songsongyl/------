<template>
  <section id="sec1" class="sec">
    <h3>冰淇淋</h3>
    <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;冰淇淋是一种甜点，通常由牛奶、奶油、糖和其他调味品（如水果、巧克力或坚果）混合后冷冻制成。它的质地通常非常光滑且富有奶香，常见的冰淇淋种类包括香草、巧克力、草莓等，且可以通过不同的调味和装饰变化出多种风味。冰淇淋因其清凉爽口的特点，成为夏季最受欢迎的甜品之一，也常被用作各种甜点的配料。
    </p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;随着科技的发展，冰淇淋的制作方式和种类也越来越多样，除了传统的乳制冰淇淋，还有无乳冰淇淋、低脂冰淇淋等健康选择，满足了不同消费者的需求。冰淇淋不仅是餐后甜点，也常常与家庭聚会、节庆活动和社交场合相伴，是全球喜爱的美食之一。</p>
  </section>
</template>

<script>
export default {
  name: 'Sec1',
};
</script>

<style scoped>
.sec {
  position: relative;
  width: 100%;
  max-width: 1080px;
  margin: 80px auto;
  padding: 40px;
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
  padding-top: 80px;
  padding-bottom: 20px;
  letter-spacing: 0.25em;
  color: #3ae0ae;
  text-align: center;
  /* border-bottom: 1px solid #dddddd; */
}
</style>
