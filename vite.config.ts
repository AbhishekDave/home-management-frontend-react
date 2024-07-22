import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// import { terser } from 'rollup-plugin-terser'; // Optional, for more advanced terser control

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src")}]
  },
  build: {
    // Enable minification (default behavior)
    minify: 'terser',
    // **Optional:** Configure terser for more control (overrides Vite's defaults)
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs
        drop_debugger: true, // Remove debugger statements
      },
      mangle: {
        properties: true, // Mangle property names
      },
      output: {
        comments: false, // Remove comments (except for license/copyright)
      },
    },
    // Keep `rollupOptions` empty to leverage Vite's bundling
  },
});
