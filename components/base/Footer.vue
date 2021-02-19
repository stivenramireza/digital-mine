<template>
  <v-footer dark padless>
    <v-card class="card-container">
      <v-card-text class="card-text-container">
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
      <v-card-text class="card-text-container">
        © {{ new Date().getFullYear() }} Digital Mine
      </v-card-text>
      <v-btn
        fab
        absolute
        top
        right
        href="https://wa.me/573117689541"
        target="_blank"
        color="green"
      >
        <v-icon>mdi-whatsapp</v-icon>
      </v-btn>
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

<style lang="scss">
.card-container {
  width: 100%;
}
.divider-container {
  background: white;
}
.card-text-container {
  display: flex;
  justify-content: center;
  background: #311b92;
  color: white;
  font-size: 16px;
}
</style>
