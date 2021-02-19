<template>
  <v-row align="center" justify="center">
    <div v-for="(item, index) in services" :key="index" class="mr-4">
      <CardService
        :name="item.name"
        :price="item.price"
        :service="item.service"
        :image-url="item.imageUrl"
      />
    </div>
  </v-row>
</template>

<script>
import CardService from '@/components/common/CardService'

export default {
  components: {
    CardService,
  },
  data: () => ({
    services: [
      {
        name: 'Netflix',
        price: 8000,
        service: '1 pantalla',
        imageUrl:
          'https://deadline.com/wp-content/uploads/2020/07/netflix-logo.png',
      },
      {
        name: 'Amazon Prime',
        price: 10000,
        service: '3 pantallas',
        imageUrl:
          'https://sm.pcmag.com/t/pcmag_in/review/a/amazon-pri/amazon-prime-video_12d1.1920.jpg',
      },
      {
        name: 'HBO GO',
        price: 8000,
        service: '1 pantalla',
        imageUrl:
          'https://play-lh.googleusercontent.com/DVjzXMZfBfHvCrCrbpUVzaBUKYrFKK3RErhnqhAMG_TNfNTxAC6G_XwLV4ian2-7vg',
      },
      {
        name: 'Spotify Premium',
        price: 8000,
        service: '1 cuenta',
        imageUrl:
          'https://miracomosehace.com/wp-content/uploads/2020/03/Spotify-Premium.jpg',
      },
      {
        name: 'Crunchyroll',
        price: 8000,
        service: '1 pantalla',
        imageUrl:
          'https://www.muycomputer.com/wp-content/uploads/2020/10/crunchyroll.png',
      },
      {
        name: 'Disney Plus',
        price: 8000,
        service: '1 pantalla',
        imageUrl:
          'https://cdn.abcotvs.com/dip/images/5244277_041119-cc-disney-plus-key-art-img.jpg?w=1600',
      },
    ],
  }),
}
</script>
