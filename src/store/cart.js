const cart = {
  state: {
    cart: []
  },
  mutations: {
    decrement(state, index) {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--
      }
    },
    increment(state, index) {
      state.cart[index].quantity++
    },
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
    decrement({ commit }, index) {
      commit('decrement', index)
    },
    increment({ commit }, index) {
      commit('increment', index)
    },
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