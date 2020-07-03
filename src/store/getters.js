export default {
    factorial(state) {
        if (state.count > 0) {
            // forma simple de calcular el factorial de un número
            /* let array = new Array(state.count) 
            let fact = 1;
            for (let i = 1; i < array.length + 1; i++) {
                fact *= i
            } */

            // creamos un arreglo de largo state.count y con fill(1) llenamos cada elemento del arreglo con un 1, esto se debe realizar para poder hacer uso de map()
            // let array = new Array(state.count).fill(1);
            // con el map(), cambiamos los valores de cada elemento incrementalmente desde 1 a n
            // let array = array.map((val, idx) => idx + 1);

            // creamos un arreglo con EC6 y realizamos el map() directamente
            let array = [...Array(state.count)].map((val, idx) => idx + 1);

            // función que utilizaremos en nuestro reducer
            const reducer = (acumulador, valorActual) => acumulador * valorActual;
            // El método reduce() ejecuta una función reductora sobre cada elemento de un array y nos devuelve un valor único
            // En este caso la función reducer, se ejecutara por cada elemento y su calculo se irá guardando en el acumulador
            // Por último le asignamos a nuestro reduce el valor inicial de 1
            const valorInicial = 1;
            const res = array.reduce(reducer, valorInicial);
            // Ej: Si el state.count es igual 3 se creara el siguiente array: [1, 2, 3]
            // Iteraciones
            // 1ra => acc = 1 y valorActual = 1 => acc = 1
            // 2da => acc = 1 y valorActual = 2 => acc = 2
            // 3ra => acc = 2 y valorActual = 3 => acc = 6

            return `${state.count}! = ${res}`
        }
        return "El contador es menor a 1"
    }
}
