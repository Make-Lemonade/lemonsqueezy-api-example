<template>
    <div class="bg-white min-h-screen">
        <a
            href="#"
            class="flex items-center px-2 py-1.5 border-b border-light-95 hover:bg-light-97"
            v-for="order in orders.data"
            :key="order.id"
            @click.prevent="$router.push({ name: 'order', params: { id: order.id }})"
        >
            <div class="inline-flex items-center flex-shrink-0 justify-center bg-light-95 w-8 h-6 rounded mr-2">
                <span class="font-medium">
                    {{ order.attributes.order_number }}
                </span>
            </div>
            <div class="mr-2 truncate">
                <div class="flex items-center">
                    <h4 class="font-medium truncate overflow-ellipsis">
                        {{ order.attributes.user_name ? order.attributes.user_name : order.attributes.user_email }}
                    </h4>
                </div>
                <p class="text-grey">
                    <template v-if="order.attributes.total > 0">
                        {{ formatCurrency(order.attributes.total, order.attributes.currency) }}
                    </template>
                    <template v-else>
                        Free
                    </template>
                </p>
            </div>
            <div class="flex-shrink-0 ml-auto text-grey">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 stroke-current fill-transparent">
                    <path d="M4.75 11.98h14.5M12.75 5.75l6.5 6.25-6.5 6.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </div>
        </a>
    </div>
</template>

<script>
import api from '../api';

export default {
    props: {
        store: {
            type: Object,
            required: true
        }
    },

    data() {
        return {
            orders: {}
        }
    },

    created() {
        this.getOrders();
    },

    methods: {
        getOrders() {
            api.get(`v1/stores/${this.store.id}/orders`)
                .then(response => {
                    this.orders = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
    }
}
</script>
