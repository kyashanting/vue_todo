import Vue from 'vue/dist/vue.esm.js'
import Router from './router/router'
import Header from './components/header.vue'
import Store from './stores';

var app = new Vue({
    router: Router,
    el: '#app',
    store: Store,
    components: {
        'navbar': Header,
    }
});
