<template>
  <v-row class="expansion-panels-container">
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header color="blue-grey darken-4 white--text">
          1. Productos a comprar
          <template #actions>
            <v-icon color="white"> $expand </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content color="blue-grey darken-3 white--text">
          <v-list color="blue-grey darken-3">
            <v-list-item>
              <v-list-item-avatar></v-list-item-avatar>
              <v-list-item-title class="product"
                ><strong>Producto</strong></v-list-item-title
              >
              <v-list-item-title><strong>Cantidad</strong></v-list-item-title>
              <v-list-item-title><strong>Precio</strong></v-list-item-title>
            </v-list-item>
            <v-list-item
              v-for="(item, index) in products"
              :key="index"
              color="white"
            >
              <v-list-item-avatar>
                <v-img :src="item.imageUrl"></v-img>
              </v-list-item-avatar>
              <v-list-item-title class="product">
                {{ item.name }}</v-list-item-title
              >
              <v-list-item-title v-if="[1, 6].includes(item.id)">
                <v-select
                  :value="item.quantity"
                  background-color="blue-grey darken-3"
                  :items="screens"
                  color="white"
                  item-color="blue-grey darken-3"
                  dark
                  @change="updateQuantity({ quantity: $event, id: item.id })"
                >
                </v-select>
              </v-list-item-title>
              <v-list-item-title v-else>{{ item.quantity }}</v-list-item-title>
              <v-list-item-title>{{
                (item.price * item.quantity) | priceFormat
              }}</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-avatar class="product"></v-list-item-avatar>
              <v-list-item-title><strong>Total</strong></v-list-item-title>
              <v-list-item-title></v-list-item-title>
              <v-list-item-title
                ><strong>{{
                  totalPrice | priceFormat
                }}</strong></v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header
          disable-icon-rotate
          color="blue-grey darken-4 white--text"
        >
          2. Información de contacto
          <template #actions>
            <v-icon color="white"> $expand </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content color="blue-grey darken-3 white--text">
          Sección de información de contacto
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-row class="mt-2 btn-pay">
      <v-btn tile color="blue-grey darken-4 white--text">
        <v-icon color="white" left> mdi-currency-usd </v-icon>
        Pagar
      </v-btn>
    </v-row>
  </v-row>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
const numeral = require('numeral')
export default {
  filters: {
    priceFormat: (value) => {
      return '$' + numeral(value).format('0,0,0,0,0')
    },
  },
  data() {
    return {
      screens: [1, 2, 3, 4, 5],
    }
  },
  computed: {
    ...mapState({
      products: (state) => state.cart.products,
    }),
    ...mapGetters({
      totalPrice: 'cart/totalPrice',
    }),
  },
  methods: {
    ...mapMutations({
      updateQuantity: 'cart/updateQuantity',
    }),
  },
}
</script>

<style>
.expansion-panels-container {
  margin: 50px;
}
.btn-pay {
  display: flex;
  justify-content: center;
  padding-top: 20px;
  margin-bottom: 20px;
}
.v-select > .v-input__control > .v-input__slot {
  width: 50px;
}
.theme--light.v-application {
  background-color: #263238;
}

.theme--light.v-list {
  background: #263238;
}
.v-list-item__content {
  color: white;
}
.theme--light.v-list-item:hover:before {
  opacity: 0.14;
}
@media (min-width: 320px) and (max-width: 767px) {
  .expansion-panels-container {
    margin: 20px;
  }
}
@media (min-width: 320px) and (max-width: 592px) {
  .product {
    display: none;
  }
}
</style>
