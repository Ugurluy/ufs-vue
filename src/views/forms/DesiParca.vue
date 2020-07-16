<template>
    <v-row>
        <v-container mt-10>
             <v-data-table
    :headers="headers"
    :items="items"
    :sort-by="['terapiNo', 'cap']"
    :sort-desc="[false, true]"
    multi-sort
    class="elevation-1"
  ></v-data-table>
        </v-container>
    </v-row>
    
</template>


<script>
  export default {
    data () {
      return {
        headers: [
          { text: 'Firma', value: 'firma' },
          { text: 'Terapi No', value: 'terapiNo' },
          { text: 'Cap', value: 'cap' },
          { text: 'DeriTuru', value: 'deriTuru' },
          { text: 'Lot', value: 'lot' },
          { text: 'Eldiven', value: 'eldiven' },
        ],
        items: [
          {
            firma: 'Mirka',
            terapiNo: 200,
            cap: 130,
            deriTuru: 'Merino',
            lot: 122121,
            eldiven: 'A',
          },
          {
            firma: 'Car System',
            terapiNo: 200,
            cap: 90,
            deriTuru: 'Merino',
            lot: 343112,
            eldiven: 'B',
          },
          {
            firma: 'Tofas',
            terapiNo: 300,
            cap: 180,
            deriTuru: 'Domestic',
            lot: 1277237,
            eldiven: 'A',
          },
          {
            firma: 'Mercedes',
            terapiNo: 300,
            cap: 120,
            deriTuru: 'Merino',
            lot: 38218823,
            eldiven: 'A',
          },
          {
            firma: 'Toyota',
            terapiNo: 400,
            cap: 90,
            deriTuru: 'Domestic',
            lot: 3932212,
            eldiven: 'B',
          }
        ],
      }
    },
  }
</script>