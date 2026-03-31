<template>
    <article class="bg-transparent mb-6">
        <div class="mb-2">
            <div class="text-[11px] uppercase tracking-wide text-gray-500">
                BFF Code
            </div>
            <div
                class="mt-1 inline-block rounded-md bg-white px-2 py-1 text-xs font-semibold text-gray-800 border border-gray-200">
                {{ product.productId || 'No Product ID' }}
            </div>
        </div>

        <a :href="product.href || '#'" class="block text-inherit no-underline">
            <div class="overflow-hidden bg-[#efefef]">
                <img :src="product.image" :alt="product.name" class="h-[240px] w-full object-cover" />
            </div>

            <div class="mt-3 flex items-center justify-between">
                <div class="flex items-center gap-1.5">
                    <span v-for="(chip, index) in product.colorChips.slice(0, 4)" :key="`${chip.src}-${index}`"
                        class="inline-flex h-5 w-5 overflow-hidden rounded-full border border-gray-300 bg-white"
                        :title="chip.alt">
                        <img :src="chip.src" :alt="chip.alt" class="h-full w-full object-cover" />
                    </span>
                </div>

                <span class="text-2xl leading-none text-gray-900">♡</span>
            </div>

            <p class="mt-3 text-[14px] text-gray-600">
                {{ product.gender }}
            </p>

            <p class="mt-1 text-[17px] leading-7 text-gray-900">
                {{ product.name }}
            </p>

            <p v-if="product.flag" class="mt-1 text-[14px] text-gray-500">
                {{ product.flag }}
            </p>

            <div class="mt-3">
                <p v-if="product.basePrice && product.promoPrice" class="text-[15px] text-gray-500 line-through">
                    {{ formatPhp(product.basePrice) }}
                </p>

                <p v-if="product.promoPrice" class="text-[20px] font-semibold text-red-600">
                    {{ formatPhp(product.promoPrice) }}
                </p>

                <p v-else-if="product.basePrice" class="text-[17px] font-medium text-gray-900">
                    {{ formatPhp(product.basePrice) }}
                </p>

                <p v-else-if="product.price" class="text-[17px] font-medium text-gray-900">
                    {{ product.price }}
                </p>
            </div>

            <p v-if="product.promoDetail" class="mt-2 text-[14px] leading-6 text-red-600">
                {{ product.promoDetail }}
            </p>

            <p v-if="product.reviewNumber || product.reviewCount" class="mt-2 text-[13px] text-gray-700">
                ★ {{ product.reviewNumber }}
                <span class="text-gray-500">({{ product.reviewCount }})</span>
            </p>
        </a>
    </article>
</template>

<script>
export default {
    name: 'BffCatalogCard',
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
    methods: {
        formatPhp(value) {
            if (!value) return ''
            return `PHP ${Number(value).toLocaleString('en-PH', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            })}`
        },
    },
}
</script>