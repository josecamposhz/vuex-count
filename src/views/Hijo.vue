<template>
  <v-row class="text-center">
    <v-col cols="12">
      <h1>Hijo</h1>
      <v-row>
        <v-col cols="6">
          <h2>Sin Vuex</h2>
          <h2>{{ localCount }}</h2>
          <v-btn class="mx-2" color="warning" dark @click="localDividir()">dividir</v-btn>
          <v-btn class="mx-2" color="success" dark @click="localMultiplicar()">multiplicar</v-btn>
        </v-col>
        <v-col cols="6">
          <h2>Con Vuex</h2>
          <h2>{{ count }}</h2>
          <v-btn class="mx-2" color="warning" dark @click="dividir()">dividir</v-btn>
          <v-btn class="mx-2" color="success" dark @click="multiplicar()">multiplicar</v-btn>
        </v-col>
      </v-row>
    </v-col>
    <Nieto :localCount="localCount" @reset="setEmit('reset')" />
  </v-row>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Nieto from "./Nieto";

export default {
  components: { Nieto },
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
    ...mapMutations(["multiplicar", "dividir"]),
    localMultiplicar() {
      /* Nos tirara error ya que una propiedad no puede ser modificada por el componente hijo */
      //this.localCount *= 2;

      this.setEmit("multiplicar");
    },
    localDividir() {
      /* Nos tirara error ya que una propiedad no puede ser modificada por el componente hijo */
      //this.localCount /= 2;

      this.setEmit("dividir");
    },
    setEmit(type) {
      /* Evento emitido hacia el componente padre  */
      this.$emit(type);
    }
  }
};
</script>