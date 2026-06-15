<script>

import {

  getProducts,

  createProduct,

  updateProduct,

  deleteProduct

}

from '../services/ProductService'

export default {

  data(){

    return{

      productos: [],

      mensaje:'',

      tipo:'success',

      editando:false,

      productoActual:{

        nombre:'',

        precio:'',

        descripcion:'',

        categoria:'',

        imagen:''

      },

      idEliminar:null,

      esAdmin:false

    }

  },

  async mounted(){

    await this.cargarProductos()

    this.esAdmin =

    localStorage.getItem('rol')

    ===

    'admin'

  },

  methods:{

    async cargarProductos(){

      const response =

      await getProducts()

      this.productos =

      response.data

    },

    abrirNuevo(){

      this.editando = false

      this.productoActual = {

        nombre:'',

        precio:'',

        descripcion:'',

        categoria:'',

        imagen:''

      }

    },

    editarProducto(producto){

      this.editando = true

      this.productoActual = {

        ...producto

      }

    },

    async guardarProducto(){

      if(this.editando){

        await updateProduct(

          this.productoActual.id,

          this.productoActual

        )

        this.mensaje =

        'Producto actualizado'

      }

      else{

        await createProduct(

          this.productoActual

        )

        this.mensaje =

        'Producto creado'

      }

      this.tipo = 'success'

      await this.cargarProductos()

    },

    confirmarEliminar(id){

      this.idEliminar = id

    },

    async eliminarProducto(){

      await deleteProduct(

        this.idEliminar

      )

      this.mensaje =

      'Producto eliminado'

      this.tipo = 'danger'

      await this.cargarProductos()

    }

  }

}

</script>

<template>


<div class="container">

  <div class="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 mb-4">
    <div>
      <h2 class="fw-semibold mb-0">Productos</h2>
      <p class="text-muted small mb-0">Gestión de productos</p>
    </div>
    <div>
      <button v-if="esAdmin" class="btn btn-primary w-100 w-sm-auto" data-bs-toggle="modal" data-bs-target="#productoModal" @click="abrirNuevo">
        <i class="bi bi-plus-circle me-1"></i>
        Nuevo Producto
      </button>
    </div>
  </div>

  <div

    v-if="mensaje"

    :class="`alert alert-${tipo}`"

  >

    {{ mensaje }}

  </div>

  <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
    <div v-for="producto in productos" :key="producto.id" class="col">
      <div class="card h-100 shadow-sm">
        <img :src="producto.imagen" class="card-img-top" style="height:220px;object-fit:cover" />
        <div class="card-body d-flex flex-column">
          <h5 class="fw-semibold">{{ producto.nombre }}</h5>
          <p class="text-muted mb-3">{{ producto.descripcion }}</p>
          <div class="d-flex justify-content-between align-items-center mt-auto">
            <strong class="text-primary">$ {{ producto.precio }}</strong>
            <span class="badge bg-primary">{{ producto.categoria }}</span>
          </div>
        </div>
        <div v-if="esAdmin" class="card-footer">
          <button class="btn btn-outline-primary me-2" data-bs-toggle="modal" data-bs-target="#productoModal" @click="editarProducto(producto)"><i class="bi bi-pencil-square"></i></button>
          <button class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#eliminarProductoModal" @click="confirmarEliminar(producto.id)"><i class="bi bi-trash"></i></button>
        </div>
      </div>
    </div>
  </div>

  <!-- MODAL PRODUCTO -->

  <div

    class="modal fade"

    id="productoModal"

    tabindex="-1"

  >

    <div class="modal-dialog">

      <div class="modal-content">

        <div class="modal-header">

          <h5>

            {{

              editando

              ?

              'Editar Producto'

              :

              'Nuevo Producto'

            }}

          </h5>

        </div>

        <div class="modal-body">

          <input

            v-model="productoActual.nombre"

            class="form-control mb-3"

            placeholder="Nombre"

          >

          <input

            v-model="productoActual.precio"

            class="form-control mb-3"

            placeholder="Precio"

          >

          <input

            v-model="productoActual.categoria"

            class="form-control mb-3"

            placeholder="Categoría"

          >

          <input

            v-model="productoActual.imagen"

            class="form-control mb-3"

            placeholder="URL Imagen"

          >

          <textarea

            v-model="productoActual.descripcion"

            class="form-control"

            placeholder="Descripción"

          ></textarea>

        </div>

        <div class="modal-footer">

          <button

            class="btn btn-success"

            data-bs-dismiss="modal"

            @click="guardarProducto"

          >

            Guardar

          </button>

        </div>

      </div>

    </div>

  </div>

  <!-- MODAL ELIMINAR -->

  <div

    class="modal fade"

    id="eliminarProductoModal"

    tabindex="-1"

  >

    <div class="modal-dialog">

      <div class="modal-content">

        <div class="modal-header">

          <h5>

            Confirmar eliminación

          </h5>

        </div>

        <div class="modal-body">

          ¿Desea eliminar este producto?

        </div>

        <div class="modal-footer">

          <button

            class="btn btn-secondary"

            data-bs-dismiss="modal"

          >

            Cancelar

          </button>

          <button

            class="btn btn-danger"

            data-bs-dismiss="modal"

            @click="eliminarProducto"

          >

            Eliminar

          </button>

        </div>

      </div>

    </div>

  </div>

</div>

</template>