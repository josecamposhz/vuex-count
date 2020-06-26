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

      <h1 class="fw-light">Vuex Example</h1>
    </div>

    <v-spacer></v-spacer>

    <v-btn text href="https://github.com/JoseCamposhz/vuex-count" target="_blank" rel="noopener noreferrer">
      GitHub
      <v-icon class="ml-2">mdi-github</v-icon>
    </v-btn>

    <v-btn @click="setDrawer()" text>
      <span class="mr-2">{{ drawer ? 'Ocular Drawer' : 'Mostrar Drawer' }}</span>
      <v-icon>{{ drawer ? 'mdi-arrow-left' : 'mdi-arrow-right' }}</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
// Utilities
import {
  mapMutations
} from 'vuex'

export default {
  computed: {
    drawer() {
      return this.$store.state.drawer;
    }
  },
  methods: {
    ...mapMutations(['setDrawer'])
  }
};
</script>

<style scoped>
.fw-light {
  font-weight: 400;
}
</style>