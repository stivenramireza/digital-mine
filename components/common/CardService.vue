<template>
  <div>
    <v-card :id="product.id" color="blue-grey darken-4 white--text">
      <v-img :src="product.imageUrl" height="160  "></v-img>
      <v-col class="d-flex white--text" cols="12">
        <v-card-text class="white--text">{{ product.service }}</v-card-text>
      </v-col>
      <v-card-title class="white--text">{{
        product.price | priceFormat
      }}</v-card-title>
      <v-divider class="mx-4" color="white"></v-divider>
      <v-card-actions>
        <v-btn
          v-if="!product.selected"
          color="white"
          text
          @click="add(product) + $forceUpdate() + showAlert()"
        >
          <v-icon left>mdi-cart</v-icon> Agregar al carrito
        </v-btn>
        <v-btn v-else @click="remove(product) + $forceUpdate() + showAlert()">
          <v-icon left>mdi-cart</v-icon> Eliminar del carrito
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-alert v-if="product.selected" type="success" :value="alert" class="mt-2">
      Añadiste {{ product.name }} al carrito
    </v-alert>
    <v-alert v-else type="error" :value="alert" class="mt-2">
      Eliminaste {{ product.name }} del carrito
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
    product: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  data() {
    return {
      alert: false,
    }
  },
  computed: {
    ...mapState({
      products: (state) => state.cart.products,
    }),
  },
  methods: {
    ...mapMutations({
      add: 'cart/add',
      remove: 'cart/remove',
    }),
    showAlert() {
      this.alert = true
      setTimeout(() => {
        this.alert = false
      }, 2000)
    },
  },
}
</script>

<style scoped>
.card-service {
  width: 350px;
}
</style>
