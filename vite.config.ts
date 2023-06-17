import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dirs: ['src/utils'],
      include: [
        // .ts, .tsx, .js, .jsx
        /\.[tj]sx?$/,
        // .vue
        /\.vue$/,
        /\.vue\?vue/,
      ],
      dts: 'src/auto-imports.d.ts',
    }),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false,
          resolveIcons: true,
        }),
      ],
      dirs: ['src/components', 'src/layout'],
      extensions: ['vue'],
      dts: 'src/components.d.ts',
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://172.21.16.1:3333',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'body-background': '#292c32',
        },
        javascriptEnabled: true,
      },
    },
  },
})
