import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './routes';
import store from './store/index';

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: 'history',
});

// eslint-disable-next-line no-unused-vars
const vue = new Vue({
    el: '#app',
    router,
    store,
    render: (h) => h(App),
});
