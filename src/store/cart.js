const cart = {
  state: {
    cart: []
  },
  mutations: {
    setCart(state, product) {
      if (state.cart.length) {
        let isProductExists = false;
        state.cart.map(function (item) {
          if (item.article === product.article) {
            isProductExists = true;
            item.quantity++
          }
        });
        if (!isProductExists) {
          state.cart.push(product);
        }
      } else {
        state.cart.push(product);
      }
    },
    removeFromCart(state, index) {
      state.cart.splice(index, 1)
    }
  },
  actions: {
    addToCart({ commit }, product) {
      commit('setCart', product)
    },
    deleteFromCart({ commit }, index) {
      commit('removeFromCart', index)
    },
  },
  getters: {
    getCart(state) {
      return state.cart;
    }
  }
}
export default cart;