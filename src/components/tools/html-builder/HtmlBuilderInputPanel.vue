<template>
    <section class="space-y-6">
        <div>
            <label class="mb-3 block text-2xl font-semibold text-gray-900">
                HTML Code
            </label>

            <textarea :value="htmlCode"
                class="h-[180px] w-full rounded-2xl border border-gray-300 bg-white p-4 font-mono text-lg text-gray-800 outline-none placeholder:text-gray-400 focus:border-gray-400"
                @input="$emit('update:htmlCode', $event.target.value)"></textarea>
        </div>

        <div class="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
            <h2 class="text-2xl font-semibold text-gray-900">Select CSS Styles</h2>

            <div class="mt-5 space-y-4">
                <label class="flex cursor-pointer items-center gap-3 text-xl text-gray-800">
                    <input type="checkbox" class="h-5 w-5 rounded border-gray-300"
                        :checked="selectedStyles.includes('modern')" @change="toggleStyle('modern')" />
                    <span>Modern</span>
                </label>

                <label class="flex cursor-pointer items-center gap-3 text-xl text-gray-800">
                    <input type="checkbox" class="h-5 w-5 rounded border-gray-300"
                        :checked="selectedStyles.includes('minimal')" @change="toggleStyle('minimal')" />
                    <span>Minimal</span>
                </label>

                <label class="flex cursor-pointer items-center gap-3 text-xl text-gray-800">
                    <input type="checkbox" class="h-5 w-5 rounded border-gray-300"
                        :checked="selectedStyles.includes('dark')" @change="toggleStyle('dark')" />
                    <span>Dark</span>
                </label>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
            <button type="button"
                class="rounded-2xl border border-gray-300 bg-white px-4 py-4 text-lg font-medium text-gray-900 transition hover:bg-gray-50"
                @click="$emit('copy')">
                Copy HTML
            </button>

            <button type="button"
                class="rounded-2xl border border-gray-300 bg-white px-4 py-4 text-lg font-medium text-gray-900 transition hover:bg-gray-50"
                @click="$emit('reset')">
                Reset
            </button>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HtmlBuilderInputPanel',
    props: {
        htmlCode: {
            type: String,
            default: '',
        },
        selectedStyles: {
            type: Array,
            default: () => [],
        },
    },
    emits: ['update:htmlCode', 'update:selectedStyles', 'copy', 'reset'],
    methods: {
        toggleStyle(styleName) {
            const next = this.selectedStyles.includes(styleName)
                ? this.selectedStyles.filter((item) => item !== styleName)
                : [...this.selectedStyles, styleName]

            this.$emit('update:selectedStyles', next)
        },
    },
}
</script>