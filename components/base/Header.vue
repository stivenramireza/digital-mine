<template>
  <div>
    <vs-navbar v-model="activeItem" class="nabarx">
      <div slot="title">
        <vs-navbar-title>
          Digital Mine
        </vs-navbar-title>
      </div>

      <vs-navbar-item index="0">
        <a href="#">Inicio</a>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <a href="#">Regístrate</a>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <a href="#">Inicia sesión</a>
      </vs-navbar-item>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  data:()=>({
    activeItem: 0
  })
}
</script>