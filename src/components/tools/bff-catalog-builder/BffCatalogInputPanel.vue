<template>
    <section class="space-y-6">
        <div class="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 class="text-2xl font-semibold text-gray-900">Catalog Source</h2>
            <p class="mt-2 text-gray-500">
                Choose your input source, then build the catalog preview.
            </p>

            <div class="mt-4 inline-flex rounded-2xl border border-gray-200 bg-gray-50 p-1">
                <button type="button" class="rounded-xl px-4 py-2 text-sm font-medium transition"
                    :class="inputMode === 'html' ? 'bg-black text-white' : 'text-gray-700'"
                    @click="$emit('update:inputMode', 'html')">
                    Rendered HTML
                </button>

                <button type="button" class="rounded-xl px-4 py-2 text-sm font-medium transition"
                    :class="inputMode === 'json' ? 'bg-black text-white' : 'text-gray-700'"
                    @click="$emit('update:inputMode', 'json')">
                    API JSON
                </button>
            </div>

            <div v-if="inputMode === 'html'" class="mt-5">
                <p class="text-sm font-medium text-gray-500">Paste Rendered BFF HTML</p>
                <textarea :value="rawHtml"
                    class="mt-3 h-[420px] w-full rounded-2xl border border-gray-300 p-4 font-mono text-sm text-gray-800 outline-none placeholder:text-gray-400"
                    placeholder="Paste the full rendered BFF HTML here..."
                    @input="$emit('update:rawHtml', $event.target.value)"></textarea>

                <div class="mt-4 flex gap-3">
                    <button type="button" class="rounded-2xl bg-black px-4 py-3 text-white"
                        @click="$emit('build-from-html')">
                        Build from HTML
                    </button>

                    <button type="button" class="rounded-2xl border border-gray-300 bg-white px-4 py-3 text-gray-900"
                        @click="$emit('clear')">
                        Clear
                    </button>
                </div>
            </div>

            <div v-else class="mt-5">
                <p class="text-sm font-medium text-gray-500">Paste Product API JSON</p>
                <textarea :value="rawJson"
                    class="mt-3 h-[420px] w-full rounded-2xl border border-gray-300 p-4 font-mono text-sm text-gray-800 outline-none placeholder:text-gray-400"
                    placeholder='Paste JSON like { "status": "ok", "result": { "items": [...] } }'
                    @input="$emit('update:rawJson', $event.target.value)"></textarea>

                <div class="mt-4 flex gap-3">
                    <button type="button" class="rounded-2xl bg-black px-4 py-3 text-white"
                        @click="$emit('build-from-json')">
                        Build from JSON
                    </button>

                    <button type="button" class="rounded-2xl border border-gray-300 bg-white px-4 py-3 text-gray-900"
                        @click="$emit('clear')">
                        Clear
                    </button>
                </div>
            </div>
        </div>

        <div class="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 class="text-2xl font-semibold text-gray-900">Extracted Info</h2>

            <div class="mt-4 space-y-4">
                <div>
                    <p class="text-sm font-medium text-gray-500">Product Count</p>
                    <p class="mt-1 text-lg text-gray-900">{{ productsCount }}</p>
                </div>

                <div>
                    <p class="text-sm font-medium text-gray-500">Product IDs</p>
                    <div
                        class="mt-2 rounded-2xl border border-gray-200 bg-gray-50 p-3 text-sm text-gray-800 break-words">
                        <span v-if="productIds.length">{{ productIds.join(', ') }}</span>
                        <span v-else class="text-gray-400">No product IDs extracted yet</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'BffCatalogInputPanel',
    props: {
        inputMode: {
            type: String,
            default: 'html',
        },
        rawHtml: {
            type: String,
            default: '',
        },
        rawJson: {
            type: String,
            default: '',
        },
        productIds: {
            type: Array,
            default: () => [],
        },
        productsCount: {
            type: Number,
            default: 0,
        },
    },
    emits: [
        'update:inputMode',
        'update:rawHtml',
        'update:rawJson',
        'build-from-html',
        'build-from-json',
        'clear',
    ],
}
</script>