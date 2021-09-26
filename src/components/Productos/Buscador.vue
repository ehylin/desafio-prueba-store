<template>
    <div>

    <div>
        <h3>Filtro</h3>
      <input
        type="text"
        id="nombre"
        name="nombre"
        placeholder="Escriba el nombre del producto"
        :value="$store.state.productos.busqueda"
        @input="$store.dispatch('productos/setBusqueda', $event.target.value)"
      />
     
      <ProductoFiltro
            v-if="$store.getters['productos/productoSegunBusqueda'].length > 0" 
            :productos="$store.getters['productos/productoSegunBusqueda']" 
            
            class="mx-auto" 
          />
           <ul v-else>
            <li>Escribe algo para buscar</li>
            </ul>
   </div>   

    </div>
</template>

<script>
import ProductoFiltro from './ProductoFiltro.vue'
export default {
    name: 'Buscador',
    components: {ProductoFiltro},

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>