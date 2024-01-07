import './bootstrap';
import '../css/app.css'; 
import { createInertiaApp } from '@inertiajs/vue3'
import createServer from '@inertiajs/vue3/server'
import { renderToString } from '@vue/server-renderer'
import { createSSRApp, h } from 'vue'

// Vuetify
import '@mdi/font/scss/materialdesignicons.scss'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const vuetify = createVuetify({
  ssr: true
})


createServer(page =>
  createInertiaApp({
    page,
    render: renderToString,
    resolve: name => {
      const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
      return pages[`./Pages/${name}.vue`]
    },
    setup({ el, App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props),
      })
      .use(plugin)
      .use(vuetify)
      .mount(el)
    },
  }),
)