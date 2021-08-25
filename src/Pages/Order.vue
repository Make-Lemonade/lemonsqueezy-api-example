<template>
    <div>
        <Header :loading="!order.data" :show-done="true">
            <span v-if="order.data">
                Order #{{ order.data.attributes.order_number }}
                -
                {{ formatCurrency(order.data.attributes.total, order.data.attributes.currency) }}
            </span>
        </Header>
    </div>
</template>

<script>
import api from '../api';

export default {
    data() {
        return {
            order: {}
        }
    },

    created() {
        this.$watch(
            () => this.$route.params,
            () => {
                this.getOrder()
            },
            { immediate: true }
        )
    },

    methods: {
        getOrder() {
            api.get(`v1/orders/${this.$route.params.id}?include=order-items`)
                .then(response => {
                    this.order = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }
}
</script>
