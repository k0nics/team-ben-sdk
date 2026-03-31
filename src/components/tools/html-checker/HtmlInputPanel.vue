<template>
    <div class="bg-white rounded-xl border p-4">
        <h2 class="font-semibold mb-2">HTML Input</h2>

        <textarea v-model="htmlInput" class="w-full h-[300px] border rounded-lg p-3"
            placeholder="<div>Enter your HTML here...</div>" />

        <button @click="renderPreview" class="mt-4 w-full bg-black text-white py-2 rounded-lg">
            Check HTML
        </button>
    </div>
</template>

<script>
import { useHtmlChecker } from './useHtmlChecker'

export default {
    setup() {
        return useHtmlChecker()
    }
}
</script>