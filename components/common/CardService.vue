<template>
  <v-card
    :id="id"
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
    color="blue-grey darken-4 white--text"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-img width="350" height="135" :src="imageUrl"></v-img>
    <v-col v-if="hasScreens" class="d-flex white--text" cols="12">
      <v-select
        v-model="selected"
        :items="screens"
        label="Pantallas"
        item-color="blue-grey darken-3"
        class="white--text"
      ></v-select>
    </v-col>
    <v-col v-else class="mb-3">
      <v-card-text class="white--text">{{ service }}</v-card-text>
    </v-col>
    <v-card-title class="white--text">{{
      (price * selected) | priceFormat
    }}</v-card-title>
    <v-divider class="mx-4"></v-divider>
    <v-card-actions>
      <v-btn color="white" text @click="reserve">
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
