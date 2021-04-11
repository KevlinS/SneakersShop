<template>
    <div class="page__account">
        <div class="message__error text-center" v-if="!isLogged">
            <p>vous n'êtes pas connécté</p>
        </div>
        <div class="user__content text-center" v-else>
        <TitlePage title="ACCOUNT PAGE"/>
        <p>Nom: {{user.lastName}}</p>
        <p>Prénom: {{user.firstName}}</p>
        <p>Email: {{user.email}}</p>
        <div class="input__wrapper">
            <button @click="logout">Se déconnecter</button>
        </div>
        </div>
    </div>
    
</template>

<script>
    import TitlePage from "../components/TitlePage";
    import VueJwtDecode from "vue-jwt-decode";

    export default {
        components: {
            TitlePage
        },
        data: function() {
            return {
                isLogged: false,
                user:{}
            }
        },
        middleware:"auth",
        methods: {
            logout: function() {
                localStorage.removeItem('token');
                this.$store.commit('loggedOut');
                this.isLogged = false;
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
        }
    }
</script>

<style lang="scss" scoped>

</style>