<template>
  <div id="app">
    <MyInput v-model="x"/>
    {{x}}
  </div>
</template>

<script>
import MyInput from './components/MyInput'
export default {
  data(){
    return {
      x: 0
    }
  },
  components:{
    MyInput
  }
}
</script>

<style>

</style>
