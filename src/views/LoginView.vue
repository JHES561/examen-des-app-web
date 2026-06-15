<script>

export default {
  data(){
    return {
      usuario:'',
      password:'',
      error:''
    }
  },

  methods: {

login(){

if(

  this.usuario === 'admin'
  &&

  this.password === '1234'

){

  localStorage.setItem(
    'usuario',
    'admin'
  )

  localStorage.setItem(
    'rol',
    'admin'
  )

  localStorage.setItem(
    'token',
    'token_simulado'
  )

  this.$router.push(
    '/dashboard/productos'
  )

  }

  else if(

    this.usuario === 'usuario'
    &&

    this.password === '1234'

  ){

localStorage.setItem(
  'usuario',
  'usuario'
)

localStorage.setItem(
  'rol',
  'usuario'
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
  }
}
</script>

<template>
  <div class="d-flex align-items-center justify-content-center min-vh-100 bg-light">
    <div class="card shadow-sm" style="max-width:420px;width:100%;">
      <div class="card-body p-4">
        <h3 class="fw-semibold mb-3">SalMendra</h3>
        <p class="text-muted small">Sistema administrativo para gestión de productos.</p>

        <div class="mt-4">
          <input v-model="usuario" class="form-control mb-3" placeholder="Usuario">
          <input v-model="password" type="password" class="form-control mb-3" placeholder="Contraseña">
          <button class="btn btn-primary w-100" @click="login">Ingresar</button>
          <p class="text-danger mt-3">{{ error }}</p>
        </div>
      </div>
    </div>
  </div>
</template>