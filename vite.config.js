import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/izura/', // <--- Tambahkan nama repository-mu di sini, diapit garis miring
})