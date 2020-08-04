<template>
    <div class="wrapper">
        <input :value="value" @input="$emit('input', $event.target.value)">
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: String
        }
    }
}
</script>

<style scoped>
    .wrapper{
        border: 2px solid blue;
        display: inline-block;
    }
    .wrapper input{
        color: red;
    }
</style>