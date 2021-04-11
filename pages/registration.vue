<template>
    <form class="form__login w-1/3 mx-auto">
        <TitlePage title="Créer votre compte"/>
        <!-- <FormGroup textLabel="Email" inputType="email" :inputModel="email" />
        <FormGroup textLabel="Password" inputType="password" :inputModel="password" /> -->
        <div class="form__group">
            <label class="block text-sm font-medium text-gray-700">Nom</label>
            <input class="border-2 rounded-sm my-1 h-10 w-full" type="text" v-model="lastName" :name="lastName"/>
        </div>
        <div class="form__group">
            <label class="block text-sm font-medium text-gray-700">Prénom</label>
            <input class="border-2 rounded-sm my-1 h-10 w-full" type="text" v-model="firstName" :name="firstName"/>
        </div>
        <div class="form__group">
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input class="border-2 rounded-sm my-1 h-10 w-full" type="email" v-model="email" :name="email"/>
        </div>
        <div class="form__group">
            <label class="block text-sm font-medium text-gray-700">Mot de passe</label>
            <input class="border-2 rounded-sm my-1 h-10 w-full" type="password" v-model="password" :name="password"/>
        </div>
        <div>
            <input type="radio" v-model="isAdmin" :name="isAdmin" value="false"/>
            <label for="coding">Utilisateur</label>
        </div>
        <div>
            <input type="radio" v-model="isAdmin" :name="isAdmin" value="true"/>
            <label for="music">Admin</label>
        </div>
         <div>
            <button class="border-4" type="submit" @click.prevent="inscription">S'inscrire</button>
            
        </div>


        <div class="message__error text-red-800" v-if="messageError">
             {{messageError}}
        </div>
    </form>
</template>

<script>
    import TitlePage from '../components/TitlePage';

    export default {
        components: {
            TitlePage
        },
        
        data: function() {
            return {
                email: "",
                password: "",
                firstName: "",
                lastName: "",
                isAdmin:"",
                messageError: ""
            }
        },
        methods: {
            inscription: function() {
                console.log(this.email, this.password, this.firstName, this.lastName, this.isAdmin);
                const body = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    password: this.password,
                    isAdmin: this.isAdmin
                }
                this.$createUser(body)
                .then((data) => {
                    // console.log(data)
                    if(data) {
                        console.log(data)
                        
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

<style lang="scss" scoped>

</style>