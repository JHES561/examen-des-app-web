<script>
export default {
  props: [
    'producto',
    'esAdmin'
  </script>
  <template>
    <div class="card h-100 border shadow-sm">
      <img :src="producto.imagen" class="card-img-top img-fluid" @error="e => e.target.src='https://placehold.co/400x300?text=Producto'" style="height:220px;object-fit:cover">
      <div class="card-body d-flex flex-column">
        <span class="badge bg-primary mb-2">{{ producto.categoria }}</span>
        <h5 class="card-title fw-semibold">{{ producto.nombre }}</h5>
        <p class="card-text text-muted mb-3">{{ producto.descripcion }}</p>
        <div class="mt-auto d-flex justify-content-between align-items-center">
          <strong class="text-primary">$ {{ producto.precio }}</strong>
          <div v-if="esAdmin">
            <button class="btn btn-outline-primary btn-sm me-2" @click="$emit('editar')"><i class="bi bi-pencil-square"></i></button>
            <button class="btn btn-outline-danger btn-sm" @click="$emit('eliminar')"><i class="bi bi-trash"></i></button>
          </div>
        </div>
      </div>
    </div>
  </template>
  ></i>

</button>
      </div>
    </div>
  </div>
</div>
</template>