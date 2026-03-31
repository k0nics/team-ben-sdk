<template>
    <div class="p-8">
        <div class="mx-auto max-w-[1400px]">
            <h1 class="text-5xl font-bold text-gray-900">HTML Checker</h1>
            <p class="mt-3 text-xl text-gray-500">
                Validate and preview your HTML snippets.
            </p>

            <div class="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
                <section class="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div class="flex items-center gap-3">
                        <span class="text-2xl">&lt;&gt;</span>
                        <h2 class="text-3xl font-semibold text-gray-900">HTML Input</h2>
                    </div>

                    <p class="mt-2 text-lg text-gray-500">
                        Paste your HTML snippet to check and preview
                    </p>

                    <textarea v-model="htmlInput"
                        class="mt-6 h-[340px] w-full rounded-2xl border border-gray-300 p-4 text-lg text-gray-700 outline-none placeholder:text-gray-400 focus:border-gray-400"
                        placeholder="<div>Enter your HTML here...</div>"></textarea>

                    <button type="button"
                        class="mt-5 w-full rounded-2xl bg-black py-4 text-lg font-medium text-white transition hover:opacity-95"
                        @click="checkHtml">
                        Check HTML
                    </button>
                </section>

                <section class="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div class="flex items-center gap-3">
                        <span class="text-2xl">👁</span>
                        <h2 class="text-3xl font-semibold text-gray-900">Live Preview</h2>
                    </div>

                    <p class="mt-2 text-lg text-gray-500">
                        See how your HTML renders
                    </p>

                    <div class="mt-6 h-[416px] overflow-auto rounded-2xl border border-gray-300 bg-white p-4">
                        <div v-if="previewHtml.trim()" v-html="previewHtml"></div>

                        <div v-else class="flex h-full items-center justify-center text-lg text-gray-400">
                            Your preview will appear here
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HtmlChecker',
    data() {
        return {
            htmlInput: '',
            previewHtml: '',
        }
    },
    methods: {
        checkHtml() {
            this.previewHtml = this.htmlInput
        },
    },
}
</script>