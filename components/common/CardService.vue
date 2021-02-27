<template>
  <div>
    <v-card
      :id="id"
      :loading="loading"
      class="mx-auto my-12 mb-2 card-service"
      max-height="400"
      color="blue-grey darken-4 white--text"
    >
      <template slot="progress">
        <v-progress-linear
          color="white"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>
      <v-img width="350" height="150" :src="imageUrl"></v-img>
      <v-col class="d-flex white--text" cols="12">
        <v-card-text class="white--text">{{ service }}</v-card-text>
      </v-col>
      <v-card-title class="white--text">{{ price | priceFormat }}</v-card-title>
      <v-divider class="mx-4" color="white"></v-divider>
      <v-card-actions>
        <v-btn
          v-if="!selected"
          color="white"
          text
          @click="addProduct(id, name)"
        >
          <v-icon left>mdi-cart</v-icon> Agregar al carrito
        </v-btn>
        <v-btn v-else @click="removeProduct(id)">
          <v-icon left>mdi-cart</v-icon> Eliminar del carrito
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-alert v-if="selected" type="success" :value="alert" dense>
      Añadiste {{ name }} al carrito
    </v-alert>
    <v-alert v-else type="error" :value="alert" dense>
      Eliminaste {{ name }} del carrito
    </v-alert>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
const numeral = require('numeral')
export default {
  filters: {
    priceFormat: (value) => {
      return '$' + numeral(value).format('0,0,0,0,0')
    },
  },
  props: {
    id: {
      type: Number,
      default: 0,
      required: true,
    },
    name: {
      type: String,
      default: '',
      required: true,
    },
    price: {
      type: Number,
      default: 0,
      required: true,
    },
    service: {
      type: String,
      default: '',
      required: true,
    },
    imageUrl: {
      type: String,
      default: '',
      required: true,
    },
  },
  data: () => ({
    loading: false,
    selected: false,
    alert: false,
  }),
  computed: {
    ...mapState({
      products: (state) => state.car.products,
    }),
  },
  methods: {
    ...mapMutations({
      add: 'car/add',
      remove: 'car/remove',
    }),
    addProduct(id, name) {
      this.loading = true
      this.alert = true
      setTimeout(() => (this.loading = false), 1000)
      this.add({ id, name })
      this.selected = true
      setTimeout(() => (this.alert = false), 1000)
    },
    removeProduct(id) {
      this.loading = true
      this.alert = true
      setTimeout(() => (this.loading = false), 1000)
      this.remove(id)
      this.selected = false
      setTimeout(() => (this.alert = false), 1000)
    },
  },
}
</script>

<style scoped>
.card-service {
  width: 350px;
}
</style>
