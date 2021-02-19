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

    <v-card-text>
      <div class="subtitle-1">{{ price | priceFormat }} COP</div>
      <div>{{ service }}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text @click="reserve">
        Solicitar servicio
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
    selection: 1,
  }),
  methods: {
    reserve() {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    },
  },
}
</script>
