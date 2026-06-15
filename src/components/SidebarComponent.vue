<template>
  <nav class="bg-white border-end p-3">
    <h6 class="text-muted">MENÚ</h6>
    <ul class="nav flex-column mt-2">
      <li class="nav-item">
        <router-link to="/dashboard/productos" class="nav-link text-dark">
          <i class="bi bi-box-seam me-2"></i> Productos
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/dashboard/usuarios" class="nav-link text-dark">
          <i class="bi bi-people me-2"></i> Usuarios
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/dashboard/contacto" class="nav-link text-dark">
          <i class="bi bi-telephone me-2"></i> Contacto
        </router-link>
      </li>
    </ul>
  </nav>
</template>