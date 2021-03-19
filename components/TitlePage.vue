<template>
    <div class="title__page my-5">
        <h1 class="text-center text-5xl uppercase font-semibold text-teal-900">
            {{ title }}
        </h1>
    </div>
</template>

<script>
    export default {
        name:"TitlePage",
        props: {
            title: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>