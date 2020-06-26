<template>
  <v-container>
    <h1 class="text-center">Vuex</h1>
    <p>
      <strong>Vuex</strong> se define a sí mismo como una librería de control del patrón de estado.
      Esto permite solucionar la gran problemática de compartir demasiado estados comunes entre diferentes componentes.
      En pocas palabras
      <strong>vuex</strong> permite la gestión de variables globales que son utilizadas por diferentes componentes
      de nuestra aplicación.
    </p>
    <h2>Conceptos básicos:</h2>
    <h3>Estado (state)</h3>
    <p>
      Vuex utiliza un “single state tree”, un objeto simple que contiene los valores que se
      definen en una aplicación. La librería lo define con “la única fuente de verdad”, es
      decir, es el único lugar, específicamente un archivo (store.js), donde consultar estos
      valores. Aclarar que State es el conjunto de variable, datos y constantes que usa la
      aplicación para sus operaciones.
    </p>
    <p>
      Nota: Los componentes no pueden modificar el valor de estado directamente.
      Todos los cambios de estado se deben realizar mediante las mutations.
    </p>
    <h3>Getters</h3>
    <p>
      Vuex permite crear “getters” (captadores) dentro de Store.js, esto son variable
      calculadas, derivadas de alguna otra variable definida en el State. Este apartado opera
      del mismo modo que computed, de un componente Vue.
    </p>
    <p>
      Nota: Su uso es recomendado cuando un mismo “calculo” de dato (un filtro por
      ejemplo) se requiere en distintos componentes, lo que generaría un redundancia de
      código.
    </p>
    <h3>Mutations</h3>
    <p>
      Las variables que sean definidas en State, estarán disponible para todos los
      elementos de la aplicación; sin embargo, modificar un dato desde uno de estos, no
      será percibido por el resto, ya que Vuex mantiene los datos aislados en Store y solo
      pueden ser alterados desde este, específicamente, mediante una mutación.
    </p>
    <p>
      Un mutación es una función que puede cambiar el valor de una variable defina (un
      state); por lo cual, el código de cada una de estas debe limitarse al manejo y alteración
      de los datos.
    </p>
    <h3>Actions</h3>
    <p>
      Las Actions (Acciones) son similares a las Mutations, no obstante, no cumple el mismo
      propósito, ya que no alteran el “state”, más bien cumple la función de generar la
      comunicación con el Backend (lado del servidor), con tal de obtener los datos para la
      aplicación y manipularlas a través de las mutaciones, es decir, pueden ejecutar
      mutaciones (una o varios).
    </p>
    <p>
      Además las acciones pueden contener operaciones de tipo asíncrono, esencial para
      comunicaciones con un servidor.
    </p>
    <h3>Modules</h3>
    <p>
      Debido a que Vuex trabaja sobre un solo archivo, <i>Store.js</i>, a medida que el desarrollo
      continúa y el proyecto crece tanto en escala como en código, el contenido de <i>State,
      Getters, Mutations y Actions</i> puede volverse difícil de administrar; ante tal panorama,
      la librería proponer modular el contenido de Store.
    </p>
    <p>
      Un module o módulo es una separación de Store, como un archivo independiente o
      dentro del mismo, que posee la misma estructura que el original (State, Mutations,
      etc.), que debe ser llamado para su utilización, según lo determine el programador.
      De esta manera, se evita saturar las distintas secciones con código para distintos
      propósitos que pueden afectar a la gestión y mantenimiento del mismo.
    </p>
    <h3>Ayudantes Map…</h3>
    <p>
      Con tal de evitar escribir la misma línea de código una y otras vez, sea el caso, al
      mismo tiempo que se reduce la extensión de la línea de código; Vuex recurre a los
      Helpers o ayudantes, donde cada sección tiene uno propio:
    </p>
    <ul>
      <li>mapState</li>
      <li>mapGetters</li>
      <li>mapMutations</li>
      <li>mapActions</li>
    </ul>
    <p>Nuevamente, la única finalidad de estos “ayudantes” es ser un atajo a las secciones del Store.js.</p>
  </v-container>
</template>

<style scoped>
.m-auto {
  margin: auto;
}
</style>