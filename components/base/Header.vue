<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      app
      color="blue-grey darken-3 white--text"
      overlay-color="white"
    >
      <v-row align="center" justify="center" class="mt-5 mb-5">
        <img
          src="https://assets.stivenramireza.com/general/digital-mine/logo.png"
          alt="digital-mine-logo"
          width="50"
          height="50"
          class="navigation-icon"
          @click="$router.push('/')"
        />
      </v-row>
      <v-divider class="mx-4" color="white"></v-divider>
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.text"
          link
          @click="$router.push({ path: item.link })"
        >
          <v-list-item-action>
            <v-icon color="white">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="blue-grey darken-4" dense fixed clipped-left app>
      <v-app-bar-nav-icon color="white" @click.stop="drawer = !drawer" />
      <v-toolbar-title
        class="mr-5 align-center toolbar-title pl-0"
        @click="$router.push('/')"
      >
        <span class="title white--text">Digital Mine</span>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-title class="ml-5 align-center">
        <span
          class="header-item toolbar-options"
          @click="$router.push('/servicios')"
          >Servicios</span
        >
        <span class="header-item toolbar-options" @click="$router.push('/')"
          >Renovaciones</span
        >
        <span class="header-item toolbar-options" @click="$router.push('/')"
          >Contacto</span
        >
        <span class="header-item toolbar-options" @click="$router.push('/')"
          >Soporte</span
        >
        <span v-if="products.length !== 0" class="header-item">
          <Cart :items="products" />
        </span>
      </v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Cart from '@/components/common/Cart'

export default {
  components: {
    Cart,
  },
  data() {
    return {
      drawer: false,
      items: [
        { icon: 'mdi-television', text: 'Servicios', link: '/servicios' },
        { icon: 'mdi-calendar', text: 'Renovaciones', link: '/' },
        { icon: 'mdi-cellphone-android', text: 'Contacto', link: '/' },
        { icon: 'mdi-help-circle', text: 'Soporte', link: '/' },
      ],
    }
  },
  computed: {
    ...mapState({
      products: (state) => state.cart.products,
    }),
  },
}
</script>

<style>
.header-item {
  color: white;
  font-size: 16px;
  margin-left: 20px;
}
.header-item:hover {
  font-weight: bold;
  cursor: pointer;
}
.navigation-icon:hover {
  cursor: pointer;
}
.toolbar-title:hover {
  cursor: pointer;
}
.v-list-item .v-list-item__title {
  color: white;
}
.v-list-item:hover {
  background: #546e7a;
}
.dot-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.dot {
  background: red;
  border-radius: 50%;
  height: 26px;
  width: 26px;
  line-height: 26px;
  display: inline-block;
  text-align: center;
  margin-right: 6px;
  font-weight: bold;
}
@media (min-width: 320px) and (max-width: 700px) {
  .toolbar-options {
    display: none;
  }
}
</style>
