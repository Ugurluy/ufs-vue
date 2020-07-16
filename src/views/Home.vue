<template>
<v-row>
  <v-container>
    
     <v-card
     v-for="form in forms"
     :key="form.name"
    class="mx-auto"
    max-width="344"
  >
    <v-card-text>
      <div>form.name</div>
      
      
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4"
        to="/hookandLoop"
      >
        Get
      </v-btn>
    </v-card-actions>
  </v-card>
  
  </v-container>

</v-row>
  
</template>

<script>



export default {
  name: 'Home',
  data(){
    return{
      forms:[
        {name : 'Hook and Loop Günlük İmalat Formu'},
        {name : 'Dikiş Günlük İmalat Formu'}
      ]
    }
  }
}
</script>
