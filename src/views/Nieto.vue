<template>
  <v-row class="text-center">
    <v-col cols="12">
      <h1>Nieto</h1>
      <v-row>
        <v-col cols="6">
          <h2>Sin Vuex</h2>
          <h2>{{ localCount }}</h2>
          <v-btn class="mx-2" color="error" dark @click="localReset()">Reset</v-btn>
        </v-col>
        <v-col cols="6">
          <h2>Con Vuex</h2>
          <h2>{{ count }}</h2>
          <v-btn class="mx-2" color="error" dark @click="reset()">Reset</v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  props: {
    localCount: {
      type: [Number],
      default: 0
    }
  },
  computed: {
    ...mapState(["count"])
  },
  methods: {
    ...mapMutations(["reset"]),
    localReset() {
      /* Nos tirara error ya que una propiedad no puede ser modificada por el componente hijo */
      //this.localCount = 0;

      /* Evento emitido hacia el componente padre  */
      this.setEmit("reset");
    },
    setEmit(type) {
      this.$emit(type);
    }
  }
};
</script>