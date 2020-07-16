<template>
    <v-row>
        <v-container>
             <v-data-table :headers="headers" :items="items" hide-actions class="elevation-1" :sort-by="['terapiNo', 'cap']" :sort-desc="[false, true]" multi-sort>
               <template slot="items" slot-scope="props">
                 <td>{{ props.item.name }}</td>
                  <td class="text-xs-right">{{ props.item.terapiNo }}</td>
                  <td class="text-xs-right">{{ props.item.musteri }}</td>
                  <td class="text-xs-right">{{ props.item.cap }}</td>
                  <td class="text-xs-right">{{ props.item.spspAdet }}</td>
                  <td class="text-xs-right">{{ props.item.tuyYuks }}</td>
                  <td class="text-xs-right">{{ props.item.deriTuru }}</td>
                  <td class="text-xs-right">{{ props.item.cırtTuru }}</td>
                  <td class="text-xs-right">{{ props.item.cırtRengi }}</td>
                  <td class="text-xs-right">{{ props.item.sunger }}</td>
                  <td class="text-xs-right">{{ props.item.taban }}</td>
               </template>
             </v-data-table>
        </v-container>
    </v-row>
    
</template>


<script>
  export default {
    data () {
      return {
        headers: [
          { text: 'Terapi No', value: 'terapiNo' },
          { text: 'Müşteri', value: 'musteri' },
          { text: 'Çap', value: 'cap' },
          { text: 'Sipariş spAdet', value: 'spspAdet' },
          { text: 'Tüy Yüksekliği', value: 'tuyYuks' },
          { text: 'Deri Türü', value: 'deriTuru' },
          { text: 'Cırt Türü', value: 'cırtTuru' },
          { text: 'Cırt Rengi', value: 'cırtRengi' },
          { text: 'Sünger', value: 'sunger' },
          { text: 'Taban', value: 'taban' },
          
        ],
        items: [
          {
            terapiNo: 200,
            musteri: 'Mirka',
            cap: 130,
            spAdet: 130,
            tuyYuks: 130,
            deriTuru: 'Merino',
            cırtTuru: 'İnce',
            cırtRengi: 'Mavi',
            sunger: 3,
            taban: 'Soft'
          },
          {
            terapiNo: 200,
            musteri: 'Car System',
            cap: 90,
            spAdet: 90,
            tuyYuks: 90,
            deriTuru: 'Merino',
            cırtTuru: 13,
            cırtRengi: 'Siyah',
            sunger: 5,
            taban: 'Hard'
          },
          {
            terapiNo: 300,
            musteri: 'Tofas',            
            cap: 180,
            spAdet: 180,
            tuyYuks: 180,
            deriTuru: 'Domestic',
            cırtTuru: 10,
            cırtRengi: 'Petrol',
            sunger: 5,
            taban: 'Hard'
          },
          {
            terapiNo: 300,
            musteri: 'Mercedes',            
            cap: 120,
            spAdet: 120,
            tuyYuks: 120,
            deriTuru: 'Merino',
            cırtTuru: 14,
            cırtRengi: 'Pembe',
            sunger: 5,
            taban: 'Hard'
          },
          {
            terapiNo: 400,
            musteri: 'Toyota',            
            cap: 90,
            spAdet: 90,
            tuyYuks: 90,
            deriTuru: 'Domestic',
            cırtTuru: 11,
            cırtRengi: 'Beyaz',
            sunger: 245,
            taban: 'Hard'
          }
        ],
      }
    },
  }
</script>