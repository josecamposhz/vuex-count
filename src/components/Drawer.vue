<template>
  <v-navigation-drawer
    id="app-drawer"
    v-model="drawer"
    app
    dark
    floating
    persistent
    mobile-breakpoint="991"
    width="260"
  >
    <v-list class="py-0">
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/men/81.jpg" />
        </v-list-item-avatar>
        <v-list-item-title class="title">Application</v-list-item-title>
      </v-list-item>

      <v-divider />

      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>

export default {
  data: () => ({
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard" },
      { title: "Photos", icon: "mdi-image" },
      { title: "About", icon: "mdi-help-box" }
    ]
  }),
  computed: {
    drawer: {
      get () {
        return this.$store.state.drawer
      },
      set () {
        //this.setDrawer(val)
      }
    },
  },
  methods: {
    setDrawer () {
      this.$store.commit('setDrawer')
    }
  }
};
</script>
