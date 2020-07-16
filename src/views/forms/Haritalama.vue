<template>
  <v-data-table
    :headers="headers"
    :items="items"
  >
    <template v-slot:item.quantity="props">
      <v-text-field v-model="props.item.quantity"></v-text-field>
    </template>
  </v-data-table>
</template>

<script>
export default {
    props: {
        customer: {
        type: Object,
        required: true
        }
    },
    data: () => ({
        headers: [
        { text: 'ID', value: 'id' },
        { text: 'Description', value: 'description' },
        { text: 'Quantity', value: 'quantity' },
        ],
        items: [],
    }),
    created() {
        this.initialize()
    },
    methods: {
        initialize() {
  let items = JSON.parse(JSON.stringify(this.customer.items))
  items.map(item => {
    item.quantity = '3'
    return item
  })
  this.items = items
}
    }
}
</script>