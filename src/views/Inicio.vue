<template>
  <div>
      <Carousel />
      <h4 class="title-store">Todos los productos</h4>
      <div class="row">
        <div
          class="col-sm mb-4 mb-md-0"
          v-for="(producto, $index) in $store.state.productos.todosLosProductos"
          :key="$index"
        >
          <TarjetaProducto :producto="producto" class="mx-auto" />
        </div>
    </div>
  </div>
</template>

<script>
import Carousel from '../components/App/Carousel.vue'
import TarjetaProducto from '../components/Productos/TarjetaProducto.vue'
export default {
  components: { TarjetaProducto, Carousel }
}
</script>

<style>
.title-store{
  text-align: center;
  margin: 40px 0 25px 0;
}
</style>
