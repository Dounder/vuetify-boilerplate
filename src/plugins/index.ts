// Plugins
import router from '../router';
import vuetify from './vuetify';
import { loadFonts } from './webfontloader';
import { createPinia } from 'pinia';

// Types
import type { App } from 'vue';

const pinia = createPinia();

export function registerPlugins(app: App) {
  loadFonts();
  app.use(vuetify).use(router).use(pinia);
}
