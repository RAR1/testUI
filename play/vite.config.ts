import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { rarOutput } from '@rar-ui/build-utils'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3001,
  },
  // resolve: {
  //   alias: [
  //     {
  //       find: '@test-ui',
  //       replacement: resolve(__dirname, '../packages/components')
  //     }
  //   ]
  // }
})
