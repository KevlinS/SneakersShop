<template>
    <div class="container">
        <div class="message__error text-center" v-if="!isLogged">
            <p>vous n'êtes pas connécté</p>
        </div>
        <div class="user__content text-center" v-else>
        <TitlePage title="ACCOUNT PAGE"/>
        <p>Nom: {{user.lastName}}</p>
        <p>Prénom: {{user.firstName}}</p>
        <p>Email: {{user.email}}</p>
        <p>Téléphone: {{user.telephone}}</p>
        <p>Adresse: {{user.adresse}}</p>
        <div class="input__wrapper">
            <Button btnTitle="Se déconnecter" :btnFunction="logout"/>
        </div>
        <div>
            <h1>VOS COMMANDES</h1>
        </div>
        </div>
        <div class="products grid grid-cols-3 gap-3">
        
         <div class="product__grid flex justify-center" v-for="product in productList" :key="product.id">
            <div class="product__item grid justify-items-center">
                <img :src=product.image>
                <p>{{product.title}}</p>
                
            </div>
        </div>
        </div>
    </div>
    
</template>

<script>
    import TitlePage from "../components/TitlePage";
    import Button from "../components/Button";
    import VueJwtDecode from "vue-jwt-decode";

    export default {
        components: {
            TitlePage,
            Button
        },
        data: function() {
            return {
                isLogged: false,
                user:{},
                orders:{},
                productList:[]
            }
        },
        middleware:"auth",
        methods: {
            logout: function() {
                localStorage.removeItem('token');
                this.$store.commit('loggedOut');
                this.isLogged = false;
                this.$router.push('/');
            }
        },
        fetch() {
            const token =  localStorage.getItem('token');
            if(token) {
                
                const jwtDecoded = this.$decodeJwt(token); 
                console.log(jwtDecoded);
                this.$getMe(jwtDecoded.id, token)
                .then(data => {
                    console.log(data);
                    this.isLogged = true;
                    this.user = data;
                    
                })
                .catch(err=>console.log(err))
            }
            if(this.user) {
                this.$getOrders()
                .then(data => {
                    this.orders = data;
                    for(var i=0; i<data.length; i++) {
                        var idUserInOrder = data[i].user._id
                        console.log(data[i].user._id)
                        for(var j=0; j<data[i].products.length; j++){
                            if(idUserInOrder == this.user._id){
                                this.productList = data[i].products;
                            }
                            
                            console.log(data[i].products[j].title)
                        }
                        
                    }
                })
                .catch(err=>console.log(err))
            }
            
        }
    }
</script>

<style scoped>
     .container {
  margin: 0 auto;
  min-height: 20vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 35px;
}
.input__wrapper{
    margin-top: 35px;
    margin-bottom: 35px;
}
</style>