<template>
  <v-row align="center" justify="center">
    <div v-for="(item, index) in services" :key="index" class="mr-4">
      <CardService
        :id="item.id"
        :name="item.name"
        :has-screens="item.hasScreens"
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
        id: 1,
        name: 'Netflix',
        hasScreens: true,
        price: 10000,
        service:
          'Disfruta del mejor entretenimiento llevado de 1 a 5 pantallas.',
        imageUrl:
          'https://deadline.com/wp-content/uploads/2020/07/netflix-logo.png',
      },
      {
        id: 2,
        name: 'Amazon Prime',
        hasScreens: false,
        price: 10000,
        service: 'Acceso hasta 3 dispositivos al mismo tiempo.',
        imageUrl:
          'https://sm.pcmag.com/t/pcmag_in/review/a/amazon-pri/amazon-prime-video_12d1.1920.jpg',
      },
      {
        id: 3,
        name: 'HBO GO',
        price: 10000,
        hasScreens: false,
        service:
          'Acceso hasta 3 dispositivos para que compartas con tus seres queridos.',
        imageUrl:
          'https://play-lh.googleusercontent.com/DVjzXMZfBfHvCrCrbpUVzaBUKYrFKK3RErhnqhAMG_TNfNTxAC6G_XwLV4ian2-7vg',
      },
      {
        id: 4,
        name: 'Spotify Premium',
        price: 8000,
        hasScreens: false,
        service:
          'Descarga y escucha offline desde tu dispositivo y comparte tu música.',
        imageUrl:
          'https://miracomosehace.com/wp-content/uploads/2020/03/Spotify-Premium.jpg',
      },
      {
        id: 5,
        name: 'Crunchyroll',
        price: 10000,
        hasScreens: false,
        service:
          'Disfruta del mejor anime y series de manga al mejor estilo otaku.',
        imageUrl:
          'https://www.muycomputer.com/wp-content/uploads/2020/10/crunchyroll.png',
      },
      {
        id: 6,
        name: 'Disney Plus',
        price: 8000,
        hasScreens: true,
        service:
          'El mejor catálogo de series y películas de Marvel, Pixar y Start.',
        imageUrl:
          'https://cdn.abcotvs.com/dip/images/5244277_041119-cc-disney-plus-key-art-img.jpg?w=1600',
      },
    ],
  }),
}
</script>
