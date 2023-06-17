import { createApp } from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.dark.less'
import './index.less'
import router from '@/router'
import vue3videoPlay from 'vue3-video-play' // 引入组件
import 'vue3-video-play/dist/style.css'

createApp(App).use(router).use(vue3videoPlay).mount('#app')
