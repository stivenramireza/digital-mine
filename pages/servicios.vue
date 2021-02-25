<template>
  <v-row align="center" justify="center">
    <div v-for="(item, index) in services" :key="index" class="mr-4">
      <CardService
        :name="item.name"
        :has-screens="item.hasScreens"
        :price="item.price"
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
        hasScreens: true,
        price: 10000,
        imageUrl:
          'https://deadline.com/wp-content/uploads/2020/07/netflix-logo.png',
      },
      {
        name: 'Amazon Prime',
        hasScreens: false,
        price: 10000,
        imageUrl:
          'https://sm.pcmag.com/t/pcmag_in/review/a/amazon-pri/amazon-prime-video_12d1.1920.jpg',
      },
      {
        name: 'HBO GO',
        price: 10000,
        hasScreens: false,
        imageUrl:
          'https://play-lh.googleusercontent.com/DVjzXMZfBfHvCrCrbpUVzaBUKYrFKK3RErhnqhAMG_TNfNTxAC6G_XwLV4ian2-7vg',
      },
      {
        name: 'Spotify Premium',
        price: 8000,
        hasScreens: false,
        imageUrl:
          'https://miracomosehace.com/wp-content/uploads/2020/03/Spotify-Premium.jpg',
      },
      {
        name: 'Crunchyroll',
        price: 10000,
        hasScreens: false,
        imageUrl:
          'https://www.muycomputer.com/wp-content/uploads/2020/10/crunchyroll.png',
      },
      {
        name: 'Disney Plus',
        price: 8000,
        hasScreens: true,
        imageUrl:
          'https://cdn.abcotvs.com/dip/images/5244277_041119-cc-disney-plus-key-art-img.jpg?w=1600',
      },
    ],
  }),
}
</script>
