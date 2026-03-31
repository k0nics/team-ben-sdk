<template>
    <section class="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 class="text-3xl font-semibold text-gray-900">Usage</h2>
        <p class="mt-3 text-lg text-gray-600">
            Below are example commands and what they do.
        </p>

        <div class="mt-6 space-y-5">
            <div class="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                <h3 class="text-lg font-semibold text-gray-900">Start local app</h3>
                <p class="mt-1 text-gray-600">
                    Runs your local development server quickly.
                </p>
                <div class="mt-3">
                    <CommandBlock command="devup" />
                </div>
            </div>

            <div class="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                <h3 class="text-lg font-semibold text-gray-900">Clone project shortcut</h3>
                <p class="mt-1 text-gray-600">
                    Clones a project repository using a shorter alias.
                </p>
                <div class="mt-3">
                    <CommandBlock command="gitclone my-project-name" />
                </div>
            </div>

            <div class="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                <h3 class="text-lg font-semibold text-gray-900">Run API service</h3>
                <p class="mt-1 text-gray-600">
                    Starts the backend service using your predefined shortcut.
                </p>
                <div class="mt-3">
                    <CommandBlock command="serve-api" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import CommandBlock from './CommandBlock.vue'

export default {
    name: 'ShellShortcutUsagePanel',
    components: {
        CommandBlock,
    },
}
</script>