# 安装指南

完整的安装和设置步骤。

## 📋 前置要求

### 必需
- **Node.js** 18.0 或更高版本
- **npm** 9.0 或更高版本（随 Node.js 一起安装）

### 可选
- **Git** - 用于版本控制
- **VS Code** - 推荐的代码编辑器

## 🔍 检查环境

```bash
# 检查 Node.js 版本
node -v
# 应显示 v18.0.0 或更高

# 检查 npm 版本
npm -v
# 应显示 9.0.0 或更高

# 检查 Git 版本（可选）
git --version
```

## 📥 获取项目

### 方式 1: 克隆仓库（推荐）

```bash
# 克隆项目
git clone https://github.com/your-username/cursurx.store.git

# 进入项目目录
cd cursurx.store
```

### 方式 2: 下载 ZIP

1. 访问项目仓库
2. 点击 "Code" > "Download ZIP"
3. 解压到本地目录
4. 打开终端进入该目录

## 🚀 安装步骤

### 1. 安装依赖

```bash
npm install
```

这会安装所有必需的依赖包（包括 Vite 和 Terser）。

**预期输出：**
```
added 22 packages in 5s
```

### 2. 配置项目

复制配置示例文件并编辑：

```bash
# 如果需要环境变量配置
cp env.example .env.local
```

编辑 `config.js` 设置您的：
- 下载链接
- 支付网关
- 其他配置

### 3. 启动开发服务器

```bash
npm run dev
```

**预期输出：**
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

浏览器会自动打开 `http://localhost:3000`

### 4. 验证安装

在浏览器中检查：
- [ ] 页面正常显示
- [ ] 样式加载正确
- [ ] 语言切换功能正常
- [ ] 没有控制台错误

## 🐛 常见问题

### Q: 安装依赖失败

**可能原因：**
- 网络问题
- Node.js 版本过低
- npm 缓存损坏

**解决方案：**
```bash
# 清除 npm 缓存
npm cache clean --force

# 删除 node_modules 和 lock 文件
rm -rf node_modules package-lock.json

# 重新安装
npm install
```

### Q: 端口 3000 被占用

**解决方案：**
```bash
# 方式 1: 使用其他端口
PORT=3001 npm run dev

# 方式 2: 修改 vite.config.js
# 将 server.port 改为其他端口
```

### Q: 开发服务器启动失败

**检查步骤：**
1. 确认 Node.js 版本 >= 18
2. 确认所有依赖已安装
3. 检查终端错误信息
4. 查看 `vite.config.js` 语法

### Q: 页面显示空白

**可能原因：**
- JavaScript 错误
- 文件路径问题
- 配置错误

**解决方案：**
```bash
# 打开浏览器控制台（F12）查看错误
# 检查 Network 标签确认文件加载
# 确认 config.js 和 i18n.js 正确加载
```

### Q: 使用国内网络安装慢

**解决方案：**
```bash
# 使用淘宝镜像
npm config set registry https://registry.npmmirror.com

# 或使用 pnpm
npm i -g pnpm
pnpm install
```

## 📦 依赖说明

### 生产依赖
项目使用纯静态 HTML/CSS/JS，无生产依赖。

### 开发依赖
- **vite** ^5.0.0 - 构建工具
- **terser** ^5.31.0 - JavaScript 压缩器

## 🔄 更新依赖

```bash
# 检查过时的包
npm outdated

# 更新所有包到最新版本
npm update

# 或手动更新
npm install vite@latest terser@latest -D
```

## 🧹 清理

```bash
# 清理 node_modules
rm -rf node_modules

# 清理构建产物
rm -rf dist

# 清理所有生成文件（谨慎使用）
rm -rf node_modules dist package-lock.json
```

## ✅ 验证清单

安装完成后检查：

- [ ] Node.js 版本 >= 18
- [ ] npm install 成功
- [ ] npm run dev 启动成功
- [ ] 浏览器打开 localhost:3000
- [ ] 页面显示正常
- [ ] 无控制台错误
- [ ] 语言切换正常
- [ ] npm run build 成功
- [ ] dist 目录生成

## 📚 下一步

安装完成后，查看：
- [QUICKSTART.md](QUICKSTART.md) - 快速配置指南
- [VITE.md](VITE.md) - Vite 使用指南
- [README.md](README.md) - 项目文档

## 💡 开发工具推荐

### VS Code 扩展
- **Vite** - Vite 支持
- **ESLint** - 代码检查
- **Prettier** - 代码格式化
- **Live Server** - 备用开发服务器

### 浏览器扩展
- **Vue.js devtools** - 调试工具
- **React Developer Tools** - 开发工具

---

**需要帮助？** 查看 [常见问题](#-常见问题) 或提交 Issue。

