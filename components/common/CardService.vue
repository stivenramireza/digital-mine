<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-img height="250" :src="imageUrl"></v-img>
    <v-card-title>{{ name }}</v-card-title>
    <v-col v-if="hasScreens" class="d-flex" cols="12">
      <v-select
        v-model="selected"
        :items="screens"
        label="Pantallas"
      ></v-select>
    </v-col>
    <v-card-text>{{ (price * selected) | priceFormat }}</v-card-text>
    <v-divider class="mx-4"></v-divider>
    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text @click="reserve">
        <v-icon left>mdi-cart</v-icon> Agregar al carrito
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
const numeral = require('numeral')
export default {
  filters: {
    priceFormat: (value) => {
      return '$' + numeral(value).format('0,0,0,0,0')
    },
  },
  props: {
    name: {
      type: String,
      default: '',
      required: true,
    },
    hasScreens: {
      type: Boolean,
      default: false,
      required: true,
    },
    price: {
      type: Number,
      default: 0,
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
    screens: [1, 2, 3, 4],
    selected: 1,
  }),
  methods: {
    reserve() {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    },
  },
}
</script>
