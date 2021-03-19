<template>
    <form class="form__login w-1/3 mx-auto">
        <TitlePage title="LOGIN PAGE"/>
        <!-- <FormGroup textLabel="Email" inputType="email" :inputModel="email" />
        <FormGroup textLabel="Password" inputType="password" :inputModel="password" /> -->
        <div class="form__group">
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input class="border-2 rounded-sm my-1 h-10 w-full" type="email" v-model="email" :name="email"/>
        </div>
        <div class="form__group">
            <label class="block text-sm font-medium text-gray-700">Password</label>
            <input class="border-2 rounded-sm my-1 h-10 w-full" type="password" v-model="password" :name="password"/>
        </div>
        <div>
            <button type="submit" @click.prevent="login">Se connecter</button>
        </div>

        <div class="message__error text-red-800" v-if="messageError">
             {{messageError}}
        </div>
    </form>
</template>

<script>

    import TitlePage from '../components/TitlePage'

    export default {
        components: {

            TitlePage
        },
        data: function() {
            return {
                email: "",
                password: "",
                messageError: ""
            }
        },
        methods: {
            login: function() {
                console.log(this.email, this.password);
                const body = {
                    email: this.email,
                    password: this.password
                }
                this.$login(body)
                .then((data) => {
                    console.log(data)
                    if(data.auth) {
                        localStorage.setItem("token", data.token)
                        this.$store.commit('isAuth');
                        this.$router.push('account')
                        
                    }
                    else {
                        this.messageError = "email ou mot de passe n'est pas valide"
                    }
                })
                .catch(err => console.log(err))
            }
        }
    }
</script>

<style scoped>
    .form__group {
       margin: 40px 0px;
   }
</style>