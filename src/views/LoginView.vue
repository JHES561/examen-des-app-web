<script>

import {
  loginUser
}
from '../services/AuthService'

export default {

  data(){

    return{

      usuario:'',
      password:'',
      error:''

    }

  },

  methods:{

    async login(){

      try{

        const usuario =
        await loginUser(

          this.usuario,

          this.password

        )

        if(usuario){

          localStorage.setItem(

            'usuario',

            usuario.username

          )

          localStorage.setItem(

            'rol',

            usuario.rol

          )

          localStorage.setItem(

            'token',

            'token_simulado'

          )

          this.$router.push(
            '/dashboard/productos'
          )

        }

        else{

          this.error =
          'Credenciales incorrectas'

        }

      }

      catch(error){

        this.error =
        'Error de conexión'

      }

    }

  }

}

</script>

<template>

<div class="login-wrapper">

  <div class="login-card">

    <h2 class="mb-4">

      Iniciar Sesión

    </h2>

    <div
      v-if="error"
      class="alert alert-danger"
    >

      {{ error }}

    </div>

    <input

      v-model="usuario"

      class="form-control mb-3"

      placeholder="Usuario"

    >

    <input

      v-model="password"

      type="password"

      class="form-control mb-3"

      placeholder="Contraseña"

    >

    <button

      class="btn btn-danger w-100"

      @click="login"

    >

      Ingresar

    </button>

  </div>

</div>

</template>