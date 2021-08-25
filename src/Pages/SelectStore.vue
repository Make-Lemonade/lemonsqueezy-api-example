<template>
    <div class="p-4">
        <h1 class="text-24 font-medium px-2">Dashboard</h1>
        <div class="py-2">
            <a
                href="#"
                class="flex items-center px-2 py-1.5 rounded hover:bg-light-97 dark:hover:bg-dark-19"
                v-for="store in stores.data"
                :key="store.id"
                @click.prevent="$router.push({ name: 'store', params: { id: store.id } })"
            >
                <div class="flex-shrink-0 w-6 h-6 mr-2">
                    <img :src="store.attributes.avatar_url" alt="" class="w-full h-full rounded-full" />
                </div>
                <div class="flex-grow truncate">
                    <h4 class="font-medium dark:text-dark-95 truncate overflow-ellipsis">
                        {{ store.attributes.name }}
                    </h4>
                    <p class="text-grey dark:text-dark-grey">
                        {{ store.attributes.domain }}
                    </p>
                </div>
                <div class="flex-shrink-0 ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 stroke-current fill-transparent"><path d="M4.75 11.98h14.5M12.75 5.75l6.5 6.25-6.5 6.25" stroke="#25252D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
import api from '../api';

export default {
    data() {
        return {
            store: {}
        }
    },

    created() {
        this.loadDefaultStore();
    },

    methods: {
        loadDefaultStore: async() => {
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
                        this.store = response.data.data[0];
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }
}
</script>
