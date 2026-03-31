<template>
    <div class="p-8">
        <div class="mx-auto max-w-[1400px]">
            <h1 class="text-5xl font-bold text-gray-900">Shell Shortcuts</h1>
            <p class="mt-3 text-xl text-gray-500">
                Installation guide, commands, and usage notes for your development shell shortcuts.
            </p>

            <div class="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
                <div class="space-y-6">
                    <ShellShortcutIntroPanel />
                    <ShellShortcutInstallPanel />
                </div>

                <div class="space-y-6">
                    <ShellShortcutUsagePanel />

                    <section class="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                        <h2 class="text-3xl font-semibold text-gray-900">Notes</h2>
                        <div class="mt-4 rounded-2xl border border-gray-200 bg-gray-50 p-4 text-gray-600">
                            Make sure the shortcut file path is correct in your shell config.
                            If a command is not recognized, reload the shell or restart the terminal.
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ShellShortcutIntroPanel from '../components/tools/shell-shortcuts/ShellShortcutIntroPanel.vue'
import ShellShortcutInstallPanel from '../components/tools/shell-shortcuts/ShellShortcutInstallPanel.vue'
import ShellShortcutUsagePanel from '../components/tools/shell-shortcuts/ShellShortcutUsagePanel.vue'

export default {
    name: 'ShellShortcuts',
    components: {
        ShellShortcutIntroPanel,
        ShellShortcutInstallPanel,
        ShellShortcutUsagePanel,
    },
}
</script>