<template>
    <div class="relative flex items-center justify-center h-6 bg-light-97 border-b">
        <h1 class="text-16 font-medium">
            <template v-if="loading">
                Loading...
            </template>
            <template v-else>
                <slot />
            </template>
        </h1>
        <a
            href="#"
            class="absolute top-0 right-0 inline-flex items-center h-full px-3 text-15 text-wtf-majorelle font-medium"
            @click.prevent="$router.go(-1)"
            v-if="showDone && !loading"
        >
            Done
        </a>
    </div>
</template>

<script>
export default {
    props: {
        loading: {
            type: Boolean,
            default: false
        },
        showDone: {
            type: Boolean,
            default: false
        }
    }
}
</script>
