<template>
  <v-carousel
    cycle
    hide-delimiter-background
    show-arrows-on-hover
    hide-delimiters
  >
    <v-carousel-item
      v-for="(item, index) in slides"
      :key="index"
      :src="item.src"
    >
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          src:
            'https://d500.epimg.net/cincodias/imagenes/2019/07/11/lifestyle/1562841657_226036_1562841728_noticia_normal.jpg',
        },
        {
          src:
            'https://www.bbva.com/wp-content/uploads/2020/04/streaming-HBO-PLATAFORMAS-Netflix-Disney-1920x1180.jpg',
        },
        {
          src:
            'https://blog.formaciongerencial.com/wp-content/uploads/2020/01/Streaming-Wars-Ecuador.png',
        },
      ],
    }
  },
}
</script>
