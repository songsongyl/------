<script lang="ts">

import HomePage from '../烘焙/HomePage.vue'
import Cakes from '../烘焙/Cakes2.vue'
import Crisp from '../烘焙/Crisp.vue'


export default {
  name: 'App',
  components: {  HomePage, Cakes, Crisp }
}
</script>

<template>
 
  <HomePage />
  <Crisp />
  <Cakes />
</template>
<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
