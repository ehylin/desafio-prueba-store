import Vuex from "vuex";
import TarjetaProducto from "../../src/components/Productos/TarjetaProducto.vue";

const localVue = createLocalVue();
localVue.use(Vuex);
const store = new Vuex.Store({
    state: {
        todosLosProductos: [
          {
            id: 1,
            nombre: "Crema de manos",
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
});

describe("Behaviour of TarjetaProducto.vue", () => {
  it("should render ul>li list with VuexStore data", () => {
    const wrapper = shallowMount(TarjetaProducto, {
      localVue,
      store,
    });

    expect(wrapper.text()).toMatch(
        {
          id: 1,
          nombre: "Crema de manos",
          categoria: "cremas",
          peso: '500gr',
          oferta: false,
          descuento: 0,
          precio: 7000,
          stock: 10,
          imagen: 'https://mymedi-be87.kxcdn.com/mymedi-pharmacy/wp-content/uploads/2020/09/2-350x350.jpg'
  
      });
  });
});