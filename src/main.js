import { createApp } from 'vue';
import { createRouter, createWebHashHistory }  from 'vue-router';
import { get } from 'idb-keyval';
import App from './App.vue';
import './style.css';

import Dashboard from './Pages/Dashboard.vue';
import Order from './Pages/Order.vue';
import Login from './Pages/Login.vue';

import Header from './Components/Header.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: Dashboard, name: 'dashboard' },
        { path: '/order/:id', component: Order, name: 'order' },
        { path: '/login', component: Login, name: 'login' },
    ]
});

router.beforeEach(async (to, from) => {
    const token = await get('user.token');
    if (to.path === '/login' && token) {
        return '/'
    }
    if (to.path !== '/login' && !token) {
        return '/login'
    }
})

const app = createApp(App);
app.use(router);
app.component('Header', Header);
app.mixin({
    methods: {
        formatCurrency(amount, currency) {
            if (amount > 0) {
                amount = amount / 100;
            }

            return new Intl.NumberFormat('en-US', { style: 'currency', currency: currency })
                .format(amount);
        }
    }
})
app.mount('#app');
