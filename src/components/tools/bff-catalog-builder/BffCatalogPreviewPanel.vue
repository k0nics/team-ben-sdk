<template>
    <section class="rounded-3xl border border-gray-200 bg-[#f8f2f3] p-8 shadow-sm">
        <div v-if="products.length === 0" class="flex min-h-[560px] items-center justify-center text-gray-400">
            Catalog preview will appear here
        </div>

        <div v-else class="mx-auto max-w-[560px]">
            <div class="grid grid-cols-2 gap-[10px] lg:grid-cols-3 lg:gap-[15px]">
                <BffCatalogCard v-for="product in products" :key="product.productId" :product="product" />
            </div>
        </div>
    </section>
</template>

<script>
import BffCatalogCard from './BffCatalogCard.vue'

export default {
    name: 'BffCatalogPreviewPanel',
    components: {
        BffCatalogCard,
    },
    props: {
        products: {
            type: Array,
            default: () => [],
        },
    },
}
</script>