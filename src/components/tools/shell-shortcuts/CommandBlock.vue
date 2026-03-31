<template>
    <div class="rounded-2xl border border-gray-200 bg-gray-50 p-4">
        <div class="flex items-start justify-between gap-4">
            <div class="min-w-0 flex-1">
                <p v-if="label" class="mb-2 text-sm font-medium uppercase tracking-wide text-gray-500">
                    {{ label }}
                </p>
                <pre
                    class="overflow-x-auto whitespace-pre-wrap break-words text-sm text-gray-900"><code>{{ command }}</code></pre>
            </div>

            <button type="button"
                class="shrink-0 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 transition hover:bg-gray-100"
                @click="copyCommand">
                {{ copied ? 'Copied' : 'Copy' }}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommandBlock',
    props: {
        label: {
            type: String,
            default: '',
        },
        command: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            copied: false,
        }
    },
    methods: {
        async copyCommand() {
            try {
                await navigator.clipboard.writeText(this.command)
                this.copied = true
                setTimeout(() => {
                    this.copied = false
                }, 1500)
            } catch (error) {
                console.error('Copy failed:', error)
            }
        },
    },
}
</script>