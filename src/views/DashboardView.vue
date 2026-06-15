<script>

import HeaderComponent from '../components/HeaderComponent.vue'

import SidebarComponent from '../components/SidebarComponent.vue'

import FooterComponent from '../components/FooterComponent.vue'

export default {
  components: {
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  }
}

</script>
<template>
<div class="dashboard-wrapper">

  <HeaderComponent />
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-lg-3">
        <SidebarComponent />
      </div>
      <main class="col-12 col-lg-9 p-4">
        <router-view />
      </main>
    </div>
  </div>

  <FooterComponent />

</div>

</template>