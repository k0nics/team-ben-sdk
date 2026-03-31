<template>
    <div class="p-8">
        <div class="mx-auto max-w-[1400px]">
            <h1 class="text-5xl font-bold text-gray-900">BFF Code Checker</h1>
            <p class="mt-3 text-xl text-gray-500">
                Extract BFF codes from your text and view them as interactive cards. Supports codes like #123, #456,
                #789.
            </p>

            <div class="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
                <!-- Left Panel -->
                <section class="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div class="flex items-center gap-3">
                        <span class="text-3xl font-semibold text-gray-900">#</span>
                        <h2 class="text-3xl font-semibold text-gray-900">BFF Code Input</h2>
                    </div>

                    <p class="mt-2 text-lg text-gray-500">
                        Enter text containing BFF codes (e.g., #123, #456)
                    </p>

                    <textarea v-model="inputText"
                        class="mt-6 h-[340px] w-full rounded-2xl border border-gray-300 p-4 text-lg text-gray-700 outline-none placeholder:text-gray-400 focus:border-gray-400"
                        placeholder="Enter text with BFF codes like #123, #456, #789..."></textarea>

                    <button type="button"
                        class="mt-5 flex w-full items-center justify-center gap-3 rounded-2xl bg-black py-4 text-lg font-medium text-white transition hover:opacity-95"
                        @click="extractCodes">
                        <span class="text-xl">⌕</span>
                        <span>Extract Codes</span>
                    </button>
                </section>

                <!-- Right Panel -->
                <section class="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div class="flex items-center gap-3">
                        <span class="text-3xl font-semibold text-gray-900">#</span>
                        <h2 class="text-3xl font-semibold text-gray-900">Extracted Codes</h2>
                    </div>

                    <p class="mt-2 text-lg text-gray-500">
                        BFF codes extracted from your text
                    </p>

                    <div class="mt-6 min-h-[397px] rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-5">
                        <div v-if="extractedCodes.length === 0"
                            class="flex h-full min-h-[350px] flex-col items-center justify-center text-center">
                            <div class="text-7xl font-light text-gray-300">#</div>
                            <p class="mt-4 text-2xl text-gray-500">No codes extracted yet</p>
                            <p class="mt-1 text-lg text-gray-400">
                                Enter text and click Extract Codes
                            </p>
                        </div>

                        <div v-else class="flex flex-wrap gap-4">
                            <div v-for="(code, index) in extractedCodes" :key="`${code}-${index}`"
                                class="rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm transition hover:shadow">
                                <div class="text-sm font-medium uppercase tracking-wide text-gray-400">
                                    BFF Code
                                </div>
                                <div class="mt-1 text-2xl font-bold text-gray-900">
                                    {{ code }}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BffCodeChecker',
    data() {
        return {
            inputText: '',
            extractedCodes: [],
        }
    },
    methods: {
        extractCodes() {
            const matches = this.inputText.match(/#\d+/g) || []

            // unique only, preserve order
            const uniqueCodes = [...new Set(matches)]

            this.extractedCodes = uniqueCodes
        },
    },
}
</script>