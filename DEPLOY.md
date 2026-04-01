# 朝夕学堂网站 - 部署说明

## 📦 网站文件

已完成网站打包：`shufa-website.zip`

**包含文件：**
- `index.html` - 首页
- `courses.html` - 课程介绍
- `works.html` - 学员作品
- `teacher.html` - 师资力量
- `enroll.html` - 在线报名
- `booking.html` - 课程预约
- `contact.html` - 联系我们
- `css/style.css` - 样式文件
- `js/main.js` - JavaScript 脚本

---

## 🚀 部署到 Cloudflare Pages（推荐）

### 第 1 步：上传到 GitHub

```bash
cd /home/admin/openclaw/workspace/shufa-website
git init
git add .
git commit -m "Initial commit - 朝夕学堂网站"
git branch -M main
git remote add origin https://github.com/你的用户名/shufa-website.git
git push -u origin main
```

### 第 2 步：部署到 Cloudflare Pages

1. 访问 https://pages.cloudflare.com
2. 登录/注册 Cloudflare 账号
3. 点击 "Create a project"
4. 选择 "Connect to Git"
5. 选择你的 `shufa-website` 仓库
6. 点击 "Begin setup"
7. 构建设置：
   - Framework preset: `None`
   - Build command: 留空
   - Build output directory: 留空
8. 点击 "Save and Deploy"

### 第 3 步：绑定自定义域名

1. 在 Cloudflare Pages 项目页面
2. 点击 "Custom domains"
3. 点击 "Add a custom domain"
4. 输入你的域名（如：`shufa.com`）
5. 点击 "Add domain"
6. 按提示配置 DNS（如果使用 Cloudflare DNS 会自动配置）

---

## 🌐 部署到 Gitee Pages（国内最快）

### 第 1 步：上传到 Gitee

1. 访问 https://gitee.com
2. 创建新仓库 `shufa-website`
3. 上传网站文件

### 第 2 步：开启 Pages 服务

1. 进入仓库 → 管理 → Pages 服务
2. 选择 `main` 分支
3. 点击保存
4. 获得访问地址：`https://你的用户名.gitee.io/shufa-website`

### 第 3 步：绑定自定义域名

1. 在 Pages 服务页面
2. 点击 "绑定域名"
3. 输入你的域名
4. 按提示配置 DNS

---

## 📋 域名 DNS 配置

**如果使用 Cloudflare Pages：**

| 类型 | 名称 | 值 |
|------|------|-----|
| CNAME | www | 你的项目.pages.dev |
| CNAME | @ | 你的项目.pages.dev |

**如果使用 Gitee Pages：**

| 类型 | 名称 | 值 |
|------|------|-----|
| CNAME | www | 你的用户名.gitee.io |

---

## 🎨 网站功能

✅ **响应式设计** - 手机/电脑自适应
✅ **7 个完整页面** - 首页、课程、作品、师资、报名、预约、联系
✅ **表单功能** - 报名表单、预约表单
✅ **作品筛选** - 按楷书/行书/隶书筛选
✅ **移动端菜单** - 汉堡菜单

---

## 📝 后续优化建议

1. **替换图片** - 将实际照片放入 `images/` 文件夹
2. **修改联系方式** - 编辑 HTML 文件中的电话、地址
3. **添加地图** - 在 contact.html 中嵌入百度地图
4. **表单后端** - 连接 Cloudflare Workers 处理表单提交
5. **添加统计** - 添加百度统计/Google Analytics

---

## 💰 费用说明

| 项目 | 费用 |
|------|------|
| Cloudflare Pages | ¥0（免费） |
| Gitee Pages | ¥0（免费） |
| 域名 | ¥50-100/年（已有则 0） |
| **总计** | **¥0-100/年** |

---

## 📞 需要帮助？

有任何部署问题随时询问！
