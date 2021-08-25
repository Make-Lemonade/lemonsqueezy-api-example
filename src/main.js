import { createApp } from 'vue';
import { createRouter, createWebHashHistory }  from 'vue-router';
import { get } from 'idb-keyval';
import App from './App.vue';
import './style.css';

import Dashboard from './Pages/Dashboard.vue';
import Store from './Pages/Store.vue';
import Login from './Pages/Login.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: Dashboard, name: 'dashboard' },
        { path: '/store/:id', component: Store, name: 'store' },
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
app.mount('#app');
