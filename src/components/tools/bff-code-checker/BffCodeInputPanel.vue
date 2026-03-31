<template>
    <section class="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
        <div class="flex items-center gap-3">
            <span class="text-3xl font-semibold text-gray-900">#</span>
            <h2 class="text-3xl font-semibold text-gray-900">BFF Code Input</h2>
        </div>

        <p class="mt-2 text-lg text-gray-500">
            Enter text containing BFF codes (e.g., #123, #456)
        </p>

        <textarea :value="modelValue"
            class="mt-6 h-[340px] w-full rounded-2xl border border-gray-300 p-4 text-lg text-gray-700 outline-none placeholder:text-gray-400 focus:border-gray-400"
            placeholder="Enter text with BFF codes like #123, #456, #789..."
            @input="$emit('update:modelValue', $event.target.value)"></textarea>

        <button type="button"
            class="mt-5 flex w-full items-center justify-center gap-3 rounded-2xl bg-black py-4 text-lg font-medium text-white transition hover:opacity-95"
            @click="$emit('extract')">
            <span class="text-xl">⌕</span>
            <span>Extract Codes</span>
        </button>
    </section>
</template>

<script>
export default {
    name: 'BffCodeInputPanel',
    props: {
        modelValue: {
            type: String,
            default: '',
        },
    },
    emits: ['update:modelValue', 'extract'],
}
</script>