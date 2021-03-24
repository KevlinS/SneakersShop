<template>
    <div>
        <div class="loader" v-if="loading">loading...</div>
        <div class="products grid grid-cols-4 gap-4 ">
        <div class="product__grid flex justify-center" v-for="product in productsArray" :key="product.id">
            <div class="product__item grid justify-items-center">
                <img class="product__image h-41" :src=product.image>
                <p>Product: {{product.title}}</p>
                <p>Price: {{product.price}}€</p>
                <NuxtLink :to="`/product/${product.id}`" >Voir le produit</NuxtLink>
            </div>
        </div>
       </div>
    </div>
</template>

<script>

    import TitlePage from '../components/TitlePage';
    import Products from '../apollo/queries/products.gql';

    export default {
         components: {

            TitlePage
        },
        data: function() {
            return {
                productsArray: [],
                loading: 0
            }
        },
        apollo: {
            $loadingKey: "loading",
            productsArray: {
                prefetch: true,
                query: Products,
                update(data) {
                    console.log(data.products);
                    return data.products;
                }
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>