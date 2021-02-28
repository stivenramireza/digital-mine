<template>
  <span>
    <v-icon color="white">mdi-cart</v-icon>
    <span class="dot">{{ items.length }}</span>
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
    return {}
  },
}
</script>
