<template>
  <v-carousel
    cycle
    hide-delimiter-background
    show-arrows-on-hover
    hide-delimiters
    fullscreen
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
            'https://www.experta.com.ar/blogg/wp-content/uploads/sites/2/2021/01/nota-streaming.jpg',
        },
        {
          src:
            'https://www.notigape.com/thumburl/thumbnail/900x506/outbound/uploads/photos/8EXEIlljDl1xwApTFeRn.jpg',
        },
        {
          src:
            'https://laopinion.com/wp-content/uploads/sites/3/2016/09/shutterstock_262337219.jpg?quality=80&strip=all&w=1000',
        },
      ],
    }
  },
}
</script>
