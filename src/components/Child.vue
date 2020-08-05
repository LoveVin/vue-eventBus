<template>
    <div>
        我是儿子，我收到来自父亲的数据为 <strong>{{value}}</strong>
        <button @click="sayHi">
            向父组件打招呼
        </button>
        <button @click="sibling">
            向兄弟组件打招呼
        </button>
    </div>
</template>

<script>
import {eventBus} from '../eventBus.js'
export default {
    props:{
        value: String
    },
    methods:{
        sayHi(){
            this.$emit('sayHi','hi,parent!');
        },
        sibling(){
            eventBus.$emit('sibling','hi,brother');
        }
    }
}
</script>

<style scoped>
    strong{
        color: red;
    }
</style>