<script>

export default {
  computed: {
    usuario(){
      return localStorage.getItem('usuario')
    }
  },

  methods: {
  cerrarSesion(){

    localStorage.removeItem('usuario')

    localStorage.removeItem('token')

    this.$router.push('/login')

  }
  }
}
</script>
<template>
  <nav class="navbar navbar-expand-lg bg-white border-bottom shadow-sm">
    <div class="container-fluid">
      <a class="navbar-brand d-flex align-items-center gap-2" href="#">
        <i class="bi bi-box-seam fs-4 text-primary"></i>
        <div class="d-flex flex-column">
          <span class="fw-semibold">SalMendra</span>
          <small class="text-muted">Sistema de gestión</small>
        </div>
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
        <span class="navbar-toggler-icon"><i class="bi bi-list"></i></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav align-items-center gap-2">
          <li class="nav-item">
            <span class="nav-link text-muted d-flex align-items-center gap-2">
              <i class="bi bi-person"></i>
              {{ usuario }}
            </span>
          </li>
          <li class="nav-item">
            <button class="btn btn-outline-primary" @click="cerrarSesion">
              <i class="bi bi-box-arrow-right me-1"></i>
              Cerrar sesión
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>