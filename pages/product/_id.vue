<template>
    <div class="product__detail grid justify-items-center">
        <TitlePage title="DETAIL PAGE"/>
        <img class="product__image" :src=productDetail.image>
        <p>Product: {{productDetail.title}}</p>
        <p>Description: {{productDetail.description}}</p>
        <p>Price: {{productDetail.price}}</p>
    </div>
</template>

<script>

    import TitlePage from '../../components/TitlePage'
    import Product from '../../apollo/queries/product.gql'

    export default {
        components: {

            TitlePage
        },
        data: function() {
            return {
                productDetail: {}
            }
        },
        created() {
            console.log(this.$route.params.id)
        },
        apollo: {
            productDetail: {
                query: Product,
                variables() {
                    return {
                        id: this.$route.params.id
                    }   
                },
                update(data) {
                    console.log(data.product);
                    return data.product;
                }
            }
        }
    
    }
</script>

<style scoped>

</style>