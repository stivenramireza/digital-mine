<template>
  <v-row class="expansion-panels-container">
    <v-expansion-panels v-model="panel">
      <v-expansion-panel>
        <v-expansion-panel-header color="blue-grey darken-4 white--text">
          1. Productos a comprar
          <template #actions>
            <v-icon color="white"> $expand </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content color="blue-grey darken-3 white--text">
          <CartList />
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
import CartList from '@/components/common/CartList'

export default {
  components: {
    CartList,
  },
  data() {
    return {
      panel: 0,
    }
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
</style>
