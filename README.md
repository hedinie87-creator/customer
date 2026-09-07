# 《海外客户从哪里出现？》V1

> 当前目标：先把已经确定的框架和已有事实资料搭成可浏览网站；后续研究只作为数据持续补充，不重新设计网站。

海外 B2B 客户出现路径地图 + 事实数据库。

通过地图、数据库、证据展示，回答三个问题：

- 海外客户可能在哪里出现？
- 客户为什么会看到 LANSEN？
- 客户如何验证 LANSEN？

本项目不是普通企业官网、产品宣传页、营销方案 PPT 或平台排名工具。

---

## 目录说明

```
海外客户从哪里出现_V1/
│
├── index.html                 首页（客户出现路径 SVG 地图）
├── .nojekyll                  GitHub Pages 跳过 Jekyll 处理
├── README.md                  本文件
├── 09_开发规则.md              开发规则（不改变定位/不重新设计/数据优先）
├── 10_启动开发提示词.md         开发交接提示词
│
├── pages/                     页面
│   ├── paid.html              02 付费流量
│   ├── organic.html           03 自然流量
│   ├── platform-map.html      04 平台地图
│   ├── customer-validation.html  05 客户验证路径
│   ├── lansen-status.html     06 LANSEN 现状
│   ├── evidence.html          Evidence 事实数据库（非一级导航）
│   └── search-ads.html        02-02 搜索广告子页（非一级导航）
│
├── components/                可复用组件
│   ├── navbar.js              顶部导航栏（动态注入，自动检测路径深度）
│   ├── customer-map.js        首页 SVG 客户出现路径地图
│   ├── platform-card.js       平台卡片模板函数
│   └── evidence-card.js       证据卡片模板函数
│
├── css/                       样式
│   ├── main.css               CSS 变量、reset、body 字体
│   ├── layout.css             页面级布局（grid、flow、status）
│   ├── components.css         组件级样式（navbar、card、table、filter）
│   └── responsive.css         响应式媒体查询（≤1000px、≤600px）
│
├── js/                        应用逻辑
│   ├── app.js                 启动日志
│   ├── data-manager.js         loadJSON() 异步 JSON 加载器
│   ├── renderer.js            renderList() 列表渲染器
│   ├── platform-page.js       平台地图页初始化
│   ├── evidence-page.js       证据页初始化 + 双下拉筛选
│   ├── flow-page.js           通用流程页渲染器（paid/organic/customer-validation 共用）
│   ├── lansen-page.js         LANSEN 现状页初始化
│   └── search-ads-page.js     搜索广告页初始化（7 段渲染）
│
├── data/                      JSON 数据
│   ├── platforms.json         8 个平台信息
│   ├── evidence.json          16 条证据记录
│   ├── lansen.json            LANSEN 账号/内容/规划现状
│   ├── paid-flow.json         5 条付费流量路径
│   ├── organic-flow.json      4 条自然流量路径
│   ├── customer-validation.json  1 条客户验证路径
│   ├── search-ads.json        搜索广告关键词与竞价事实库
│   ├── evidence-readme.json   证据数据元信息
│   ├── evidence-step29d.md    证据 Step 29-D 行业案例说明
│   └── search-ads-readme.md   搜索广告数据原则说明
│
└── assets/                    资源目录（待补充）
    ├── images/
    ├── screenshots/
    ├── logos/
    └── icons/
```

---

## 固定一级导航

| 编号 | 页面 | 说明 |
|------|------|------|
| 01 | 首页 | 客户从哪里出现？（SVG 路径地图） |
| 02 | 付费流量 | 花钱购买客户出现的机会 |
| 03 | 自然流量 | 客户原本在哪里出现 |
| 04 | 平台地图 | 各平台是什么、客户在哪出现、LANSEN 有什么 |
| 05 | 客户验证路径 | 客户看到 LANSEN 后会自己查什么 |
| 06 | LANSEN 现状 | 只记录当前实际情况 |

Evidence 事实数据库和搜索广告子页（02-02）作为内部资料页存在，不作为一级导航。

---

## 数据原则

- 先事实、后观察；不虚构案例、客户、截图、价格和效果数据。
- 资料暂缺时保留"待补充 / 待采集 / 待实测"状态。
- 官方资料、公开案例、行业数据、LANSEN 实际数据必须区分。

---

## 本地运行

这是纯静态 HTML/CSS/JS/JSON 项目，无后端依赖。因为页面通过 `fetch()` 加载 JSON 数据，需要通过 HTTP 服务器运行（直接用 `file://` 打开会被浏览器 CORS 策略阻止）。

### 方法一：Python 内置服务器

```bash
cd 海外客户从哪里出现_V1
python -m http.server 8080
```

浏览器访问 `http://localhost:8080`。

### 方法二：VS Code Live Server

1. 安装 VS Code 扩展 "Live Server"。
2. 在项目根目录右键 `index.html`，选择 "Open with Live Server"。

### 方法三：Node.js http-server

```bash
npx http-server 海外客户从哪里出现_V1 -p 8080
```

---

## GitHub Pages 部署

### 步骤一：创建仓库

1. 在 GitHub 上创建一个新仓库（例如 `lansen-customer-map`）。
2. 将 `海外客户从哪里出现_V1/` 目录内的所有文件上传到仓库根目录。

> 注意：上传的是 `海外客户从哪里出现_V1/` 目录**内的文件**，不是目录本身。仓库根目录应直接包含 `index.html`、`.nojekyll`、`README.md`、`pages/`、`css/` 等。

### 步骤二：开启 GitHub Pages

1. 进入仓库的 **Settings** 页面。
2. 左侧菜单选择 **Pages**。
3. **Source** 选择 `Deploy from a branch`。
4. **Branch** 选择 `main`（或 `master`），文件夹选择 `/ (root)`。
5. 点击 **Save**。

等待 1-2 分钟后，GitHub 会生成访问地址：

```
https://<你的用户名>.github.io/<仓库名>/
```

### 步骤三：验证

打开上述地址，确认：
- 首页 SVG 地图正常渲染。
- 顶部导航 6 个链接均可跳转。
- 各页面 JSON 数据正常加载（页面有内容，非空白）。
- Evidence 页面双下拉筛选正常工作。

### 关于 .nojekyll

项目根目录包含 `.nojekyll` 空文件，告诉 GitHub Pages 跳过 Jekyll 处理，直接按原样部署所有文件。这确保 JSON 数据文件和以 `_` 开头的文件不会被 Jekyll 过滤。

---

## 技术说明

- **技术栈**：原生 HTML5 + CSS3 + vanilla JavaScript (ES6) + JSON
- **无框架依赖**：不使用 React、Vue、Angular 或任何构建工具
- **数据驱动**：所有页面内容由 JSON 数据文件驱动，通过 `fetch()` 异步加载
- **路径**：全部使用相对路径，部署在任何子路径下均可正常运行
- **响应式**：支持桌面、平板（≤1000px）和手机（≤600px）访问
