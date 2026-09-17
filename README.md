# Surge 配置与模块中心

自用 Surge 规则、分流与模块配置仓库。

---

## 📦 模块列表

### 1. 小红书 - 投手广告放行开关 (`XiaoHongShu_Switch.sgmodule`)

- **功能场景**：专为信息流广告投放（投手）、竞品排查及运营人员设计。
- **工作机制**：
  - **平时关闭**：保持纯净看帖环境，屏蔽流内推荐位与常见广告；
  - **【勾选点亮】**：立即进入投手模式，全量直连放行小红书全域域名、广告流与商业聚光后台，并跳过 MITM 解密，保障广告数据完整与后台正常登录。
- **Surge 安装直链**：
  ```text
  https://raw.githubusercontent.com/qljfjut/Surge/main/XiaoHongShu_Switch.sgmodule
  ```

---

## 🚀 安装方法

1. 打开 **Surge (macOS / iOS)**；
2. 进入 **模块 (Modules)** 页面；
3. 点击 **安装新模块**，将上方直链完整粘贴进去即可；
4. 按需在列表中勾选开关切换模式。
