
<template>
    <v-app>
        <v-card width="400" class="mx-auto mt-5">
            <v-card-title>
                <h1 class="display-1">Giriş</h1>
                </v-card-title>
                <v-card-text>
                    <v-form @submit.prevent="login" id="login-form">
                        <v-text-field 
                        required v-model="username"
                        label="Kullanıcı Adı"
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
                    <v-btn type="submit" text rounded form="login-form">Giriş Yap</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn text rounded to="/signup">Yeni Hesap</v-btn>
                </v-card-actions>
            
        </v-card>
    </v-app>
</template>



<script>

export default {
  data(){
    return{
      username:'',     
      password:'',
      showPassword: false
    }
  },
  methods:{
    login(){
      this.$store.dispatch('login',{
          username: this.username,
          password: this.password
        })
      .then (() => this.$router.push('/'))
    }
  }
}
</script>