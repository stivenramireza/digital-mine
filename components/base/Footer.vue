<template>
  <v-footer dark padless>
    <v-card
      flat
      tile
      class="blue-grey darken-4 white--text text-center card-container"
    >
      <v-card-text>
        <v-btn
          v-for="(item, index) in icons"
          :key="index"
          :href="item.link"
          target="_blank"
          icon
        >
          <v-icon size="35px">
            {{ item.name }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        © {{ $store.state.currentYear }} <strong>Digital Mine</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      {
        name: 'mdi-facebook',
        link: 'https://www.facebook.com/Mine.digitaltec/',
      },
      {
        name: 'mdi-instagram',
        link: 'https://www.instagram.com/digital.mine/',
      },
      {
        name: 'mdi-whatsapp',
        link: 'https://wa.me/573117689541',
      },
    ],
  }),
}
</script>

<style scoped>
.card-container {
  width: 100%;
}
</style>
