<template>
  <v-app>
    <Drawer />

    <Navbar />

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Drawer from "./components/Drawer";

export default {
  name: "App",

  components: {
    Navbar,
    Drawer
  },
  data: () => ({
    //
  })
};
</script>

<style>
.v-application code {
  color: #f8f8f2 !important;
  background: 0 0 !important;
  background-color: initial !important;
  font-size: 1em !important;
  font-weight: normal !important;
}
.v-btn {
  margin-top: 2px;
  margin-bottom: 2px;
}

.v-icon { margin-left: 8px; }

@media (max-width: 768px) {
  .hidden-sm-down {
    display: none !important;
  }
}

@media (min-width: 769px) {
  .hidden-sm-up {
    display: none !important;
  }
}
</style>