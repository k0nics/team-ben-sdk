<template>
    <aside class="w-[290px] shrink-0 border-r border-gray-200 bg-white">
        <div class="p-6">
            <h1 class="text-2xl font-bold text-gray-900">Team Ben - Dev Kit</h1>

            <nav class="mt-8 space-y-3">
                <router-link to="/html-checker" class="block w-full rounded-xl px-4 py-4 text-left text-lg transition"
                    :class="$route.path === '/html-checker'
                        ? 'bg-black text-white'
                        : 'text-gray-800 hover:bg-gray-100'
                        ">
                    HTML Checker
                </router-link>

                <router-link to="/html-builder" class="block w-full rounded-xl px-4 py-4 text-left text-lg transition"
                    :class="$route.path === '/html-builder'
                        ? 'bg-black text-white'
                        : 'text-gray-800 hover:bg-gray-100'
                        ">
                    HTML Builder
                </router-link>

                <router-link to="/bff-code-checker"
                    class="block w-full rounded-xl px-4 py-4 text-left text-lg transition" :class="$route.path === '/bff-code-checker'
                        ? 'bg-black text-white'
                        : 'text-gray-800 hover:bg-gray-100'
                        ">
                    BFF Code Checker
                </router-link>

                <router-link to="/bff-code-url-builder"
                    class="block w-full rounded-xl px-4 py-4 text-left text-lg transition" :class="$route.path === '/bff-code-url-builder'
                        ? 'bg-black text-white'
                        : 'text-gray-800 hover:bg-gray-100'
                        ">
                    BFF API URL Builder
                </router-link>

                <router-link to="/bff-catalog-builder"
                    class="block w-full rounded-xl px-4 py-4 text-left text-lg transition" :class="$route.path === '/bff-catalog-builder'
                        ? 'bg-black text-white'
                        : 'text-gray-800 hover:bg-gray-100'
                        ">
                    BFF Catalog Builder
                </router-link>

                <router-link to="/shell-shortcuts"
                    class="block w-full rounded-xl px-4 py-4 text-left text-lg transition" :class="$route.path === '/shell-shortcuts'
                        ? 'bg-black text-white'
                        : 'text-gray-800 hover:bg-gray-100'
                        ">
                    Shell Shortcuts
                </router-link>
            </nav>
        </div>
    </aside>
</template>

<script>
export default {
    name: 'Sidebar',
}
</script>