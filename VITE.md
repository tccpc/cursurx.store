# Vite 构建和部署指南

本项目使用 Vite 作为构建工具，提供快速的开发体验和优化的生产构建。

## 🚀 快速开始

### 1. 安装依赖

```bash
# 使用 npm
npm install

# 或使用 yarn
yarn

# 或使用 pnpm
pnpm install
```

### 2. 开发模式

```bash
npm run dev
```

这将启动开发服务器，默认在 `http://localhost:3000` 打开浏览器。

**开发模式特性：**
- ⚡ 极速热模块替换（HMR）
- 🔥 即时更新，无需刷新页面
- 📦 按需编译
- 🐛 源码映射，便于调试

### 3. 构建生产版本

```bash
npm run build
```

构建产物将输出到 `dist/` 目录。

**构建优化：**
- 代码压缩和混淆
- CSS 提取和压缩
- 静态资源优化
- Tree-shaking 移除未使用代码
- 生成文件哈希用于缓存

### 4. 预览生产构建

```bash
npm run preview
```

在本地预览生产构建，默认在 `http://localhost:4173` 打开。

## 📋 NPM 脚本

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 构建生产版本 |
| `npm run preview` | 预览生产构建 |
| `npm start` | `npm run dev` 的别名 |

## ⚙️ Vite 配置

配置文件：`vite.config.js`

### 开发服务器配置

```javascript
server: {
  port: 3000,        // 开发服务器端口
  open: true,        // 自动打开浏览器
  cors: true,        // 启用 CORS
}
```

### 构建配置

```javascript
build: {
  outDir: 'dist',           // 输出目录
  assetsDir: 'assets',      // 静态资源目录
  sourcemap: false,         // 是否生成源码映射
  minify: 'terser',         // 压缩器
}
```

### 多页面配置

项目支持多个 HTML 入口：
- `index.html` - 主页
- `models.html` - 模型页面
- `terms.html` - 服务条款页面

配置在 `vite.config.js` 的 `rollupOptions.input` 中。

## 🌍 环境变量

### 使用环境变量

1. 复制 `.env.example` 为 `.env.local`：
```bash
cp .env.example .env.local
```

2. 编辑 `.env.local` 填入您的配置

3. 在代码中使用（以 `VITE_` 开头的变量会暴露给客户端）：
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

### 环境变量文件

- `.env` - 所有环境共享
- `.env.local` - 本地环境（不会提交到 Git）
- `.env.development` - 开发环境
- `.env.production` - 生产环境

**注意：** 只有以 `VITE_` 开头的变量才会暴露给客户端代码！

## 📦 构建输出

运行 `npm run build` 后，`dist/` 目录结构：

```
dist/
├── index.html
├── models.html
├── terms.html
└── assets/
    ├── index-[hash].js
    ├── index-[hash].css
    ├── config-[hash].js
    ├── i18n-[hash].js
    └── script-[hash].js
```

所有文件名都包含哈希值，便于长期缓存。

## 🚀 部署到 Vercel

本项目专为 Vercel 部署优化。

### 推荐方式：Git 自动部署

1. 推送代码到 GitHub
2. 在 Vercel 导入仓库
3. Vercel 自动检测 Vite 项目并配置
4. 每次推送自动部署

详细步骤查看 [DEPLOY.md](DEPLOY.md)

### 使用 CLI（可选）

```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
vercel --prod
```

**注意：** 在国内网络环境下，CLI 可能需要代理：
```bash
export HTTP_PROXY=http://127.0.0.1:7890
export HTTPS_PROXY=http://127.0.0.1:7890
vercel
```

### Vercel 配置

项目包含 `vercel.json` 配置文件，已优化：
- 自动构建命令
- 静态资源缓存
- Clean URLs
- 路由重写

查看完整部署指南：[DEPLOY.md](DEPLOY.md)

## 🔧 优化建议

### 1. 代码分割

Vite 自动进行代码分割，但您可以手动控制：

```javascript
// 动态导入
const module = await import('./module.js');
```

### 2. 图片优化

使用 Vite 插件：
```bash
npm i -D vite-plugin-imagemin
```

```javascript
// vite.config.js
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.8, 0.9] },
      svgo: {
        plugins: [{ name: 'removeViewBox' }, { name: 'removeEmptyAttrs', active: false }]
      }
    })
  ]
});
```

### 3. 压缩插件

```bash
npm i -D vite-plugin-compression
```

```javascript
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    })
  ]
});
```

### 4. PWA 支持

```bash
npm i -D vite-plugin-pwa
```

```javascript
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Cursor X',
        short_name: 'CursorX',
        theme_color: '#6366f1',
      }
    })
  ]
});
```

## 📊 构建分析

查看构建包大小和依赖关系：

```bash
npm run build -- --mode analyze
```

## 🐛 常见问题

### Q: 开发服务器启动失败
A: 检查端口 3000 是否被占用，或在 `vite.config.js` 修改端口

### Q: 构建后路径错误
A: 检查 `vite.config.js` 中的 `base` 配置是否正确

### Q: 环境变量不生效
A: 确保变量以 `VITE_` 开头，并使用 `import.meta.env.VITE_XXX` 访问

### Q: 多页面应用路由问题
A: 确保服务器配置了正确的路由回退规则

### Q: 静态资源 404
A: 检查资源路径是否正确，使用相对路径或 `/` 开头的绝对路径

## 📚 相关资源

- [Vite 官方文档](https://vitejs.dev/)
- [Vite 配置参考](https://vitejs.dev/config/)
- [Vite 插件列表](https://github.com/vitejs/awesome-vite#plugins)

## 🔄 从旧版本迁移

如果您之前使用简单的 HTTP 服务器：

1. 安装依赖：`npm install`
2. 启动开发：`npm run dev`（替代 `npx http-server`）
3. 构建项目：`npm run build`
4. 部署 `dist/` 目录而不是项目根目录

**优势：**
- ⚡ 更快的开发体验
- 📦 优化的生产构建
- 🔥 热模块替换
- 🎯 更好的开发工具支持

---

**提示：** 首次使用请运行 `npm install` 安装依赖！

