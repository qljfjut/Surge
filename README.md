# ⚡ Surge 全能一体化配置与模块中心 (Surge All-In-One)

> 📌 **项目定位**：自用极致性能、低延迟、抗污染、智能分流的 Surge (macOS / iOS) 全能一体化配置库。  
> 🛡️ **安全声明**：本仓库公开的所有配置均经过 **100% 物理脱敏清洗**，绝无任何真实节点公网 IP、密码或私钥证书泄露。

---

## 🚀 快速使用 (Quick Start)

### 1. 全能一体化主配置文件 (`Surge_All_In_One.conf`)
专为日常主力机打造，深度调优了现代加密 DNS、全协议混合并发与精细化分流：
- **配置文件直链**：
  ```text
  https://raw.githubusercontent.com/qljfjut/Surge/main/Surge_All_In_One.conf
  ```
- **导入方法**：在 Surge 点击「从 URL 下载配置」，填入上方链接；下载后在 `[Proxy]` 中填入您自己的真实服务器节点即可开箱即用。

### 2. 独立功能模块 (`XiaoHongShu_Switch.sgmodule`)
专为自媒体创作者、内容投手与运营人员设计的模式切换开关：
- **安装直链**：
  ```text
  https://raw.githubusercontent.com/qljfjut/Surge/main/XiaoHongShu_Switch.sgmodule
  ```
- **工作机制**：
  - **平时保持关闭**：保持纯净看帖环境，屏蔽流内推荐位与广告；
  - **【勾选点亮】**：立即进入投手模式，全量直连放行小红书全域域名、广告流与聚光后台，并规避 MITM 解密，保障投放数据完整与后台正常登录。

---

## 🌟 核心网络架构与特性解密

1. **现代双栈加密 DNS (DoH / DoQ HTTP/3)**：
   - 国内直连阿里公共 DNS（`h3://dns.alidns.com` 与 `https://dns.alidns.com`）；
   - 国外走 Cloudflare 代理加密查询（`h3://cloudflare-dns.com` 与 `https://cloudflare-dns.com`）；
   - 彻底切断本地运营商的 DNS 劫持、缓存投毒与隐私嗅探。
2. **智能强制阻断 QUIC (UDP 443 拦截)**：
   - 部署 `AND,((PROTOCOL,UDP), (DEST-PORT,443)),REJECT-NO-DROP` 规则；
   - 切断应用层 UDP 443，强制客户端 App 退回 TCP TLS 协议，从而使 Surge 能够正常解析域名以实现精细分流与广告拦截。
3. **主机游戏与联机优化 (Always Real IP)**：
   - 针对任天堂 Switch (`*.srv.nintendo.net`)、索尼 PlayStation (`*.stun.playstation.net`)、微软 Xbox (`*.xboxlive.com`)、暴雪战网 (`*.battle.net`) 实施真实 IP 穿透；
   - 消除代理中继导致的 NAT 降级、联机丢包与高延迟。
4. **All-Hybrid 网络并发加速**：
   - 激活 `all-hybrid = true`，Wi-Fi 与蜂窝数据全并发协同，消除切网瞬间的断流卡顿。
5. **拓竹 (Bambu Lab) 3D 打印机智选组**：
   - 专属设计 `BambuLab = smart` 智能测速策略，多节点毫秒级探测，保障 3D 打印切片上传与远程摄像头推流秒开稳定。
6. **24 大独立分流策略组**：
   - 覆盖 Intelligence (AI 大模型)、小红书、流媒体 (YouTube/Netflix/Disney+/Spotify/TikTok)、国内主流生态 (阿里/腾讯/微信/抖音/B站/百度) 等，各司其职。

---

## 📚 开源规则引用源与致谢清单 (Credits & Acknowledgments)

本配置中引用的分流规则集与资源，均汇聚自全球网络开源社区中最顶级、最敬业的开发者。特此致谢：

| 规则项目 / 作者 | 负责的规则模块 | 选型优势与说明 |
| :--- | :--- | :--- |
| **[Sukka (@SukkaW)](https://github.com/SukkaW)**<br>*(ruleset.skk.moe)* | 广告拦截全家桶 (`reject-drop` / `reject_phishing` / `ip/reject`)、Apple Intelligence、Telegram、流媒体与大陆 IP 库 | 业内公认最严谨、误杀率极低的高性能规则库，原生支持 Extended-matching 扩展深度匹配。 |
| **[blackmatrix7](https://github.com/blackmatrix7/ios_rule_script)**<br>*(ios_rule_script)* | OpenAI、Claude、GitHub、微软、苹果全家桶、游戏平台 (Steam/Epic/PS/Switch)、社媒与国内大厂服务 | 全网覆盖最全面、维护频率最高、规则分类最细致的王牌开源项目。 |
| **[limbopro (毒凌波)](https://github.com/limbopro/Profiles4limbo)**<br>*(Profiles4limbo)* | 综合 AI 大模型平台分流 (`AI_Platforms.list`) | 专注于 AI 全家桶平台域名的精准聚合，解决新兴大模型路由漂移问题。 |
| **[QuixoticHeart](https://github.com/QuixoticHeart/rule-set)**<br>*(rule-set)* | 抖音与字节系专属分流 (`douyin.list`) | 专为短视频与直播流量优化，保障内容加载流畅不缓冲。 |
| **[Hackl0us](https://github.com/Hackl0us/GeoIP2-CN)**<br>*(GeoIP2-CN)* | 中国大陆 IP 数据库 (`Country.mmdb`) | 最轻量级且每周定时自动构建的中国大陆 IP 数据库，保障国内流量 0 绕路。 |
| **图标设计致谢** | 策略组精美矢量图标 | 致谢 **[Koolson (Qure)](https://github.com/Koolson/Qure)**、**[fmz200 (wool_scripts)](https://github.com/fmz200/wool_scripts)**、**[Semporia](https://github.com/Semporia/Hand-Painted-icon)**、**[Irrucky](https://github.com/Irrucky/Tool)** 等作者的优秀视觉设计。 |

---

## 📄 License
[MIT License](LICENSE)
