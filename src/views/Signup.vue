<template>
    <v-app>
        <v-card width="400" class="mx-auto mt-5">
            <v-card-title>
                <h1 class="display-1">Yeni Hesap</h1>
                </v-card-title>
                <v-card-text>
                    <v-form @submit.prevent="signup" id="signup-form">
                        <v-text-field 
                        required v-model="name"
                        label="Adı"
                        prepend-icon ="mdi-account-circle"
                        />
                        <v-text-field 
                        required v-model="username"
                        label="Kullanıcı Adı"
                        prepend-icon ="mdi-account-circle"
                        />
                        <v-text-field 
                        required v-model="email"
                        label="Email"
                        prepend-icon ="mdi-account-circle"
                        />
                        <v-text-field 
                        required v-model="role"
                        label="Yetki"
                        prepend-icon ="mdi-account-circle"
                        />
                        
                        <v-text-field 
                        required v-model="password"
                        :type="showPassword ? 'text' : 'password' " 
                        label="Şifre"
                        prepend-icon ="mdi-lock"
                        :append-icon ="showPassword ? 'mdi-eye' :'mdi-eye-off' "
                        @click:append= "showPassword = !showPassword"
                        />
                    </v-form>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn type="submit" text rounded form="signup-form">Giriş Yap</v-btn>
                    <v-spacer></v-spacer>
                   
                </v-card-actions>
            
        </v-card>
    </v-app>
</template>

<script>
export default{
    data(){
        return{
            name:'',
            username:'',
            email:'',
            role: [],
            password:'',
            showPassword: false
        }
    },
    methods:{
        signup(){
            this.$store.dispatch('signup', {
                name: this.name,
                username: this.username,
                email: this.email,
                role: this.role,
                password: this.password
            })
            .then(()=> this.$router.push('/'))
        }
    }
}
</script>