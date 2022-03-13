import Vue from 'vue';
import Vuex from 'vuex';


import cards from './cards';
import cart from './cart';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    cards,
    cart
  },

})

export default store