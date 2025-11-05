import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // 开发服务器配置
  server: {
    port: 3000,
    open: true,
    cors: true,
  },

  // 构建配置
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    
    // 静态资源处理
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        models: resolve(__dirname, 'models.html'),
        terms: resolve(__dirname, 'terms.html'),
      },
      output: {
        // 资源文件命名
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
    
    // 压缩选项
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },

  // 预览服务器配置
  preview: {
    port: 4173,
    open: true,
  },

  // 优化依赖
  optimizeDeps: {
    include: [],
  },
});

