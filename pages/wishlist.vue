<template>
<div>
  <div class="container">
    
    <div class="favoris grid grid-cols-2 gap-2" v-for="product in productArray" :key="product.id">
       
        <NuxtLink :to="`/product/${product.id}`">
          <img class="product__image " :src=product.image>
          <p>{{ product.title }}</p>
          
        </NuxtLink>
        <div class="btn__delete">
          <button type="submit" v-on:click="()=>removeProduct(product)">X</button>
        </div>
         
    </div>
    
    
    
  </div>
  <div class="btn__deleteall">
      <Button btnTitle="supprimer tous les produits" :btnFunction="clearAllProducts"/>
      
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

<style scoped>
  .container {
    display: flex;
  margin: 0 auto;
  min-height: 20vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 35px;
}

  .btn__deleteall{
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 55px;
  }
  .btn__delete{
    color: red;
    text-align: left;
  }
</style>