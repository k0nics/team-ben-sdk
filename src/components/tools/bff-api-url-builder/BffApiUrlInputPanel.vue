<template>
    <section class="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 class="text-2xl font-semibold text-gray-900">Product IDs Input</h2>
        <p class="mt-2 text-gray-500">
            Paste product IDs one per line, comma-separated, or space-separated.
        </p>

        <textarea :value="modelValue"
            class="mt-4 h-[420px] w-full rounded-2xl border border-gray-300 p-4 font-mono text-sm text-gray-800 outline-none placeholder:text-gray-400"
            placeholder="Example:
  E482978-000
  E485574-000
  E484191-000" @input="$emit('update:modelValue', $event.target.value)"></textarea>

        <div class="mt-4 flex gap-3">
            <button type="button" class="rounded-2xl bg-black px-4 py-3 text-white" @click="$emit('generate')">
                Generate URL
            </button>

            <button type="button" class="rounded-2xl border border-gray-300 bg-white px-4 py-3 text-gray-900"
                @click="$emit('clear')">
                Clear
            </button>
        </div>
    </section>
</template>

<script>
export default {
    name: 'BffApiUrlInputPanel',
    props: {
        modelValue: {
            type: String,
            default: '',
        },
    },
    emits: ['update:modelValue', 'generate', 'clear'],
}
</script>