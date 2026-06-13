<template>

<aside class="sidebar-wrapper">

  <div class="sidebar-section">

    <p class="sidebar-section-title">
      MENÚ
    </p>

    <router-link
      to="/dashboard/productos"
      class="sidebar-link"
    >
      <i class="bi bi-box-seam"></i>
      Productos
    </router-link>

    <router-link
      to="/dashboard/usuarios"
      class="sidebar-link"
    >
      <i class="bi bi-people"></i>
      Usuarios
    </router-link>

    <router-link
      to="/dashboard/contacto"
      class="sidebar-link"
    >
      <i class="bi bi-telephone"></i>
      Contacto
    </router-link>

  </div>

</aside>

</template>