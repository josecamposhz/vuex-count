<template>
  <v-row class="text-center">
    <v-col cols="12">
      <h1>Nieto</h1>
    </v-col>
    <v-col cols="6">
      <h2>Sin Vuex</h2>
      <h2>{{ count }}</h2>
      <v-btn class="mx-2" color="error" dark @click="reset()">Reset</v-btn>
    </v-col>
    <v-col cols="6">
      <h2>Con Vuex</h2>
      <h2>{{ globalCount }}</h2>
      <v-btn class="mx-2" color="error" dark @click="setCommit('reset')">Reset</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    count: {
      type: [Number],
      default: 0
    }
  },
  computed: {
    globalCount() {
      return this.$store.state.count;
    }
  },
  methods: {
    reset() {
      /* Nos tirara error ya que una propiedad no puede ser modificada por el componente hijo */
      //this.count = 0;

      /* Evento emitido hacia el componente padre  */
      this.setEmit('reset');
    },
    setEmit(type) {
      this.$emit(type);
    },
    setCommit(type) {
      this.$store.commit(type);
    }
  }
};
</script>