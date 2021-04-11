<template>
    <div class="wishlists">
    
    <ul>
      
      <li v-for="product in productArray" :key="product.id">
        <div>
        <NuxtLink :to="`/product/${product.id}`">
          <img class="product__image" :src=product.image>
          <p>{{ product.title }}</p>
        </NuxtLink>
      </div>
     
        <div>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit" v-on:click="()=>removeProduct(product)">X</button>
        </div>
        
      </li>
      
    </ul>
    <div class="btn__deleteall">
      <Button btnTitle="delete all products" :btnFunction="clearAllProducts"/>
      
    </div>
    
  </div>
</template>

<script>
import wishlist from '../mixins/wishlist';
import Button from '../components/Button';

    export default {
    data: function () {
        return {
            productArray: [],
            product: {}, 
        };
    },
    methods: {
      clearAllProducts: function () {
        this.clearWishlists();
        this.productArray = this.getProductWishlists();
      }
    },
    components: {
        Button,
    },
    mounted() {
        this.productArray = this.getProductWishlists();
        console.log(this.productArray)
    },
    mixins:[wishlist]
}
</script>

<style lang="scss" scoped>

</style>