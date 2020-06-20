<template>
  <v-app>
    <Drawer />

    <Navbar />

    <v-main>
      <router-view />
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