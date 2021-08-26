<template>
    <div>
        <Header :loading="!order.data" :show-done="true">
            <span v-if="order.data">
                Order #{{ order.data.attributes.order_number }}
            </span>
        </Header>
        <Order :order="order.data" :items="order.included" v-if="order.data" />
    </div>
</template>

<script>
import api from '../api';
import Order from '../Components/Order.vue';

export default {
    data() {
        return {
            order: {}
        }
    },

    components: {
        Order
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
