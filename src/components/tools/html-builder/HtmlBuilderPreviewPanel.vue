<template>
    <section>
        <label class="mb-3 block text-2xl font-semibold text-gray-900">
            Preview
        </label>

        <div class="overflow-hidden rounded-2xl border border-gray-300 bg-white">
            <iframe ref="previewFrame" class="h-[560px] w-full border-0" title="HTML Builder Preview"></iframe>
        </div>

        <p class="mt-4 text-lg text-gray-500">
            <span v-if="selectedStyles.length === 0">
                No CSS styles selected. Select one or more CSS files above.
            </span>
            <span v-else>
                Active styles:
                {{ selectedStyles.join(', ') }}
            </span>
        </p>
    </section>
</template>

<script>
export default {
    name: 'HtmlBuilderPreviewPanel',
    props: {
        htmlCode: {
            type: String,
            default: '',
        },
        selectedStyles: {
            type: Array,
            default: () => [],
        },
        styleMap: {
            type: Object,
            default: () => ({}),
        },
    },
    mounted() {
        this.renderPreview()
    },
    watch: {
        htmlCode: 'renderPreview',
        selectedStyles: {
            handler: 'renderPreview',
            deep: true,
        },
    },
    methods: {
        renderPreview() {
            const iframe = this.$refs.previewFrame
            if (!iframe) return

            const doc = iframe.contentDocument || iframe.contentWindow.document
            const mergedStyles = this.selectedStyles
                .map((styleName) => this.styleMap[styleName] || '')
                .join('\n')

            doc.open()
            doc.write(`
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <style>
                html, body {
                  margin: 0;
                  padding: 0;
                }
                ${mergedStyles}
              </style>
            </head>
            <body>
              ${this.htmlCode}
            </body>
          </html>
        `)
            doc.close()
        },
    },
}
</script>