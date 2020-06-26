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

<style >
.v-application code {
  color: #f8f8f2 !important;
  background: 0 0 !important;
  background-color: initial !important;
  font-size: 1em !important;
  font-weight: normal !important;
}
</style>