<template>
    <div>
        <button class="btn btn-outline-success my-2 my-sm-0" @click.prevent="btnFunction">
            {{btnTitle}}
        </button>
    </div>
</template>

<script>
    export default {
        name:'Button',
        props: {
            btnTitle: String,
            btnFunction: Function
        }
    }
</script>

<style lang="scss" scoped>
</style>