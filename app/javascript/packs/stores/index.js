import Vue from 'vue/dist/vue.esm.js'
import Vuex from 'vuex';

Vue.use(Vuex);

const debug = process.env.NODE_ENV == 'development';

export default new Vuex.Store({
  modules: {
  },
  strict: debug
});
