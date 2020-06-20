<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />

      <v-img
        alt="Vuetify Name"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
        width="100"
      />
    </div>

    <v-spacer></v-spacer>

    <v-btn @click="setDrawer()" text>
      <span class="mr-2">{{ drawer ? 'Ocular Drawer' : 'Mostrar Drawer' }}</span>
      <v-icon>{{ drawer ? 'mdi-arrow-left' : 'mdi-arrow-right' }}</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  computed: {
    drawer() {
      return this.$store.state.drawer;
    }
  },
  methods: {
    setDrawer() {
      this.$store.commit("setDrawer");
    }
  }
};
</script>