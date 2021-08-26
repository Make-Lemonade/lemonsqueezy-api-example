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
import Orders from '../Components/Orders.vue';

export default {
    computed: {
        store() {
            return this.$store.state.store;
        }
    },

    components: {
        Orders,
    },

    created() {
        //this.loadDefaultStore();
        this.$store.dispatch('loadDefaultStore');
    },
}
</script>
