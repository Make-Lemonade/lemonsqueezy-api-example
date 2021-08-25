<template>
    <div class="p-4">
        <div class="px-2 mb-2">
            <a
                href="#"
                class="block w-5 h-5 p-1 rounded hover:bg-light-91"
                @click.prevent="$router.push({ name: 'dashboard' })"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 stroke-current fill-transparent"><path d="M4.75 11.98h14.5M11.25 18.25 4.75 12l6.5-6.25" stroke="#25252D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </a>
        </div>
        <div v-if="store.data">
            <div class="flex items-center px-2">
                <div class="flex-shrink-0 w-6 h-6 mr-2">
                    <img :src="store.data.attributes.avatar_url" alt="" class="w-full h-full rounded-full" />
                </div>
                <div>
                    <h1 class="text-18 font-medium truncate overflow-ellipsis">{{ store.data.attributes.name }}</h1>
                </div>
            </div>
            <div class="py-2">
                <a
                    href="#"
                    class="flex items-center px-2 py-1.5 rounded hover:bg-light-97 dark:hover:bg-dark-19"
                    v-for="order in orders.data"
                    :key="order.id"
                    @click.prevent
                >
                    <div class="inline-flex items-center flex-shrink-0 justify-center bg-light-95 w-8 h-6 rounded mr-2 dark:bg-dark-22">
                        <span class="font-medium dark:text-dark-95">
                            {{ order.attributes.order_number }}
                        </span>
                    </div>
                    <div class="mr-2 truncate">
                        <div class="flex items-center">
                            <h4 class="font-medium truncate overflow-ellipsis dark:text-dark-95">
                                {{ order.attributes.user_name ? order.attributes.user_name : order.attributes.user_email }}
                            </h4>
                        </div>
                        <p class="text-grey dark:text-dark-grey">
                            <template v-if="order.attributes.total > 0">
                                {{ formatCurrency(order.attributes.total, order.attributes.currency) }}
                            </template>
                            <template v-else>
                                Free
                            </template>
                        </p>
                    </div>
                    <div class="ml-auto"></div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import api from '../api';

export default {
    data() {
        return {
            store: {},
            orders: {}
        }
    },

    created() {
        this.$watch(
            () => this.$route.params,
            () => {
                this.fetchData();
            },
            { immediate: true }
        )
    },

    methods: {
        fetchData() {
            if (!this.$route.params.id) {
                return;
            }

            this.getStore();
        },
        getStore() {
            api.get(`v1/stores/${this.$route.params.id}`)
                .then(response => {
                    this.store = response.data;
                    this.getOrders();
                })
                .catch(error => {
                    console.error(error);
                });
        },
        getOrders() {
            api.get(`v1/stores/${this.store.data.id}/orders`)
                .then(response => {
                    this.orders = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        formatCurrency(amount, currency) {
            if (amount > 0) {
                amount = amount / 100;
            }

            return new Intl.NumberFormat('en-US', { style: 'currency', currency: currency })
                .format(amount);
        }
    }
}
</script>
