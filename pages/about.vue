<template>
    <div>
        <TitlePage title="ABOUT PAGE"/>
    </div>
</template>

<script>

    import TitlePage from '../components/TitlePage'

    export default {
        head: {
            title: "About Vue JS",
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: "My description meta data"
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: 'vue JS, JavaScript, frontend'
                }
            ]
        },
        components: {

            TitlePage
        }
    }
</script>

<style lang="scss" scoped>

</style>