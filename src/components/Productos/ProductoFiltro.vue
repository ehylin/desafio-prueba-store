<template>
<div class="row">
  <div class="col-sm mb-4 mb-md-0">
    <div v-for="(producto, $index) in productos"
        :key="$index">

       <div class="card mx-auto" style="width: 18rem;"  >
         <p class="card-text mb-0 mr-4"><small class="card-sale">{{producto.oferta ? 'Sale': ''}}</small></p>
        <img :src="producto.imagen" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">{{producto.nombre}}</h5>
         <ul class="list-group list-group-flush">
            <li class="list-group-item">Categoria: {{producto.categoria}}</li>
            <li class="list-group-item">Peso: {{producto.peso}}</li>
            <li class="list-group-item">Precio: ${{ producto.precio }}</li>
            <li class="list-group-item">Descuento: {{producto.oferta ? `${producto.descuento}% off` : 'Sin descuento asociado'}}</li>
         </ul>
        </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  props: {
    productos: { type: Array, required: true }
  },
  methods:{
  }
}
</script>

<style>
.card-sale{
    color: rgba(255,127,35,1);
    position: relative;
    left: 10px;
    top: 10px;
    padding: 3px 10px;
    border-radius: 5px;
    text-transform: uppercase;
}
.btn-store{
  background-color: rgba(255,127,35,1);
  color: #fff;
}
</style>
