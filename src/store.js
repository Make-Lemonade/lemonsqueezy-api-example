import { createStore } from 'vuex';
import { get, set } from 'idb-keyval';
import api from './api';

export default createStore({
    state () {
        return {
            store: {}
        }
    },
    mutations: {
        setStore(state, payload) {
            state.store = payload;
        }
    },
    actions: {
        async loadDefaultStore({ dispatch, commit }) {
            let storeId = await get('currentStore');
            if (!storeId) {
                storeId = await dispatch('getFirstStore');
            }

            const store = await dispatch('getStore', storeId);
            commit('setStore', store);
        },
        async getStore({}, storeId) {
            const response = await api.get(`v1/stores/${storeId}`);
            return response.data;
        },
        async getFirstStore() {
            const response = await api.get('v1/stores')
            if (response.data.data.length) {
                const store = response.data.data[0];
                await set('currentStore', store.id);
                return store.id;
            }

            return null;
        }
    }
});
