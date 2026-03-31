<template>
  <div class="flex h-screen">
    <Sidebar />
    <main class="flex-1 overflow-auto">
      <router-view />
    </main>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue'

export default {
  components: { Sidebar }
}
</script>