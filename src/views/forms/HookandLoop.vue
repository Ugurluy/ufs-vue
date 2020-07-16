<template>
    <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="indigo darken-4"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Yeni Üretim Ekle
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Yeni Üretim</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="editedItem.isEmri" label="Terapi No" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  v-model="editedItem.musteri"  
                  :items="['Mirka', 'Car System', 'Fiat', 'SDK', 'Mercedes', 'Renault', 'Buff and Shine', 'Gelson', 'Marvel']"
                  label="Müşteri"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  v-model="editedItem.cap"
                  :items="['55', '80', '120', '130', '135', '150', '160', '180', '190', '200']"
                  label="Çap (mm)"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                v-model="editedItem.spAdet"  label="Sipariş Adet" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  v-model="editedItem.tuyYuks"
                  :items="['0.5', '12', '15', '17', '20', '22', '25']"
                  label="Tüy Yüksekliği (nm)"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  v-model="editedItem.deriTuru"
                  :items="['Merino', 'Domestic', 'Hidrofob', 'Pembe', 'Siyah', 'Kırmızı']"
                  label="Deri Türü"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="editedItem.deriAdet" label="Deri Adet" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="['İnce', 'Kalın', 'Dijital']"
                  label="Cırt Türü"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="['Gri', 'Mavi', 'Siyah', 'Petrol', 'Siyah', 'Kırmızı']"
                  label="Cırt Rengi"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="['Süngersiz','3', '5']"
                  label="Sünger (mm)"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="['Soft', 'Hard', 'CRT']"
                  label="Taban"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Kalıp Adet" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>* Zorunlu Alanlar</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Kapat</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">Kaydet</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-container>
        <v-card>
        <v-card-title>
          <span class="headline">Hook and Loop Günlük İmalat Formu</span>
        </v-card-title>
        <v-spacer></v-spacer>
        <v-data-table :headers="headers" :items="hookandLoopForm" hide-actions class="elevation-1">
            <template slot="items" >
                <td>{{ hookandLoopForm.isEmri }}</td>
                
                <td class="text-xs-right">{{ hookandLoopForm.musteri }}</td>
                <td class="text-xs-right">{{ hookandLoopForm.cap }}</td>
                <td class="text-xs-right">{{ hookandLoopForm.spAdet }}</td>
                <td class="text-xs-right">{{ hookandLoopForm.tuyYuksekligi }}</td>
                <td class="text-xs-right">{{ hookandLoopForm.deriTuru }}</td>
                <td class="text-xs-right">{{ hookandLoopForm.deriAdet }}</td>
                <td class="text-xs-right">{{ hookandLoopForm.cirtTuru }}</td>
                <td class="text-xs-right">{{ hookandLoopForm.cirtRengi }}</td>
                <td class="text-xs-right">{{ hookandLoopForm.sunger }}</td>
                <td class="text-xs-right">{{ hookandLoopForm.taban }}</td>
                
                <td class="justify-center layout px-0">
                <v-btn icon class="mx-0" @click="editItem(hookandLoopForm)">
                <v-icon color="teal">edit</v-icon>
                </v-btn>
                <v-btn icon class="mx-0" @click="deleteItem(hookandLoopForm)">
                <v-icon color="pink">delete</v-icon>
                </v-btn>
                </td>
            </template>
        </v-data-table>
        </v-card>
        
    </v-container>
  </v-row>
  
</template>

<script>
export default {
  data(){
    return {
      dialog: false,
      headers: [
          { text: 'Terapi No', value: 'terapiNo',sortable: false },
          { text: 'Müşteri', value: 'musteri',sortable: false },
          { text: 'Çap', value: 'cap' ,sortable: false},
          { text: 'Sipariş Adet', value: 'spAdet',sortable: false },
          { text: 'Tüy Yüksekliği', value: 'tuyYuks',sortable: false },
          { text: 'Deri Türü', value: 'deriTuru' ,sortable: false},
          { text: 'Deri Adet', value: 'deriAdet' ,sortable: false},
          { text: 'Cırt Türü', value: 'cırtTuru',sortable: false },
          { text: 'Cırt Rengi', value: 'cırtRengi',sortable: false },
          { text: 'Sünger', value: 'sunger',sortable: false },
          { text: 'Taban', value: 'taban',sortable: false }

          
        ],
      editedItem: {
            isEmri: 0,
            musteri: '',            
            cap: 0,
            spAdet: 0,
            tuyYuksekligi: 0,
            deriTuru: '',
            deriAdet: 0,
            cirtTuru: 0,
            cirtRengi: '',
            sunger: 0,
            taban: ''
        }
    }  
    },
   mounted(){
        this.$store.dispatch('getHookandLoopForm')
    },
    computed: {
        hookandLoopForm(){
            return this.$store.state.hookandLoopForm
        }
    },
    initialize() {

    }   
}
</script>