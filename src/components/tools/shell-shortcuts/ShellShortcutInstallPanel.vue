<template>
    <section class="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 class="text-3xl font-semibold text-gray-900">Installation</h2>
        <p class="mt-3 text-lg text-gray-600">
            Follow these steps to install the shell shortcuts into your terminal environment.
        </p>

        <div class="mt-6 space-y-5">
            <div>
                <h3 class="mb-2 text-xl font-semibold text-gray-900">Step 1: Clone the repository</h3>
                <CommandBlock label="Clone" command="git clone https://your-repository-url.git" />
            </div>

            <div>
                <h3 class="mb-2 text-xl font-semibold text-gray-900">Step 2: Open your shell config</h3>
                <CommandBlock label="Zsh" command="code ~/.zshrc" />
            </div>

            <div>
                <h3 class="mb-2 text-xl font-semibold text-gray-900">Step 3: Source the shortcut file</h3>
                <CommandBlock label="Source command" command='source "/path/to/your/shell-shortcuts.sh"' />
            </div>

            <div>
                <h3 class="mb-2 text-xl font-semibold text-gray-900">Step 4: Reload your shell</h3>
                <CommandBlock label="Reload" command="source ~/.zshrc" />
            </div>
        </div>
    </section>
</template>

<script>
import CommandBlock from './CommandBlock.vue'

export default {
    name: 'ShellShortcutInstallPanel',
    components: {
        CommandBlock,
    },
}
</script>