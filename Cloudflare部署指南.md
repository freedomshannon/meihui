# Cloudflare Pages 部署指南

## 🌐 部署方式概览

Cloudflare Pages 支持两种部署方式：
1. **Git 集成部署**（推荐）- 连接 GitHub/GitLab 仓库自动部署
2. **直接上传部署** - 手动上传文件

## 📋 方式一：Git 集成部署（推荐）

### 步骤1：准备 Git 仓库
```bash
# 1. 初始化 Git 仓库（如果还没有）
cd /Users/shannon/Desktop/meihui
git init

# 2. 添加所有文件
git add .

# 3. 提交代码
git commit -m "Initial commit: 美绘网站"

# 4. 创建 GitHub 仓库并推送
# 在 GitHub 上创建新仓库，然后：
git remote add origin https://github.com/你的用户名/meihui-website.git
git branch -M main
git push -u origin main
```

### 步骤2：连接 Cloudflare Pages
1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 点击左侧菜单 **"Pages"**
3. 点击 **"Create a project"**
4. 选择 **"Connect to Git"**
5. 授权连接你的 GitHub 账户
6. 选择你的仓库 `meihui-website`

### 步骤3：配置构建设置
```yaml
# 构建配置
Framework preset: None (Static HTML)
Build command: (留空)
Build output directory: /
Root directory: /
```

### 步骤4：部署设置
- **Project name**: `meihui` 或你喜欢的名称
- **Production branch**: `main`
- 点击 **"Save and Deploy"**

## 📋 方式二：直接上传部署

### 步骤1：准备部署文件
确保你的项目包含以下文件：
```
meihui/
├── index.html          # 主页
├── cn.html            # 中文主页
├── download.html      # 下载页
├── pricing.html       # 定价页
├── changelog.html     # 更新日志
├── privacy-policy.html # 隐私政策
├── terms-of-service.html # 服务条款
├── site.webmanifest   # PWA配置
├── favicon.ico        # 网站图标
├── _next/             # Next.js 静态资源
├── imgs/              # 图片资源
├── cn/                # 中文版页面
└── cdn-cgi/           # Cloudflare 相关（可选）
```

### 步骤2：创建 Pages 项目
1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 点击左侧菜单 **"Pages"**
3. 点击 **"Create a project"**
4. 选择 **"Upload assets"**
5. 拖拽整个项目文件夹或选择文件上传

### 步骤3：配置项目
- **Project name**: `meihui`
- 上传完成后点击 **"Deploy site"**

## ⚙️ 高级配置

### 1. 自定义域名设置
```bash
# 在 Cloudflare Pages 项目中：
1. 进入项目 → Custom domains
2. 点击 "Set up a custom domain"
3. 输入你的域名（如：meihui.com）
4. 按照提示配置 DNS 记录
```

### 2. 重定向规则配置
创建 `_redirects` 文件：
```bash
# 重定向规则示例
/download /download.html 200
/pricing /pricing.html 200
/changelog /changelog.html 200
/cn/download /cn/download.html 200
/cn/pricing /cn/pricing.html 200

# 404 页面
/* /index.html 404
```

### 3. Headers 配置
创建 `_headers` 文件：
```bash
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()

/*.html
  Cache-Control: public, max-age=3600

/imgs/*
  Cache-Control: public, max-age=31536000

/_next/static/*
  Cache-Control: public, max-age=31536000, immutable
```

### 4. 环境变量（如果需要）
在 Cloudflare Pages 项目设置中添加：
```bash
NODE_ENV=production
SITE_URL=https://你的域名.com
```

## 🔧 部署优化建议

### 1. 文件压缩
```bash
# 可选：压缩图片文件
# 使用工具如 tinypng.com 或 imagemin
```

### 2. 删除不必要的文件
```bash
# 可以删除的文件：
- 美绘网站改造方案.md
- 项目结构说明.md
- .DS_Store
- _downloads.html（如果不需要）
```

### 3. 创建 `.gitignore` 文件
```bash
# .gitignore
.DS_Store
*.log
node_modules/
.env
.env.local
```

## 🚀 部署后验证

### 1. 检查页面访问
- 主页：`https://你的项目名.pages.dev`
- 中文版：`https://你的项目名.pages.dev/cn.html`
- 下载页：`https://你的项目名.pages.dev/download.html`

### 2. 检查资源加载
- 图片是否正常显示
- CSS 样式是否正确
- JavaScript 功能是否正常

### 3. 移动端测试
- 响应式设计是否正常
- PWA 功能是否可用

## 📊 监控和分析

### 1. Cloudflare Analytics
- 访问 Pages 项目 → Analytics
- 查看访问量、性能指标

### 2. 自定义分析
如果需要更详细的分析，可以添加：
- Google Analytics
- Cloudflare Web Analytics

## 🔄 持续部署

### Git 集成的优势：
- **自动部署**：推送到 main 分支自动触发部署
- **预览部署**：Pull Request 自动创建预览环境
- **版本控制**：每次部署都有完整的版本历史
- **回滚功能**：可以快速回滚到之前的版本

### 更新网站流程：
```bash
# 1. 修改文件
# 2. 提交更改
git add .
git commit -m "更新网站内容"
git push origin main

# 3. Cloudflare 自动部署（通常1-2分钟完成）
```

## 💡 最佳实践

### 1. 性能优化
- 启用 Cloudflare 的自动压缩
- 使用 WebP 格式图片
- 启用 HTTP/2 和 HTTP/3

### 2. 安全设置
- 启用 HTTPS（默认开启）
- 配置安全头部
- 启用 Bot Fight Mode

### 3. SEO 优化
- 确保所有页面都有正确的 meta 标签
- 添加 sitemap.xml
- 配置 robots.txt

## 🎯 推荐部署流程

**对于你的项目，我推荐使用 Git 集成部署：**

1. **创建 GitHub 仓库**
2. **推送代码到仓库**
3. **连接 Cloudflare Pages**
4. **配置自定义域名**（可选）
5. **设置重定向规则**（解决 .html 后缀问题）

这样你就可以享受自动部署、版本控制和预览功能的便利！

## 📞 需要帮助？

如果在部署过程中遇到问题，可以：
1. 查看 Cloudflare Pages 文档
2. 检查部署日志
3. 联系 Cloudflare 支持

部署完成后，你的美绘网站就可以通过 `https://你的项目名.pages.dev` 访问了！