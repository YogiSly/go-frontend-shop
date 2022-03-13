
import axios from "axios";

const cards = {
  state: {
    products: [

    ],
  },
  mutations: {
    setProductToState(state, products) {
      state.products = products
    }
  },
  actions: {
    getProductsFromApi({ commit }) {
      return axios('http://localhost:3000/products', {
        method: 'GET'
      })
        .then((products) => {

          commit('setProductToState', products);
          return products;
        })
        .catch((error) => {
          console.log(error);
          return error;
        })
    }
  },
  getters: {
    products(state) {
      return state.products;
    }
  }
}

export default cards