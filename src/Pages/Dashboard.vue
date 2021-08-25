<template>
    <div>
        <Header :loading="!store.data">
            <span v-if="store.data">
                {{ store.data.attributes.name }}
            </span>
        </Header>
        <Orders :store="store.data" v-if="store.data" />
    </div>
</template>

<script>
import { get, set } from 'idb-keyval';
import api from '../api';
import Orders from '../Components/Orders.vue';

export default {
    data() {
        return {
            store: {}
        }
    },

    components: {
        Orders,
    },

    created() {
        this.loadDefaultStore();
    },

    methods: {
        async loadDefaultStore() {
            const storeId = await get('currentStore');
            if (storeId) {
                this.getStore(storeId);
            } else {
                this.getFirstStore();
            }
        },
        getStore(storeId) {
            api.get(`v1/stores/${storeId}`)
                .then(response => {
                    this.store = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        getFirstStore() {
            api.get('v1/stores')
                .then(response => {
                    if (response.data.data.length) {
                        const store = response.data.data[0];
                        set('currentStore', store.id);
                        this.getStore(store.id);
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }
}
</script>
