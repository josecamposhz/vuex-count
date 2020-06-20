<template>
  <v-row class="text-center">
    <v-col cols="12">
      <h1>Padre</h1>
    </v-col>
    <v-col cols="6">
      <h2>Sin Vuex</h2>
      <h2>{{ count }}</h2>
      <v-btn class="mx-2" color="warning" dark @click="setValue(-1)">Decrementar</v-btn>
      <v-btn class="mx-2" color="success" dark @click="setValue(1)">Incrementar</v-btn>
    </v-col>
    <v-col cols="6">
      <h2>Con Vuex</h2>
      <h2>{{ globalCount }}</h2>
      <v-btn class="mx-2" color="warning" dark @click="setCommit('decrementar')">Decrementar</v-btn>
      <v-btn class="mx-2" color="success" dark @click="setCommit('incrementar')">Incrementar</v-btn>
    </v-col>
    <v-divider dark />
    <Hijo :count="count" @multiplicar="multiplicar()" @dividir="dividir()" @reset="reset()" />
  </v-row>
</template>

<script>
import Hijo from "./Hijo";

export default {
  components: { Hijo },
  data: () => ({
    count: 0
  }),
  computed: {
    globalCount() {
      return this.$store.state.count;
    }
  },
  methods: {
    setValue(value) {
      this.count += value;
    },
    setCommit(type) {
      this.$store.commit(type);
    },
    multiplicar() {
      this.count *= 2;
    },
    dividir() {
      this.count /= 2;
    },
    reset() {
      this.count = 0;
    }
  }
};
</script>