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

      <h1 class="navbar-title fw-light">Vuex Example</h1>
    </div>

    <v-spacer></v-spacer>

    <v-btn
      text
      href="https://github.com/JoseCamposhz/vuex-count"
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub
      <v-icon>mdi-github</v-icon>
    </v-btn>

    <v-btn @click="setDrawer(!drawer)" text>
      <span>{{ drawer ? 'Ocular Drawer' : 'Mostrar Drawer' }}</span>
      <v-icon>{{ drawer ? 'mdi-arrow-left' : 'mdi-arrow-right' }}</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
// Utilities
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["drawer"])
  },
  methods: {
    ...mapMutations(["setDrawer"])
  }
};
</script>

<style scoped>
.fw-light {
  font-weight: 400;
}

@media (max-width: 768px) {
  .navbar-title {
    font-size: 1.5em !important;
    line-height: 0.75em !important;
  }
}
</style>