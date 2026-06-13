<script>

import {

  getUsers,

  createUser,

  updateUser,

  deleteUser

}
from '../services/UserService'

export default {

  data(){

    return {

      usuarios: [],

      mensaje:'',

      tipo:'success',

      editando:false,

      usuarioActual:{

        username:'',

        password:'',

        rol:'usuario'

      },

      idEliminar:null

    }

  },

  mounted(){

    this.cargarUsuarios()

  },

  methods:{

    async cargarUsuarios(){

      const res =
      await getUsers()

      this.usuarios =
      res.data

    },

    abrirNuevo(){

      this.editando = false

      this.usuarioActual = {

        username:'',

        password:'',

        rol:'usuario'

      }

    },

    editarUsuario(usuario){

      this.editando = true

      this.usuarioActual = {

        ...usuario

      }

    },

    async guardarUsuario(){

      if(this.editando){

        await updateUser(

          this.usuarioActual.id,

          this.usuarioActual

        )

        this.mensaje =
        'Usuario actualizado'

      }

      else{

        await createUser(
          this.usuarioActual
        )

        this.mensaje =
        'Usuario creado'
      }

      this.tipo = 'success'

      this.cargarUsuarios()

    },

    confirmarEliminar(id){

      this.idEliminar = id

    },

    async eliminarUsuario(){

      await deleteUser(
        this.idEliminar
      )

      this.mensaje =
      'Usuario eliminado'

      this.tipo =
      'danger'

      this.cargarUsuarios()

    }

  }

}

</script>

<template>

<div class="container">

  <div
    class="d-flex
    justify-content-between
    align-items-center
    mb-4"
  >

    <h2>

      <i class="bi bi-people"></i>

      Usuarios

    </h2>

    <button

      class="btn btn-success"

      data-bs-toggle="modal"

      data-bs-target="#usuarioModal"

      @click="abrirNuevo"

    >

      <i class="bi bi-plus-circle"></i>

      Nuevo Usuario

    </button>

  </div>

  <div

    v-if="mensaje"

    :class="`alert alert-${tipo}`"

  >

    {{ mensaje }}

  </div>

  <table
    class="table table-striped"
  >

    <thead>

      <tr>

        <th>ID</th>

        <th>Usuario</th>

        <th>Rol</th>

        <th>Acciones</th>

      </tr>

    </thead>

    <tbody>

      <tr

        v-for="usuario in usuarios"

        :key="usuario.id"

      >

        <td>{{ usuario.id }}</td>

        <td>{{ usuario.username }}</td>

        <td>{{ usuario.rol }}</td>

        <td>

          <button

            class="btn btn-warning btn-sm me-2"

            data-bs-toggle="modal"

            data-bs-target="#usuarioModal"

            @click="editarUsuario(usuario)"

          >

            <i
              class="bi bi-pencil-square"
            ></i>

          </button>

          <button

            class="btn btn-danger btn-sm"

            data-bs-toggle="modal"

            data-bs-target="#eliminarModal"

            @click="confirmarEliminar(usuario.id)"

          >

            <i
              class="bi bi-trash"
            ></i>

          </button>

        </td>

      </tr>

    </tbody>

  </table>

  <!-- MODAL USUARIO -->

  <div

    class="modal fade"

    id="usuarioModal"

    tabindex="-1"

  >

    <div class="modal-dialog">

      <div class="modal-content">

        <div class="modal-header">

          <h5>

            {{
              editando
              ? 'Editar Usuario'
              : 'Nuevo Usuario'
            }}

          </h5>

        </div>

        <div class="modal-body">

          <input

            v-model="usuarioActual.username"

            class="form-control mb-3"

            placeholder="Usuario"

          >

          <input

            v-model="usuarioActual.password"

            class="form-control mb-3"

            placeholder="Contraseña"

          >

          <select

            v-model="usuarioActual.rol"

            class="form-control"

          >

            <option value="admin">

              Admin

            </option>

            <option value="usuario">

              Usuario

            </option>

          </select>

        </div>

        <div class="modal-footer">

          <button

            class="btn btn-success"

            data-bs-dismiss="modal"

            @click="guardarUsuario"

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

    id="eliminarModal"

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

          ¿Desea eliminar este usuario?

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

            @click="eliminarUsuario"

          >

            Eliminar

          </button>

        </div>

      </div>

    </div>

  </div>

</div>

</template>