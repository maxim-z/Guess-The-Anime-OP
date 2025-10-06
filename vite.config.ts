import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig(({ mode } ) => {
  const isProduction = mode === 'production';

  return {
    base: isProduction ? '/Guess-The-Anime-OP/' : '/',
    plugins: [react(), tailwindcss()],
    server: {
      host: true,
      port: 8080
    },
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@types': path.resolve(__dirname, 'src/types'),
        '@config': path.resolve(__dirname, 'src/config')
      },
    },
  }
});