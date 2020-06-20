<template>
  <v-row class="text-center">
    <v-col cols="12">
      <h1>Hijo</h1>
    </v-col>
    <v-col cols="6">
      <h2>Sin Vuex</h2>
      <h2>{{ count }}</h2>
      <v-btn class="mx-2" color="warning" dark @click="dividir()">dividir</v-btn>
      <v-btn class="mx-2" color="success" dark @click="multiplicar()">multiplicar</v-btn>
    </v-col>
    <v-col cols="6">
      <h2>Con Vuex</h2>
      <h2>{{ globalCount }}</h2>
      <v-btn class="mx-2" color="warning" dark @click="setCommit('dividir')">dividir</v-btn>
      <v-btn class="mx-2" color="success" dark @click="setCommit('multiplicar')">multiplicar</v-btn>
    </v-col>
    <Nieto :count="count" @reset="setEmit('reset')"/>
  </v-row>
</template>

<script>
import Nieto from "./Nieto";

export default {
  components: { Nieto },
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
    multiplicar() {
      /* Nos tirara error ya que una propiedad no puede ser modificada por el componente hijo */
      //this.count *= 2;

      this.setEmit('multiplicar')
    },
    dividir() {
      /* Nos tirara error ya que una propiedad no puede ser modificada por el componente hijo */
      //this.count /= 2;
      
      this.setEmit('dividir')
    },
    setEmit(type) {
      /* Evento emitido hacia el componente padre  */
      this.$emit(type);
    },
    setCommit(type) {
      this.$store.commit(type);
    }
  }
};
</script>