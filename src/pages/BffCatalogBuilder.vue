<template>
    <div class="p-8">
        <div class="mx-auto max-w-[1400px]">
            <h1 class="text-5xl font-bold text-gray-900">BFF Catalog Builder</h1>
            <p class="mt-3 text-xl text-gray-500">
                Paste rendered BFF HTML or product API JSON and generate the catalog preview automatically.
            </p>

            <div class="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-[420px_minmax(0,1fr)]">
                <BffCatalogInputPanel v-model:rawHtml="rawHtml" v-model:rawJson="rawJson" v-model:inputMode="inputMode"
                    :product-ids="productIds" :products-count="products.length" @build-from-html="buildFromHtml"
                    @build-from-json="buildFromJson" @clear="clearAll" />

                <BffCatalogPreviewPanel :products="products" />
            </div>
        </div>
    </div>
</template>

<script>
import BffCatalogInputPanel from '../components/tools/bff-catalog-builder/BffCatalogInputPanel.vue'
import BffCatalogPreviewPanel from '../components/tools/bff-catalog-builder/BffCatalogPreviewPanel.vue'
import {
    parseBffRenderedHtml,
    parseBffApiJson
} from '../components/tools/bff-catalog-builder/bffCatalogParser'

export default {
    name: 'BffCatalogBuilder',
    components: {
        BffCatalogInputPanel,
        BffCatalogPreviewPanel,
    },
    data() {
        return {
            inputMode: 'html',
            rawHtml: '',
            rawJson: '',
            productIds: [],
            products: [],
        }
    },
    methods: {
        buildFromHtml() {
            const result = parseBffRenderedHtml(this.rawHtml)
            this.productIds = result.productIds
            this.products = result.products
        },

        buildFromJson() {
            const result = parseBffApiJson(this.rawJson)
            this.productIds = result.productIds
            this.products = result.products
        },

        clearAll() {
            this.rawHtml = ''
            this.rawJson = ''
            this.productIds = []
            this.products = []
            this.inputMode = 'html'
        },
    },
}
</script>