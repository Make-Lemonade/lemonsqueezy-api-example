<template>
    <div>
        <div
            class="flex px-2 py-1.5 bg-white border-b border-light-95"
            v-for="item in items"
            :key="item.id"
        >
            <div
                class="flex-shrink-0 w-8 h-6 mr-2 bg-light-95 rounded bg-center bg-no-repeat bg-cover"
            />
            <div>
                <h4 class="font-medium">
                    {{ item.attributes.product_name }}
                </h4>
                <p
                    class="text-grey"
                    v-if="item.attributes.variant_name && item.attributes.variant_name !== 'Default'"
                >
                    {{ item.attributes.variant_name }}
                </p>
            </div>
            <div class="flex-shrink-0 ml-auto">
                <p class="ml-2">
                    {{ formatCurrency(item.attributes.price, order.attributes.currency) }}
                </p>
            </div>
        </div>
        <div class="bg-white border-b border-light-95">
            <p class="flex justify-between px-2 py-1">
                <span>Subtotal</span>
                <span>{{ formatCurrency(order.attributes.subtotal, order.attributes.currency) }}</span>
            </p>
            <p
                class="flex items-center justify-between px-2 py-0.5"
                v-if="order.attributes.discount_total"
            >
                <span>Discount</span>
                <span>
                    -{{ formatCurrency(order.attributes.discount_total, order.attributes.currency) }}
                </span>
            </p>
            <p class="flex justify-between px-2 py-1">
                <span>{{ order.attributes.tax_name ? order.attributes.tax_name : 'Tax' }}</span>
                <span>{{ formatCurrency(order.attributes.tax, order.attributes.currency) }}</span>
            </p>
            <p
                class="flex justify-between px-2 py-1.5 font-medium"
            >
                <span>Total</span>
                <span>
                    {{ formatCurrency(order.attributes.total, order.attributes.currency) }}
                </span>
            </p>
        </div>
        <div
            class="flex px-2 py-1.5 bg-white border-b border-light-95"
            v-for="item in items"
            :key="item.id"
        >
            <div
                class="flex-shrink-0 w-6 h-6 mr-2 bg-light-95 rounded-full bg-center bg-no-repeat bg-cover"
            />
            <div>
                <h4 class="font-medium">
                    {{ order.attributes.user_name ? order.attributes.user_name : 'Customer' }}
                </h4>
                <p
                    class="text-grey"
                >
                    {{ order.attributes.user_email }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        order: {
            type: Object,
            required: true
        },
        items: {
            type: Array,
            required: true
        }
    }
}
</script>
