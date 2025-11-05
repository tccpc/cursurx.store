# 部署指南

本文档介绍如何将 Cursor X 网站部署到各种托管平台。

## 📋 部署前准备

### 1. 配置网站
在部署之前，确保已经完成以下配置：

```bash
# 1. 编辑 config.js 文件
# 设置您的下载链接、支付地址等
```

**重要配置项：**
- ✅ `download.windowsUrl` - Windows 下载地址
- ✅ `download.macosUrl` - macOS 下载地址
- ✅ `payment.plan1Day` - 1天套餐支付地址
- ✅ `payment.plan7Day` - 7天套餐支付地址
- ✅ `payment.plan30Day` - 30天套餐支付地址

### 2. 测试本地运行
```bash
# 使用 Python
python -m http.server 8000

# 或使用 Node.js
npx http-server -p 8000
```

访问 `http://localhost:8000` 确保一切正常。

## 🚀 部署方式

### 方式 1: Vercel（推荐）

**优势：** 免费、快速、自动 HTTPS、CDN 加速

1. 安装 Vercel CLI（可选）
```bash
npm i -g vercel
```

2. 部署
```bash
cd cursurx.store
vercel
```

3. 或者通过 Web 界面：
   - 访问 [vercel.com](https://vercel.com)
   - 导入 Git 仓库或直接拖放文件夹
   - 自动部署完成

**配置文件（可选）：**
创建 `vercel.json`：
```json
{
  "version": 2,
  "builds": [
    {
      "src": "**/*",
      "use": "@vercel/static"
    }
  ]
}
```

### 方式 2: Netlify

**优势：** 免费、简单、强大的表单处理

1. 通过拖放部署：
   - 访问 [netlify.com](https://netlify.com)
   - 将项目文件夹拖到页面上
   - 自动部署完成

2. 或使用 CLI：
```bash
npm install netlify-cli -g
netlify deploy
```

**配置文件（可选）：**
创建 `netlify.toml`：
```toml
[build]
  publish = "."

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 方式 3: GitHub Pages

**优势：** 完全免费、与 GitHub 集成

1. 创建 GitHub 仓库

2. 推送代码：
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/你的用户名/cursurx.store.git
git push -u origin main
```

3. 启用 GitHub Pages：
   - 进入仓库 Settings
   - 找到 Pages 部分
   - Source 选择 `main` 分支
   - 保存

4. 访问 `https://你的用户名.github.io/cursurx.store/`

### 方式 4: Cloudflare Pages

**优势：** 全球 CDN、免费、快速

1. 访问 [pages.cloudflare.com](https://pages.cloudflare.com)

2. 连接 Git 仓库或直接上传文件

3. 部署设置：
   - Build command: (留空)
   - Build output directory: `/`

4. 部署完成

### 方式 5: 传统服务器（Apache/Nginx）

#### Apache

1. 上传所有文件到服务器：
```bash
scp -r * user@your-server.com:/var/www/html/
```

2. 确保文件权限正确：
```bash
chmod -R 755 /var/www/html/
```

3. Apache 配置（可选）：
```apache
<VirtualHost *:80>
    ServerName cursorx.example.com
    DocumentRoot /var/www/html
    
    <Directory /var/www/html>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
    
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

#### Nginx

1. 上传文件到服务器

2. Nginx 配置：
```nginx
server {
    listen 80;
    server_name cursorx.example.com;
    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # 启用 Gzip 压缩
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

3. 重启 Nginx：
```bash
sudo nginx -t
sudo systemctl reload nginx
```

## 🔒 HTTPS 配置

### 使用 Let's Encrypt（推荐）

```bash
# 安装 Certbot
sudo apt-get install certbot python3-certbot-nginx

# 获取证书（Nginx）
sudo certbot --nginx -d cursorx.example.com

# 获取证书（Apache）
sudo certbot --apache -d cursorx.example.com

# 自动续期
sudo certbot renew --dry-run
```

## 🌍 自定义域名

### Vercel/Netlify

1. 进入项目设置
2. 添加自定义域名
3. 在域名注册商处添加 DNS 记录：
   - Type: `A` 或 `CNAME`
   - Name: `@` 或 `www`
   - Value: 根据平台提供的值

### Cloudflare Pages

1. 添加自定义域名
2. Cloudflare 会自动处理 DNS 设置

## 📊 性能优化建议

### 1. 启用压缩
大多数托管平台默认启用 Gzip/Brotli 压缩

### 2. 缓存策略
在服务器配置中设置缓存头：
```nginx
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### 3. CDN 加速
- Vercel、Netlify、Cloudflare Pages 自带全球 CDN
- 传统服务器可使用 Cloudflare CDN

### 4. 图片优化
如果添加图片，建议：
- 使用 WebP 格式
- 压缩图片大小
- 使用懒加载

## 🔍 监控和分析

### 添加 Google Analytics
在 `index.html` 的 `</head>` 之前添加：
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

## ✅ 部署检查清单

- [ ] 已配置 `config.js` 中的所有必要参数
- [ ] 下载链接可访问
- [ ] 支付链接配置正确
- [ ] 本地测试通过
- [ ] HTTPS 已启用
- [ ] 自定义域名已配置（如需要）
- [ ] 网站在各设备上显示正常
- [ ] 所有链接都正常工作

## 🆘 常见问题

### Q: 404 错误
确保所有文件都已上传，特别是 `index.html`

### Q: 样式未加载
检查 `styles.css` 路径是否正确，服务器 MIME 类型配置

### Q: JavaScript 不工作
检查浏览器控制台错误，确保 `config.js` 和 `script.js` 都已加载

### Q: 支付链接不工作
检查 `config.js` 中的支付 URL 配置

## 📞 需要帮助？

如果遇到部署问题：
1. 检查浏览器控制台错误
2. 查看服务器日志
3. 确认所有配置正确
4. 参考具体托管平台的文档

---

**祝部署顺利！** 🎉

