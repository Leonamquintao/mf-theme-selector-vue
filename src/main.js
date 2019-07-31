import Vue from 'vue'
import App from './App.vue'
import store from './store'

// Necessário para lidar com browsers antigos.
import 'document-register-element/build/document-register-element'
import vueCustomElement from 'vue-custom-element'

Vue.config.productionTip = false

Vue.use(vueCustomElement)

App.store = store
Vue.customElement('theme-selector', App)
