<template>
    <div>
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                <img :src="producto.imagen" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{producto.nombre}}</h5>
                    <p class="card-text">$ {{producto.precio}}</p>
                    <div class="row align-items-center">
                        <p class="card-text mb-0 mr-4"><small class="text-muted">Cantidad: {{producto.cantidad}}</small></p>
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button class="btn btn-info" @click="$store.dispatch('carrito/agregarProducto', producto)">+</button>
                            <button class="btn btn-info" @click="$store.dispatch('carrito/quitarProducto', producto)">-</button>
                        </div>
                    </div>
                    <p class="card-text">SubTotal : $ {{(producto.cantidad * producto.precio).toLocaleString('de-DE')}}</p>
                    <p class="card-text">
                        Total: ${{
                            parseInt(producto.precio * (1 - producto.descuento / 100) * producto.cantidad
                            ).toLocaleString('de-DE')
                        }}
                    </p>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Producto',
    props: {
        producto: {type: Object, required: true}
    },
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