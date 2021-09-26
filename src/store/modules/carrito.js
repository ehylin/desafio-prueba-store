const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export const carritoModule = {
  
  namespaced: true,
  state: {
    todosLosProductos:[] 
  },
  getters:{
    totalTotal(state){
      return state.todosLosProductos.reduce((accumulator, producto) =>{
        accumulator += producto.precio * (1 - producto.descuento / 100) * producto.cantidad
        return accumulator;
      }, 0)
    },
  },
  mutations:{
    AGREGAR_PRODUCTO(state, nuevoProducto){
      state.todosLosProductos.push(nuevoProducto)
    },
    AGREGAR_CANTIDAD_PRODUCTO(state, indiceProducto){
      state.todosLosProductos[indiceProducto].cantidad++
    },
    QUITAR_CANTIDAD_PRODUCTO(state, indiceProducto){
      state.todosLosProductos[indiceProducto].cantidad--  
    },
    QUITAR_PRODUCTO(state, indiceProducto){
      state.todosLosProductos.splice(indiceProducto, 1)
    },
    QUITAR_TODOS_PRODUCTOS(state ){
      state.todosLosProductos = []
    },
    RESTAR_STOCK(state, indiceProducto) {
      state.todosLosProductos[indiceProducto].stock -= 1;
    },
  },
  actions: {
    async agregarYquitarStock(context, producto){
      await context.dispatch("quitarElStock", producto);
      await context.dispatch("agregarProducto", producto);
      
    },
    async quitarElStock(context, productoVender){
      await delay(1000);
      const indiceProductoABuscar = context.state.todosLosProductos.findIndex(
        (producto) => producto.id === productoVender.id
      )
      if(indiceProductoABuscar === -1){
        if (context.state.todosLosProductos[indiceProductoABuscar].stock > 0) {
          context.commit('RESTAR_STOCK', indiceProductoABuscar);
        }else{
          console.log("aqui")
          //context.commit('QUITAR_PRODUCTO', indiceProductoABuscar)
        }
      }else{
        console.log("no encontrado")
      } 
      
    },
   agregarProducto(context, producto){
     
      const indiceProductoABuscar = context.state.todosLosProductos.findIndex(
        (productoCarrito) => productoCarrito.id === producto.id
      )
      if(indiceProductoABuscar === -1){
         // eslint-disable-next-line no-unused-vars
        const { stock , ...nuevoProducto} = producto
        context.commit('AGREGAR_PRODUCTO', {...nuevoProducto, cantidad: 1})
      }else{
       
        context.commit('AGREGAR_CANTIDAD_PRODUCTO', indiceProductoABuscar)
      } 
    },
    quitarProducto(context, producto){
      const indiceProductoABuscar = context.state.todosLosProductos.findIndex(
        (productoCarrito) => productoCarrito.id === producto.id
      )
      if(indiceProductoABuscar >= 0){
        if(context.state.todosLosProductos[indiceProductoABuscar].cantidad > 1){
          context.commit('QUITAR_CANTIDAD_PRODUCTO', indiceProductoABuscar)
        }else{
          context.commit('QUITAR_PRODUCTO', indiceProductoABuscar)
        }
      }else{
        console.log("el producto no existe en el carrito de compras")
      }
    },

    comprar(context){
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('Productos comprados')
          console.table(context.state.todosLosProductos)
          context.commit('QUITAR_TODOS_PRODUCTOS')
         
          resolve()
          
        }, 2000 )
      })
    },

  }
}
