export default {
    factorial(state) {
        if (state.count > 0) {
            let array = new Array(state.count)
            let fact = 1;
            for (let i = 1; i < array.length + 1; i++) {
                fact *= i
            }
            return `${state.count}! = ${fact}`
        }
        return "El contador es menor a 1"
    }
}
