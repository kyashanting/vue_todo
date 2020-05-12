import Vue from 'vue/dist/vue.esm.js'
import Vuex from 'vuex';

import {tasks} from './modules/tasks';
import {new_task} from './modules/new_task';

Vue.use(Vuex);

//const debug = process.env.NODE_ENV == 'development';

export default new Vuex.Store({
  modules: {
    tasks : tasks,
    new_task: new_task
  }
});
