<template>
  <div id="app">
    我是父组件，我收到子组件传来的数据为 <strong>{{y}}</strong>
    <Child :value="x" @sayHi="y = $event"/>
    <Sibling></Sibling>
  </div>
</template>

<script>
import Child from './components/Child'
import Sibling from './components/Sibling'
export default {
  data(){
    return {
      x: 'hi,child',
      y: ''
    }
  },
  components:{
    Child,
    Sibling
  }
}
</script>

<style scoped>
    strong{
            color: blue;
    }
</style>
