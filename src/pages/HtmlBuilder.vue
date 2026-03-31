<template>
    <div class="p-8">
        <div class="mx-auto max-w-[1400px]">
            <h1 class="text-5xl font-bold text-gray-900">HTML Builder</h1>
            <p class="mt-3 text-xl text-gray-500">
                Paste your HTML code and select CSS files to preview and build complete pages
            </p>

            <div class="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-[430px_minmax(0,1fr)]">
                <HtmlBuilderInputPanel v-model:htmlCode="htmlCode" v-model:selectedStyles="selectedStyles"
                    @copy="copyHtml" @reset="resetBuilder" />

                <HtmlBuilderPreviewPanel :html-code="htmlCode" :selected-styles="selectedStyles"
                    :style-map="styleMap" />
            </div>
        </div>
    </div>
</template>

<script>
import HtmlBuilderInputPanel from '../components/tools/html-builder/HtmlBuilderInputPanel.vue'
import HtmlBuilderPreviewPanel from '../components/tools/html-builder/HtmlBuilderPreviewPanel.vue'

export default {
    name: 'HtmlBuilder',
    components: {
        HtmlBuilderInputPanel,
        HtmlBuilderPreviewPanel,
    },
    data() {
        return {
            htmlCode: `<div style="padding: 2rem;">
    <h1>Welcome to HTML Builder</h1>
    <p>Paste your HTML code here and select CSS files to style it.</p>
    <button>Click Me</button>
  </div>`,
            selectedStyles: [],
            styleMap: {
                modern: `
            body {
              font-family: Inter, Arial, sans-serif;
              background: #f8fafc;
              color: #111827;
            }
            h1 {
              font-size: 42px;
              line-height: 1.1;
              margin-bottom: 16px;
              font-weight: 800;
            }
            p {
              font-size: 18px;
              color: #4b5563;
              margin-bottom: 20px;
            }
            button {
              background: #111827;
              color: white;
              border: 0;
              border-radius: 12px;
              padding: 12px 18px;
              font-size: 16px;
              cursor: pointer;
            }
          `,
                minimal: `
            body {
              font-family: Arial, sans-serif;
              background: white;
              color: #222;
            }
            h1 {
              font-size: 32px;
              margin-bottom: 12px;
              font-weight: 700;
            }
            p {
              font-size: 16px;
              margin-bottom: 16px;
            }
            button {
              border: 1px solid #ccc;
              background: #fff;
              padding: 10px 14px;
              cursor: pointer;
            }
          `,
                dark: `
            body {
              font-family: Inter, Arial, sans-serif;
              background: #111827;
              color: #f9fafb;
            }
            h1 {
              font-size: 40px;
              margin-bottom: 16px;
              font-weight: 800;
              color: #ffffff;
            }
            p {
              font-size: 18px;
              color: #d1d5db;
              margin-bottom: 20px;
            }
            button {
              background: #374151;
              color: white;
              border: 1px solid #4b5563;
              border-radius: 10px;
              padding: 12px 18px;
              cursor: pointer;
            }
          `,
            },
        }
    },
    methods: {
        async copyHtml() {
            try {
                await navigator.clipboard.writeText(this.htmlCode)
            } catch (error) {
                console.error('Copy failed:', error)
            }
        },
        resetBuilder() {
            this.htmlCode = `<div style="padding: 2rem;">
    <h1>Welcome to HTML Builder</h1>
    <p>Paste your HTML code here and select CSS files to style it.</p>
    <button>Click Me</button>
  </div>`
            this.selectedStyles = []
        },
    },
}
</script>