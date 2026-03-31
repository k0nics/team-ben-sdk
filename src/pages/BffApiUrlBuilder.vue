<template>
    <div class="p-8">
        <div class="mx-auto max-w-[1400px]">
            <h1 class="text-5xl font-bold text-gray-900">BFF API URL Builder</h1>
            <p class="mt-3 text-xl text-gray-500">
                Paste product IDs and generate the product API URL automatically.
            </p>

            <div class="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
                <BffApiUrlInputPanel v-model="rawInput" @generate="generateUrl" @clear="clearAll" />

                <BffApiUrlOutputPanel :product-ids="productIds" :api-url="apiUrl" />
            </div>
        </div>
    </div>
</template>

<script>
import BffApiUrlInputPanel from '../components/tools/bff-api-url-builder/BffApiUrlInputPanel.vue'
import BffApiUrlOutputPanel from '../components/tools/bff-api-url-builder/BffApiUrlOutputPanel.vue'

export default {
    name: 'BffApiUrlBuilder',
    components: {
        BffApiUrlInputPanel,
        BffApiUrlOutputPanel,
    },
    data() {
        return {
            rawInput: '',
            productIds: [],
            apiUrl: '',
        }
    },
    methods: {
        generateUrl() {
            const normalized = this.rawInput
                .replace(/\n/g, ',')
                .replace(/\s+/g, ',')
                .split(',')
                .map(item => item.trim())
                .filter(Boolean)

            const validIds = normalized.filter(id => /^E\d{6}-\d{3}$/.test(id))
            const uniqueIds = [...new Set(validIds)]

            this.productIds = uniqueIds
            this.apiUrl = uniqueIds.length
                ? `https://www.uniqlo.com/ph/api/commerce/v3/en/products?productIds=${uniqueIds.join(',')}&isV2Review=true&imageRatio=3x4`
                : ''
        },

        clearAll() {
            this.rawInput = ''
            this.productIds = []
            this.apiUrl = ''
        },
    },
}
</script>