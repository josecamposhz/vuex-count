import axios from 'axios'

export default {
  async getUser(context) {
    return await axios.get('https://randomuser.me/api/').then(response => {
      // Guardamos la información del usuario obtenido
      let data = response.data.results[0]
      // Guardamos el nombre y la imagen del usuario obtenido
      let user = {
        name: `${data.name.first} ${data.name.last}`,
        picture: data.picture.large
      }
      // Lo seteamos con el mutation "setUser"
      context.commit('setUser', user)
    })
  }
}