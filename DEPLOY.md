# Vercel 部署指南

本项目专为 Vercel 部署优化。

## 🚀 快速部署（推荐）

### 方式 1：通过 GitHub（自动部署）

这是最推荐的方式，支持自动部署和预览。

#### 步骤：

**1. 推送代码到 GitHub**

```bash
# 初始化 Git（如果还没有）
git init
git add .
git commit -m "Initial commit"
git branch -M main

# 在 GitHub 创建新仓库后
git remote add origin https://github.com/你的用户名/cursurx.store.git
git push -u origin main
```

**2. 连接 Vercel**

1. 访问 [vercel.com](https://vercel.com)
2. 使用 GitHub 账号登录（或创建账号）
3. 点击 "Add New Project"
4. 选择 "Import Git Repository"
5. 找到并选择 `cursurx.store` 仓库
6. Vercel 自动检测配置：
   - Framework: Vite ✅
   - Build Command: `npm run build` ✅
   - Output Directory: `dist` ✅
7. 点击 "Deploy"

**3. 等待部署完成**

- 首次部署约 1-2 分钟
- 部署成功后获得免费域名：`your-project.vercel.app`
- 自动配置 HTTPS
- 全球 CDN 加速

**优势：**
- ✅ 每次 `git push` 自动部署
- ✅ Pull Request 自动生成预览链接
- ✅ 零配置，开箱即用
- ✅ 免费 HTTPS + CDN
- ✅ 部署历史和回滚

---

### 方式 2：使用 Vercel CLI

如果您在国内网络环境，CLI 可能遇到连接问题，建议使用方式 1 的 Git 集成。

#### 使用代理（如需要）

```bash
# macOS/Linux
export HTTP_PROXY=http://127.0.0.1:7890
export HTTPS_PROXY=http://127.0.0.1:7890

# Windows PowerShell
$env:HTTP_PROXY="http://127.0.0.1:7890"
$env:HTTPS_PROXY="http://127.0.0.1:7890"
```

将端口改为您的代理端口。

#### 安装和部署

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录
vercel login

# 部署
vercel

# 部署到生产环境
vercel --prod
```

---

## ⚙️ Vercel 配置说明

项目包含 `vercel.json` 配置文件，已优化以下设置：

### 构建配置
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

### 缓存优化
静态资源（CSS、JS）自动配置长期缓存：
- `Cache-Control: public, max-age=31536000, immutable`

### 路由配置
支持客户端路由，所有路径重定向到 `index.html`

### Clean URLs
启用 Clean URLs，自动去除 `.html` 后缀

---

## 🌐 自定义域名

### 添加域名

1. 在 Vercel 项目设置中
2. 进入 "Domains" 标签
3. 添加您的域名（如 `cursorx.com`）
4. 按照提示配置 DNS：

**方式 A：使用 Vercel DNS**
- 将域名的 Nameservers 指向 Vercel

**方式 B：CNAME 记录**
```
CNAME  www  cname.vercel-dns.com
A      @    76.76.21.21
```

5. 等待 DNS 生效（通常几分钟）
6. Vercel 自动配置 HTTPS 证书

---

## 🔧 环境变量

### 在 Vercel 设置环境变量

1. 进入项目设置
2. 找到 "Environment Variables"
3. 添加变量（以 `VITE_` 开头）：

```
VITE_API_URL=https://api.cursorx.com
VITE_GA_ID=G-XXXXXXXXXX
```

4. 选择环境：
   - Production（生产）
   - Preview（预览）
   - Development（开发）

5. 保存并重新部署

### 在代码中使用

```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## 📊 部署后检查

### 验证部署

- [ ] 访问 Vercel 提供的域名
- [ ] 检查页面加载正常
- [ ] 测试语言切换功能
- [ ] 检查所有链接正常
- [ ] 测试移动端适配
- [ ] 查看浏览器控制台无错误

### 性能优化

Vercel 自动提供：
- ✅ 全球 CDN
- ✅ 自动压缩（Gzip/Brotli）
- ✅ HTTP/2 和 HTTP/3
- ✅ 图片优化
- ✅ Edge 缓存

---

## 🔄 更新部署

### Git 集成方式

```bash
# 修改代码后
git add .
git commit -m "Update content"
git push

# Vercel 自动部署
```

### CLI 方式

```bash
# 部署到预览环境
vercel

# 部署到生产环境
vercel --prod
```

---

## 📈 监控和分析

### Vercel Analytics

1. 在项目设置中启用 Analytics
2. 查看实时访问数据
3. 性能指标（Web Vitals）
4. 访客地理分布

### 集成 Google Analytics

在 `index.html` 的 `<head>` 中添加：

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 🐛 故障排查

### 构建失败

**检查构建日志：**
1. 在 Vercel 部署页面查看日志
2. 常见问题：
   - 依赖安装失败 → 检查 `package.json`
   - 构建命令错误 → 验证本地 `npm run build`
   - 文件路径错误 → 检查大小写敏感

**本地验证：**
```bash
# 清理并重新构建
rm -rf node_modules dist
npm install
npm run build
npm run preview
```

### 404 错误

确保 `vercel.json` 包含路由重写规则（已配置）。

### 样式/脚本未加载

检查：
- 文件路径是否正确
- `vite.config.js` 的 `base` 配置
- 浏览器控制台错误

### 环境变量不生效

- 确保变量名以 `VITE_` 开头
- 重新部署项目
- 检查环境选择（Production/Preview）

---

## 💡 最佳实践

### 开发流程

```bash
# 1. 本地开发
npm run dev

# 2. 测试构建
npm run build
npm run preview

# 3. 提交代码
git add .
git commit -m "Feature: add new functionality"
git push

# 4. Vercel 自动部署
```

### 分支策略

- `main` → 生产环境（vercel.app 主域名）
- `dev` → 预览环境（自动生成预览链接）
- Pull Request → 自动预览部署

### 版本管理

```bash
# 创建版本标签
git tag v1.0.0
git push --tags

# 在 Vercel 可以回滚到任意部署版本
```

---

## 📞 获取帮助

### Vercel 资源
- [Vercel 文档](https://vercel.com/docs)
- [Vite 部署指南](https://vitejs.dev/guide/static-deploy.html#vercel)
- [Vercel 社区](https://github.com/vercel/vercel/discussions)

### 项目文档
- [README.md](README.md) - 项目概览
- [VITE.md](VITE.md) - Vite 配置说明
- [DEPLOY_CN.md](DEPLOY_CN.md) - 国内网络部署方案

---

## ✅ 部署检查清单

部署前确认：

- [ ] 本地运行 `npm run build` 成功
- [ ] 本地运行 `npm run preview` 验证构建结果
- [ ] 更新 `config.js` 中的实际 URL
- [ ] 测试所有功能正常
- [ ] 代码已提交到 Git

部署后确认：

- [ ] 访问 Vercel 域名正常
- [ ] 所有页面可访问
- [ ] 语言切换正常
- [ ] 移动端显示正常
- [ ] 浏览器控制台无错误
- [ ] 下载链接配置正确
- [ ] 支付链接配置正确

---

**🎉 恭喜！您的 Cursor X 网站已成功部署到 Vercel！**

访问您的网站：`https://your-project.vercel.app`

