import Vue from 'vue/dist/vue.esm.js'
import Vuex from 'vuex';

import {tasks} from './modules/task';

Vue.use(Vuex);

const debug = process.env.NODE_ENV == 'development';

export default new Vuex.Store({
  modules: {
    tasks : tasks
  },
  strict: debug
});
