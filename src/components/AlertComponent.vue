<template>

<div
  v-if="mensaje"
  :class="`alert alert-${tipo}`"
>

  {{ mensaje }}

</div>

</template>

<script>

export default {

  props: {

    mensaje: String,

    tipo: String

  }

}

</script>