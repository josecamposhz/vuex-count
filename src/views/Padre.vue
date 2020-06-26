<template>
  <v-row class="text-center">
    <v-col cols="12">
      <h3>Número Factorial del Contador: {{ factorial }}</h3>
      <h1>Padre</h1>
      <v-row>
        <v-col cols="6">
          <h2>Sin Vuex</h2>
          <h2>{{ localCount }}</h2>
          <v-btn class="mx-2" color="warning" dark @click="setValue(-1)">
            <span class="hidden-sm-down">Decrementar</span>
            <v-icon>mdi-minus</v-icon>
          </v-btn>
          <v-btn class="mx-2" color="success" dark @click="setValue(1)">
            <span class="hidden-sm-down">Incrementar</span>
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="6">
          <h2>Con Vuex</h2>
          <h2>{{ count }}</h2>
          <v-btn class="mx-2" color="warning" dark @click="decrementar()">
            <span class="hidden-sm-down">Decrementar</span>
            <v-icon>mdi-minus</v-icon>
          </v-btn>
          <v-btn class="mx-2" color="success" dark @click="incrementar()">
            <span class="hidden-sm-down">Incrementar</span>
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-col>

    <v-divider dark />
    <Hijo
      :localCount="localCount"
      @multiplicar="multiplicar()"
      @dividir="dividir()"
      @reset="reset()"
    />
  </v-row>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import Hijo from "./Hijo";

export default {
  components: { Hijo },
  data: () => ({
    localCount: 0
  }),
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["factorial"])
  },
  methods: {
    ...mapMutations(["incrementar", "decrementar"]),
    setValue(value) {
      this.localCount += value;
    },
    multiplicar() {
      this.localCount *= 2;
    },
    dividir() {
      this.localCount /= 2;
    },
    reset() {
      this.localCount = 0;
    }
  }
};
</script>