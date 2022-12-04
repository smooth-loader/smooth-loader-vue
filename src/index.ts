import SmoothLoaderImg from './components/SmoothLoaderImg.vue'
import SmoothLoaderBg from './components/SmoothLoaderBg.vue'
import type { App, Plugin } from 'vue'

const plugin: Plugin = {
    install(app: App) {
        app.component('SmoothLoaderImg', SmoothLoaderImg)
        app.component('SmoothLoaderBg', SmoothLoaderBg)
    }
}

export default plugin