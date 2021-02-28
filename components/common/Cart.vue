<template>
  <span>
    <v-menu open-on-hover offset-y color="blue-grey darken-4 white--text">
      <template #activator="{ on, attrs }">
        <span v-bind="attrs" v-on="on">
          <v-icon color="white">mdi-cart</v-icon>
          <span class="dot">{{ items.length }}</span>
        </span>
      </template>
      <v-card color="blue-grey darken-4 white--text">
        <v-list color="blue-grey darken-4">
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            color="white"
          >
            <v-img
              :src="item.imageUrl"
              width="30"
              height="30"
              class="mr-2"
            ></v-img>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-divider class="mx-4" color="white"></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="white" text @click="$router.push('/carrito')"
            ><v-icon left>mdi-cart</v-icon> Comprar</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-menu>
  </span>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      fav: true,
      menu: false,
      message: false,
      hints: true,
    }
  },
}
</script>
