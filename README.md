# Cursor X 官方网站

这是一个现代化的 Cursor X 产品展示网站，提供 Cursor 编辑器的增强插件服务。

## 🌟 特性

- ✨ 现代化、响应式设计
- 🎨 精美的渐变色和动画效果
- 📱 完全移动端适配
- 🌍 **中英文切换支持**（自动保存语言偏好）
- ⚙️ 灵活的配置系统
- 🔧 易于自定义和维护

## 📁 项目结构

```
cursurx.store/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # JavaScript 交互逻辑
├── config.js           # 配置文件（关键！）
├── i18n.js             # 多语言翻译文件
├── models.html         # 支持的AI模型页面
├── terms.html          # 服务条款页面
├── README.md           # 本文档
├── DEPLOYMENT.md       # 部署指南
├── QUICKSTART.md       # 快速入门
├── LANGUAGE.md         # 多语言使用指南
├── TESTING.md          # 功能测试清单
└── CHANGELOG.md        # 更新日志
```

## ⚙️ 配置说明

所有关键配置都在 `config.js` 文件中，您可以轻松自定义以下内容：

### 1. 品牌信息
```javascript
brand: {
    name: 'Cursor X',                    // 品牌名称
    slogan: '...',                       // 标语
    description: '...',                  // 描述
}
```

### 2. 下载链接
```javascript
download: {
    windowsUrl: 'https://...',           // Windows 下载地址
    macosUrl: 'https://...',             // macOS 下载地址
}
```

### 3. 支付链接
```javascript
payment: {
    plan1Day: 'https://...',             // 1天套餐支付地址
    plan7Day: 'https://...',             // 7天套餐支付地址
    plan30Day: 'https://...',            // 30天套餐支付地址
}
```

### 4. 外部链接
```javascript
links: {
    models: '/models.html',              // 模型页面
    terms: '/terms.html',                // 服务条款
    privacy: '/privacy.html',            // 隐私政策
}
```

### 5. 促销信息
```javascript
promotion: {
    enabled: true,                       // 是否显示促销横幅
    text: '...',                        // 促销文本
}
```

### 6. 定价方案
```javascript
plans: [
    {
        id: '1day',                      // 方案ID
        name: '1-Day',                   // 方案名称
        quota: '5x Pro account quota',   // 配额说明
        price: '$2',                     // 价格
        features: [...],                 // 功能列表
        recommended: false,              // 是否推荐
    },
    // ... 更多方案
]
```

### 7. 特色功能
```javascript
features: [
    {
        title: '...',                    // 功能标题
        description: '...',              // 功能描述
    },
    // ... 更多功能
]
```

### 8. FAQ
```javascript
faq: [
    {
        question: '...',                 // 问题
        answer: '...',                   // 答案
    },
    // ... 更多问答
]
```

## 🚀 快速开始

### 1. 克隆或下载项目
```bash
git clone <your-repo-url>
cd cursurx.store
```

### 2. 配置网站
编辑 `config.js` 文件，设置您的：
- 下载链接
- 支付网关地址
- 品牌信息
- 定价方案
- 等等...

**配置示例：**
```javascript
download: {
    windowsUrl: 'https://your-cdn.com/cursor-x-windows.exe',
    macosUrl: 'https://your-cdn.com/cursor-x-macos.dmg',
},
payment: {
    plan1Day: 'https://pay.stripe.com/your-link-1day',
    plan7Day: 'https://pay.stripe.com/your-link-7day',
    plan30Day: 'https://pay.stripe.com/your-link-30day',
}
```

### 3. 本地预览

#### 方式 1: 使用 npm（推荐）
```bash
npm start
```
自动打开浏览器访问 `http://localhost:8000`

#### 方式 2: 使用 Python
```bash
python -m http.server 8000
```

#### 方式 3: 使用 Node.js
```bash
npx http-server -p 8000 -o
```

### 4. 部署到生产环境

详细部署指南请查看 [DEPLOYMENT.md](DEPLOYMENT.md)

**快速部署选项：**
- **Vercel**: 拖放文件夹或使用 Git 集成 ⚡
- **Netlify**: 拖放文件夹或使用 Git 集成 ⚡
- **GitHub Pages**: 推送到 GitHub 仓库 📦
- **Cloudflare Pages**: 连接 Git 仓库 🌐
- **传统服务器**: 上传所有文件到 Web 目录 🖥️

## 🎨 自定义样式

如需修改颜色主题，编辑 `styles.css` 中的 CSS 变量：

```css
:root {
    --primary-color: #6366f1;        /* 主色调 */
    --primary-hover: #4f46e5;        /* 悬停颜色 */
    --secondary-color: #8b5cf6;      /* 次要颜色 */
    --accent-color: #ec4899;         /* 强调色 */
    /* ... 更多颜色 */
}
```

## 📱 响应式设计

网站已针对以下设备进行优化：
- 📱 手机 (< 768px)
- 💻 平板 (768px - 1024px)
- 🖥️ 桌面 (> 1024px)

## 🔧 功能特性

### 已实现功能
- ✅ 响应式导航栏
- ✅ 平滑滚动
- ✅ FAQ 折叠/展开
- ✅ 定价方案展示
- ✅ 下载平台切换
- ✅ 动画效果
- ✅ 悬停效果

### 待扩展功能
- [x] 多语言支持（已完成：中英文切换）✅
- [ ] 更多语言支持（日文、韩文等）
- [ ] 深色/浅色主题切换
- [ ] 更多支付方式集成
- [ ] 用户评价/反馈系统

## 📄 许可证

本项目仅供参考和学习使用。

## 🤝 支持

如有问题或需要帮助，请：
1. 查看此 README 文档
2. 检查 `config.js` 配置
3. 查看浏览器控制台的错误信息

## 📝 更新日志

### v1.0.0 (2025-11-05)
- 🎉 初始版本发布
- ✨ 完整的响应式设计
- ⚙️ 灵活的配置系统
- 🎨 现代化 UI/UX

---

**© 2025 Cursor X. All rights reserved.**
