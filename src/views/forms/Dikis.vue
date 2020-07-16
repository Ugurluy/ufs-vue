<template>
    
      <div id="app">
  <v-app id="inspire">
    <v-data-table
      :headers="headers"
      :items="desserts"
      class="elevation-1">
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.calories }}</td>
        <td class="text-xs-right">{{ props.item.fat }}</td>
        <td class="text-xs-right">{{ props.item.carbs }}</td>
        <td class="text-xs-right">{{ props.item.protein }}</td>
        <td class="text-xs-right">{{ props.item.iron }}</td>
        <td>
          <v-btn color="primary" dark @click="dialog = true">Open Dialog</v-btn>
        </td>
      </template>
    </v-data-table>

    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Use Google's location service?</v-card-title>
        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click="dialog = false">Disagree</v-btn>
          <v-btn color="green darken-1" flat @click="dialog = false">Agree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>    
  </v-app>
</div>
        <!-- <v-container mt-4>
             <v-data-table
    :headers="headers"
    :items="items"
    :sort-desc="[false, true]"
    multi-sort
    class="elevation-1"
  ></v-data-table>


  

   <v-simple-table >
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left title">Dikiş Günlük İmalat Raporu</th>
          
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in dikisForm" :key="item">
          <td>{{ item }}</td>
          
        </tr>
      </tbody>
    </template>
  </v-simple-table>
        </v-container> -->
    
    
</template>


<script>
  export default {
    data () {
    return {
      dialog: false,
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' },
        { text: 'Action', value: '' }
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%'
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        }
      ]
    }
  }
    // mounted(){
    //   this.$store.dispatch('getDikisForm')
    // },
    // computed:{
    //   dikisForm(){
    //     return this.$store.state.dikisForm
    //   }
    // },
    // initialize(){
      
    // }
  }
</script>