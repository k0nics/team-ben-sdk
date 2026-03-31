<template>
    <section class="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 class="text-3xl font-semibold text-gray-900">Overview</h2>
        <p class="mt-3 text-lg text-gray-600">
            This shell shortcuts tool provides reusable terminal commands for local development.
            It helps developers run common actions faster without typing long commands repeatedly.
        </p>

        <div class="mt-6 space-y-3">
            <div class="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                <h3 class="text-lg font-semibold text-gray-900">What it can do</h3>
                <ul class="mt-2 space-y-2 text-gray-600">
                    <li>Run common development commands quickly</li>
                    <li>Standardize terminal workflows across the team</li>
                    <li>Reduce setup mistakes and repetitive typing</li>
                </ul>
            </div>

            <div class="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                <h3 class="text-lg font-semibold text-gray-900">Recommended for</h3>
                <p class="mt-2 text-gray-600">
                    Developers working on shared projects who frequently use the same shell commands.
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ShellShortcutIntroPanel',
}
</script>