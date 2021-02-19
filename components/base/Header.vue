<template>
  <div>
    <v-navigation-drawer v-model="drawer" fixed clipped app>
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.text"
          link
          @click="$router.push({ path: item.link })"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="deep-purple darken-4" dense fixed clipped-left app>
      <v-app-bar-nav-icon color="white" @click.stop="drawer = !drawer" />
      <v-toolbar-title class="mr-5 align-center">
        <span class="title white--text">Digital Mine</span>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-title class="mr-5 align-center">
        <span class="header-item" to="/servicios">Servicios</span>
        <span class="header-item">Renovaciones</span>
        <span class="header-item">Contacto</span>
      </v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { icon: 'mdi-home', text: 'Inicio', link: '/' },
        { icon: 'mdi-television', text: 'Servicios', link: '/servicios' },
        { icon: 'mdi-calendar', text: 'Renovaciones', link: '/' },
        { icon: 'mdi-cellphone-android', text: 'Contacto', link: '/' },
      ],
    }
  },
}
</script>

<style scoped>
.header-item {
  color: white;
  font-size: 16px;
  margin-right: 12px;
}
.header-item:hover {
  font-weight: bold;
  cursor: pointer;
}
</style>
