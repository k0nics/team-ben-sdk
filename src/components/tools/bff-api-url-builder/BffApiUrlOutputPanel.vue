<template>
    <section class="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 class="text-2xl font-semibold text-gray-900">Generated Result</h2>
        <p class="mt-2 text-gray-500">
            Valid product IDs and generated API URL.
        </p>

        <div class="mt-6">
            <p class="text-sm font-medium text-gray-500">Product Count</p>
            <p class="mt-1 text-lg text-gray-900">{{ productIds.length }}</p>
        </div>

        <div class="mt-6">
            <div class="flex items-center justify-between gap-3">
                <p class="text-sm font-medium text-gray-500">Valid Product IDs</p>
                <button v-if="productIds.length" type="button"
                    class="rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900"
                    @click="copyText(productIds.join(','))">
                    Copy IDs
                </button>
            </div>

            <div class="mt-2 rounded-2xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-800 break-words">
                <span v-if="productIds.length">{{ productIds.join(', ') }}</span>
                <span v-else class="text-gray-400">No valid product IDs yet</span>
            </div>
        </div>

        <div class="mt-6">
            <div class="flex items-center justify-between gap-3">
                <p class="text-sm font-medium text-gray-500">Generated API URL</p>
                <button v-if="apiUrl" type="button"
                    class="rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900"
                    @click="copyText(apiUrl)">
                    Copy URL
                </button>
            </div>

            <div class="mt-2 rounded-2xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-800 break-all">
                <span v-if="apiUrl">{{ apiUrl }}</span>
                <span v-else class="text-gray-400">Generated URL will appear here</span>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'BffApiUrlOutputPanel',
    props: {
        productIds: {
            type: Array,
            default: () => [],
        },
        apiUrl: {
            type: String,
            default: '',
        },
    },
    methods: {
        async copyText(text) {
            try {
                await navigator.clipboard.writeText(text)
            } catch (error) {
                console.error('Copy failed:', error)
            }
        },
    },
}
</script>