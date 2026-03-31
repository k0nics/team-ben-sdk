<template>
    <div class="bg-white rounded-xl border p-4">
        <h2 class="font-semibold mb-2">Live Preview</h2>

        <div class="border rounded-lg h-[300px] p-4" v-html="preview" />
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