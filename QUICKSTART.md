# 🚀 快速入门指南

欢迎使用 Cursor X 网站！这是一个 5 分钟快速配置指南。

## ⚡ 3 步快速上线

### 第 1 步：编辑配置文件（2分钟）

打开 `config.js`，修改以下关键配置：

```javascript
// 1. 设置下载链接
download: {
    windowsUrl: '你的Windows下载链接',  // ← 改这里
    macosUrl: '你的macOS下载链接',      // ← 改这里
}

// 2. 设置支付链接
payment: {
    plan1Day: '1天套餐支付链接',   // ← 改这里
    plan7Day: '7天套餐支付链接',   // ← 改这里
    plan30Day: '30天套餐支付链接', // ← 改这里
}
```

### 第 2 步：本地测试（1分钟）

```bash
# 快速启动
npm start

# 或使用 Python
python -m http.server 8000
```

访问 `http://localhost:8000` 查看效果 ✨

### 第 3 步：一键部署（2分钟）

#### 最简单：使用 Vercel

1. 访问 [vercel.com](https://vercel.com)
2. 拖放项目文件夹
3. 完成！🎉

#### 或使用 Netlify

1. 访问 [netlify.com](https://netlify.com)  
2. 拖放项目文件夹
3. 完成！🎉

## 📝 必改配置清单

- [ ] `download.windowsUrl` - Windows 下载地址
- [ ] `download.macosUrl` - macOS 下载地址
- [ ] `payment.plan1Day` - 1天套餐支付地址
- [ ] `payment.plan7Day` - 7天套餐支付地址
- [ ] `payment.plan30Day` - 30天套餐支付地址

## 🎨 可选配置

### 修改品牌名称
```javascript
brand: {
    name: 'Your Brand Name',  // 修改品牌名
}
```

### 修改定价
```javascript
plans: [
    {
        price: '$5',  // 修改价格
        // ...
    }
]
```

### 关闭促销横幅
```javascript
promotion: {
    enabled: false,  // 设为 false
}
```

## 🔧 支付集成示例

### Stripe
```javascript
payment: {
    plan1Day: 'https://buy.stripe.com/xxxxx',
    plan7Day: 'https://buy.stripe.com/yyyyy',
    plan30Day: 'https://buy.stripe.com/zzzzz',
}
```

### PayPal
```javascript
payment: {
    plan1Day: 'https://www.paypal.com/paypalme/your-link',
}
```

### 自定义支付页面
```javascript
payment: {
    plan1Day: 'https://yoursite.com/checkout?plan=1day',
    plan7Day: 'https://yoursite.com/checkout?plan=7day',
    plan30Day: 'https://yoursite.com/checkout?plan=30day',
}
```

## 📦 文件下载设置

### 使用 CDN
```javascript
download: {
    windowsUrl: 'https://cdn.yoursite.com/cursor-x-v1.0-windows.exe',
    macosUrl: 'https://cdn.yoursite.com/cursor-x-v1.0-macos.dmg',
}
```

### 使用 GitHub Releases
```javascript
download: {
    windowsUrl: 'https://github.com/yourname/cursor-x/releases/download/v1.0/cursor-x-windows.exe',
    macosUrl: 'https://github.com/yourname/cursor-x/releases/download/v1.0/cursor-x-macos.dmg',
}
```

## ❓ 常见问题

### Q: 修改配置后没有生效？
A: 清除浏览器缓存（Ctrl+Shift+R 或 Cmd+Shift+R）

### Q: 如何修改颜色？
A: 编辑 `styles.css` 中的 `:root` 变量

### Q: 如何添加更多套餐？
A: 在 `config.js` 的 `plans` 数组中添加新对象

### Q: 支持多语言吗？
A: 已支持中英文切换！点击右上角的 EN/繁中 按钮即可切换。详见 [LANGUAGE.md](LANGUAGE.md)

## 🎯 下一步

- ✅ 完成基础配置
- 📖 阅读 [完整文档](README.md)
- 🚀 查看 [部署指南](DEPLOYMENT.md)
- 🌍 了解 [多语言功能](LANGUAGE.md)
- 🎨 自定义样式和内容

## 💡 专业提示

1. **使用环境变量**：如果使用构建工具，可以将敏感配置移到环境变量
2. **版本控制**：不要将 API 密钥提交到 Git
3. **测试支付**：先使用测试环境测试支付流程
4. **CDN 加速**：将大文件放到 CDN 上
5. **监控分析**：添加 Google Analytics 追踪访问

---

需要帮助？查看完整 [README.md](README.md) 或 [DEPLOYMENT.md](DEPLOYMENT.md)

