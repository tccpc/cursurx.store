# 快速部署到 Vercel

## 🚀 最简单的方式（3 步）

### 1️⃣ 推送到 GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/你的用户名/cursurx.store.git
git push -u origin main
```

### 2️⃣ 连接 Vercel

1. 访问 [vercel.com](https://vercel.com)
2. 使用 GitHub 登录
3. 点击 "New Project"
4. 选择 `cursurx.store` 仓库

### 3️⃣ 自动部署

- Vercel 自动检测 Vite 配置 ✅
- 自动构建和部署 ✅
- 获得免费域名：`your-project.vercel.app` ✅

## 🎉 完成！

以后每次 `git push` 都会自动部署。

---

**遇到问题？** 查看完整指南：[DEPLOY.md](DEPLOY.md)

**国内网络？** CLI 连接失败很正常，使用上面的 Git 集成方式即可。

