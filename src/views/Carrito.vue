<template>
    <div class="row mt-5">
        <div class="col-md-5 cart-store">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Carrito</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Total de compra: {{$store.getters['carrito/totalTotal']}}</h6>
                     <button class="btn btn-store" @click="clickComprar">Comprar</button>
                </div>
             </div>
        </div>
        <div class="col-md-7">
            <Producto
            v-for="(producto, $index) in $store.state.carrito.todosLosProductos"
            :key="$index"
            :producto="producto"
            />
        </div>
    </div>
</template>

<script>
import Producto from '../components/Carrito/Producto.vue'
export default {
    name: 'Carrito',
    components: {
        Producto
    },
    methods: {
       async clickComprar(){
           await this.$store.dispatch('carrito/comprar')
           alert("Compra procesada, muchas gracias")
           this.$router.push("/")
        }
    },
};
</script>
<style lang="scss" scoped>
.btn-store{
  background-color: rgba(255,127,35,1);
  color: #fff;
}
</style>