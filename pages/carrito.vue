<template>
  <v-row class="expansion-panels-container">
    <v-expansion-panels focusable>
      <v-expansion-panel v-for="(item, index) in sections" :key="index">
        <v-expansion-panel-header color="blue-grey darken-4 white--text">{{
          item.name
        }}</v-expansion-panel-header>
        <v-expansion-panel-content class="mt-2">
          {{ item.content }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      sections: [
        {
          name: '1. Productos a comprar',
          content: '<Sección de productos a comprar>',
        },
        {
          name: '2. Datos personales',
          content: '<Sección de datos personales>',
        },
        {
          name: '3. Medio de pago',
          content: '<Sección de medio de pago>',
        },
      ],
    }
  },
  computed: {
    ...mapState({
      products: (state) => state.cart.products,
    }),
  },
}
</script>

<style scoped>
.expansion-panels-container {
  margin: 50px;
}
@media (min-width: 320px) and (max-width: 767px) {
  .expansion-panels-container {
    margin: 10px;
  }
}
</style>
