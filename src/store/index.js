import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
      {
        id: 1,
        name: 'Strawberry',
        img: "https://www.belpressa.ru/media/filer_public/44/36/4436c26d-2ad1-46bf-b7d9-3419c373f1e2/img9693.jpg.640x480_q75_upscale.jpg",
        price: 100,
        category: 'Berries',
        date: '19.12.2022',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, nihil beatae corrupti debitis obcaecati odio a sint ex enim quasi velit deleniti ut assumenda iure nobis molestias in quas! Numquam.',
      },
      {
        id: 2,
        name: 'Banana',
        img: "https://www.gastronom.ru/binfiles/images/20151029/bddcbbce.jpg",
        price: 20,
        category: 'Fruits',
        date: '19.12.2022',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, nihil beatae corrupti debitis obcaecati odio a sint ex enim quasi velit deleniti ut assumenda iure nobis molestias in quas! Numquam.',
      },
      {
        id: 3,
        name: 'Tomato',
        img: "https://bonfit.ru/upload/iblock/6db/6dbd4885a2c4191214edfc359a37466e.jpg",
        price: 100,
        category: 'Vegetables',
        date: '19.12.2022',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, nihil beatae corrupti debitis obcaecati odio a sint ex enim quasi velit deleniti ut assumenda iure nobis molestias in quas! Numquam.',
      },
      {
        id: 4,
        name: 'Mandarin',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGWNJlXIgKSNGW7BqPOxy3MHwCEcN0qwN4LQ&usqp=CAU",
        price: 500,
        category: 'Fruits',
        date: '19.12.2022',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, nihil beatae corrupti debitis obcaecati odio a sint ex enim quasi velit deleniti ut assumenda iure nobis molestias in quas! Numquam.',
      },
    ],
    categories: [
      'Berries',
      'Vegetables',
      'Fruits',
    ],
    productsCart: [
      {
        productId: 3,
        count: 1,
      },
    ]
  },
  getters: {
    allCategories(state) {
      return state.categories;
    },
    allProducts(state) {
      return state.products
    },
    productsByCategory: (state) => (category) => {
      if (category) {
      return state.products.filter(product => product.category === category)
      }
    },
    productsByName: (state) => (name) => {
      if (name) {
        return state.products.filter(product => product.name.toLowerCase().includes(name.toLowerCase()));
    }
        return state.products;
    },

    findProductById: (state) => (id) => {
      return state.products.find(product => product.id == id)
    },

    allProductsCart (state) {
      return state.productsCart.map(item => {
        const product = state.products.find(p => p.id === item.productId)      
        return {
          ...product,
          count: item.count,
        }  
      })
    },


    totalPrice(state, getters) {
      return getters.allProductsCart.reduce((sum, product) => sum + product.price * product.count, 0);
    },

    productsByCategoryName: (state) => (category, name) => {
      if (category) {
      return state.products.filter(product => product.category === category)
      }
      if (name) {
      return state.products.filter(product => product.name.toLowerCase().includes(name.toLowerCase()));
      }
      return state.products;
    },


  },
  mutations: {
    addProductToCart(state, id) {
      state.productsCart.push({
        productId: id,
        count: 1
      });
    },
    incCount(state, index) {
      state.productsCart[index].count++;
    },
    removeProduct(state, index){
      state.productsCart.splice(index, 1)
    },
    changeProductCount(state, {index, value}) {
      state.productsCart[index].count = value;
    },
    addProduct(state, product) {
      state.products.push(product)
    }
  },
  actions: {
    findProductIndexToCard({state}, id) {
      return state.productsCart.findIndex(product => product.productId == id);
    },
    async addProductToCart({commit, dispatch}, id) {
      const index = await dispatch('findProductIndexToCard', id);
      if (index !== -1) {
        commit('incCount', index);
      } else {
        commit('addProductToCart', id)
      }
    },
    async removeProduct({state, commit, dispatch}, id) {
      const index = await dispatch('findProductIndexToCard', id);
      console.log(index);
      commit('removeProduct', index)
    },
    async changeProductCount({state, commit, dispatch}, payload) {
      const index = await dispatch('findProductIndexToCard', payload.id);
      console.log(payload.id)
      commit('changeProductCount', {
        index, 
        value:payload.value})
    },
    addProduct ({state, commit}, product) {
      commit('addProduct', {...product, id: state.products.length+1})
    }
  },
  
  modules: {
  }
})
