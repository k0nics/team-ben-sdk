import { createRouter, createWebHistory } from 'vue-router'

import HtmlChecker from '../pages/HtmlChecker.vue'
import HtmlBuilder from '../pages/HtmlBuilder.vue'
import BffCodeChecker from '../pages/BffCodeChecker.vue'
import BffApiUrlBuilder from '../pages/BffApiUrlBuilder.vue'
import BffCatalogBuilder from '../pages/BffCatalogBuilder.vue'
import ShellShortcuts from '../pages/ShellShortcuts.vue'

const routes = [
  { path: '/', redirect: '/html-checker' },
  { path: '/html-checker', component: HtmlChecker },
  { path: '/html-builder', component: HtmlBuilder },
  { path: '/bff-code-checker', component: BffCodeChecker },
  { path: '/bff-code-url-builder', component: BffApiUrlBuilder },
  { path: '/bff-catalog-builder', component: BffCatalogBuilder },
  { path: '/shell-shortcuts', component: ShellShortcuts }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})