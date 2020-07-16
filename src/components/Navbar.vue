<template>
  <nav>
    <v-app-bar
      color="indigo darken-4"
      dense
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>UFS</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
        <v-btn v-if="!loggedIn" text rounded color="grey darken" to='/login'>
                  Login
              </v-btn>
              <v-btn v-else text rounded color="grey darken" @click= "logout">
                  Logout
              </v-btn>
    </v-app-bar>
  </nav>
</template>


<script>
import {authComputed} from '../store/helpers'
export default {
  beforeMount(){
    if(this.authComputed === true){
      this.loggedIn = true
    }
  },
  computed:{
    ...authComputed
  },
  methods: {
    logout(){
      this.$store.dispatch('logout')
    }
  }
}
</script>