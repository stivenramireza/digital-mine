<template>
  <v-row class="cards-container">
    <v-col
      v-for="(item, index) in $options.json.products"
      :key="index"
      cols="12"
      md="4"
      sm="6"
    >
      <CardService :product="item" />
    </v-col>
  </v-row>
</template>

<script>
import CardService from '@/components/common/CardService'
import api from '@/assets/json/api.json'

export default {
  json: api,
  components: {
    CardService,
  },
}
</script>

<style scoped>
.cards-container {
  margin: 10px;
}
</style>
