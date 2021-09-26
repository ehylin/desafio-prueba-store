export const productosModule = {
  namespaced: true,
  state: {
    busqueda: "",
    todosLosProductos: [
      {
        id: 1,
        nombre: "Crema de manos orange",
        categoria: "cremas",
        peso: '500gr',
        oferta: false,
        descuento: 0,
        precio: 7000,
        stock: 10,
        imagen: 'https://mymedi-be87.kxcdn.com/mymedi-pharmacy/wp-content/uploads/2020/09/2-350x350.jpg'

    },
    {
        id: 2,
        nombre: "Crema de manos",
        categoria: "cremas",
        peso: '250gr',
        oferta: true,
        descuento: 30,
        precio: 3000,
        stock: 10,
        imagen: 'https://mymedi-be87.kxcdn.com/mymedi-pharmacy/wp-content/uploads/2020/09/4-350x350.jpg'

    },
    {
        id: 3,
        nombre: "Bloqueador cuerpo",
        categoria: "bloqueadores",
        peso: '500gr',
        oferta: false,
        descuento: 0,
        precio: 4000,
        stock: 10,
        imagen: 'https://mymedi-be87.kxcdn.com/mymedi-pharmacy/wp-content/uploads/2020/09/18-350x350.jpg'

    },
    {
        id: 4,
        nombre: "Bloqueador rostro",
        categoria: "bloqueadores",
        peso: '250gr',
        oferta: true,
        descuento: 50,
        precio: 6000,
        stock: 10,
        imagen: 'https://mymedi-be87.kxcdn.com/mymedi-pharmacy/wp-content/uploads/2020/09/7-350x350.jpg'

    },
    ]
  },
  getters:{
    productoSegunBusqueda(state) {
      // state.busqueda
      if (state.busqueda === "") {
        return [];
      } else {
        return state.todosLosProductos.filter((producto) =>
          producto.nombre.toLowerCase().includes(state.busqueda.toLowerCase())
        );
      }
    },
    productoSegunCategoria(state){
      if (state.busqueda === "") {
        return [];
      } else {
        return state.todosLosProductos.filter((producto) =>
          producto.categoria.toLowerCase().includes(state.busqueda.toLowerCase())
        );
      }
    },
  },
  mutations: {
    SET_BUSQUEDA(state, nuevaBusqueda) {
      state.busqueda = nuevaBusqueda;
    },
    AGREGAR_PRODUCTO(state, nuevoProducto) {
      state.todosLosProductos.push(nuevoProducto)
    }
  },
  actions: {
    setBusqueda(context, nuevaBusqueda) {
      if (typeof nuevaBusqueda === "string") {
        context.commit("SET_BUSQUEDA", nuevaBusqueda);
      } else {
        console.warn(
          `nuevaBusqueda debiese de ser de tipo string y recibí un tipo ${typeof nuevaBusqueda}`
        );
      }
    },
    crearProducto(context, producto) {
      context.commit('AGREGAR_PRODUCTO', producto)
    }
  }
}

// $store.state.productos.todosLosProductos
