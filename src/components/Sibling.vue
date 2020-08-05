<template>
    <div>
        我是兄弟组件，我收到来自儿子组件的数据信息为 <strong>{{x}}</strong> 
    </div>
</template>

<script>
import {eventBus} from '../eventBus.js'
export default {
    data(){
        return {
            x: ''
        }
    },
    mounted(){
        eventBus.$on('sibling', (msg)=>{
            this.x = msg;
        })
    }
}
</script>

<style scoped>
    strong{
            color: green;
    }
</style>