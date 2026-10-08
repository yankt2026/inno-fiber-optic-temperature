# baike84.com：GSC 驱动的本地优化记录

日期：2026-10-08。仅修改和构建本地项目，未部署、未推送 Git、未更改 GSC。没有读取服务账号密钥。

## 定位依据与范围

源代码：`E:\AI\baike84.com`（原 `E:\AI\fos`，本次对话已改名）。

- `astro.config.mjs` 的 site、`src/config/site.ts` 的 siteUrl 均为 `https://baike84.com`。
- Git origin：`https://github.com/yankt2026/inno-fiber-optic-temperature.git`。
- `package.json` 使用 Astro 5 静态构建；README 记录 Cloudflare Pages 构建方式。
- 已阅读 README、CONTENT-GUIDE、SEO-KEYWORD-MAP、部署说明，以及指定的 GSC Markdown 和 JSON。项目及其 E:\AI、E:\ 上级未找到 AGENTS.md。
- `.seo-cache` 仅有 2026-07-17 的单个产品结构化数据记录，不能作为本次重点页的审查依据。
- 原先未跟踪的 `sitemap-custom-updated.xml` 保留未改。

## 数据事实与结论边界

本期 2026-09-08 至 2026-10-05：800 展示、0 点击、平均排名 55.6325。上期 2026-08-11 至 2026-09-07：1215 展示、0 点击、平均排名 63.4551。展示下降约 34.2%。

JSON 中上期 performance 只有 total，没有上期 page/query 明细；本期 query、page 也是分开的聚合。因此既不能分解哪些页面造成下降，也不能把机会关键词直接归到某一页。平均排名受查询组合影响。以下内容缺陷由源码确认，但不能据此认定它们导致展示下降或零点击。

| 重点 URL | 本期展示 | 平均排名 | 对应源码 / 模板 |
|---|---:|---:|---|
| `/solutions/dry-type-transformer-temperature-monitoring/` | 62 | 22.37 | `src/data/pages.ts` 的 solutions；`src/pages/solutions/[slug].astro` |
| `/solutions/transformer-fiber-optic-temperature-monitoring/` | 80 | 52.95 | 同上 |
| `/products/` | 263 | 63.46 | `src/pages/products/index.astro`；产品卡片数据 `src/data/products.ts` |
| `/resources/what-is-a-fiber-optic-temperature-sensor/` | 190 | 72.06 | `src/data/pages.ts` 的 resources；`src/pages/resources/[slug].astro` |
| `/resources/how-fiber-optic-temperature-sensors-work/` | 158 | 62.06 | 同上 |

这两篇文章实际由 TypeScript 数据生成。`src/content/resources/collection-note.md` 是未来内容集合迁移的说明，不是这些 URL 的正文。新增专属英文正文放在 `src/data/priorityContent.ts`，由原数据入口合并，slug 和路由保持不变。

## 已实施的具体修改

| 优先级 | 文件 / 页面 | 现有问题 | 修改内容 | 预期作用（非排名承诺） |
|---|---|---|---|---|
| P1 | `src/data/priorityContent.ts`：干式方案 | 七个方案共用六段正文；混入开关柜 contacts 等通用话题；没有干式安装和选型深度 | 专属应用说明、按相/绕组记录测点、埋入与可接近点区别、浇注前审核、光纤保护、RTD/红外区别、诊断及控制接口；六项选型确认表；三条专属 FAQ | 直接帮助工程人员判断是否适用、需要哪些安装资料 |
| P1 | 同文件：变压器方案 | 共用通用设备正文，不能清楚区分油浸和干式 | 直接测量与热模型边界、两类变压器安装要求、探头到仪表链路、通信和故障映射、采购审查；对应产品和方案链接 | 让方案页承担系统架构与配置决策意图 |
| P1 | 同文件：两篇资源文章 | 五段正文完全相同，仅标题和套用开头不同；原理文章相关阅读链接到自身 | “是什么”介绍定义、部件、应用、技术类型和边界；“如何工作”按激发、返回、寿命标定、通道输出解释流程，补充信号质量与安装性能区别；独立 description、正文、表格和 FAQ；互链并关联产品及方案 | 区分两种信息意图，减少完全重复内容和无用自链接 |
| P2 | `src/pages/products/index.astro` | 只有卡片列表，缺少按任务选产品的指导 | 保留六款产品卡片，新增按局部测量、多点、变压器和 OEM 任务选择的表格；补充完整测量链要求和相关方案内链；更新 description | 帮助采购和工程访问者从类别页走向正确产品 |
| P2 | `src/data/pages.ts` | 数据类型只能渲染固定正文和 FAQ | 增加可选表格、相关阅读及指定产品字段，合并四页专属内容 | 保持原来的静态路径及其他页回退行为 |
| P2 | `src/components/GuideDetails.astro` | 没有复用的内容表格/内链渲染 | 按需输出表格与相关阅读，表头提供 scope | 让专属选型信息可见、可抓取、易读 |
| P2 | 两个 `[slug].astro` 模板 | 固定产品列表、固定文章相关阅读 | 读取专属表格、产品和内链；未配置的页面保留旧内容 | 让页面关系与实际内容相匹配 |

现有 title 和 H1 已正确描述各页主题，保留。description 改为与专属正文相符。没有使用排名 11–30 的查询强行指定页面，也没有为同义词新增 URL。

## 可直接使用的英文文案

完整英文文案已经实施在 `src/data/priorityContent.ts`，不是仅供建议。示例：

> Dry-type transformer temperature monitoring uses selected winding measurements to track local thermal conditions. For cast-resin and air-cooled designs, fluorescent fiber optic probes offer an electrically passive measurement point connected to an external monitor. Probe locations and installation must be agreed with the transformer manufacturer before assembly.

> A fluorescent fiber optic temperature sensor works by sending excitation light to a sensing tip and measuring how the returned fluorescence decays over time. A compatible instrument uses a calibration relationship to convert decay lifetime into temperature.

可在项目中用 `git diff -- src/data/pages.ts src/pages` 审查已跟踪文件差异；两个新增内容/组件文件需直接打开查看，因为未跟踪文件不会显示在普通 git diff 中。

## 技术 SEO 检查

- BaseLayout 使用当前路径与 siteUrl 生成绝对 self-canonical，不包含查询参数；五个目标页面构建后均为不带 www、带末尾斜杠的原 URL。
- 目标页面各有一个 H1、非空独立 description；全站 title 唯一检查由现有测试覆盖。
- robots 允许抓取普通页面，声明 `https://baike84.com/sitemap.xml`。目标页未发现 meta noindex。
- Astro sitemap 及 alias 脚本生成 48 个唯一 canonical URL；目标五页都在其中。49 个 HTML 包括 404。没有改动正常 sitemap 配置。
- GSC 保存的提交记录是 `https://www.baike84.com/sitemap.xml`，最近下载时间为 2026-07-21。需检查线上 www 跳转、sitemap 响应和最终 URL 一致性。本次没有改提交记录；indexed=0 字段不用于判断整站未收录。
- 首页 URL Inspection 为 PASS，lastCrawlTime 为 2026-10-03；五个内页没有独立 Inspection 数据，不能据此认定当前全已收录。
- 模板已有 FAQPage，保留与可见 FAQ 同步；不把它当作商业站获得 Google FAQ 富结果的承诺。新表格未新增 HowTo 或虚构 Product offers/reviews。

## 资料证据与待确认

正文中的测量链、荧光寿命原理和安装边界以本地产品数据及模板为基础。厂商官网仅用于交叉核对，没有把通用网页参数扩展为干式方案保证。

- [厂家探头页面](https://www.fjinno.net/product/fiber-optic-temperature-probe/) 同页上部温度范围为 −40～+240°C，后文表格为 −40～+260°C；未把后者加入本项目。需取得具体型号及版本的正式数据表。原 `products.ts` 参数未改，仍需审核适用配置。
- [厂家干式方案页面](https://www.fjinno.net/solution-for-online-temperature-monitoring-of-dry-type-transformers) 同时介绍 PT100 和光纤系统；没有将 PT100 控制器的精度、供电、保护等级、控制输出套给光纤产品。官网的收益、认证和安全宣称未移植。
- 待确认：干式专用探头尺寸、最小弯曲半径、浇注材料/工艺兼容性、具体监测通道、校准及响应条件、通信寄存器、风机/继电器/跳闸能力、设备批准的测点图及阈值。安装正文是工程审查要点，不替代具体产品安装手册。
- 未新增客户案例、测试结果、认证、价格或收益数字。需要这些内容时先获得真实资料和公开授权。
- P2 后续：其余 19 篇资源正文仍共用内容，五个 technology 详情页也共用正文；应按主题和资料逐页处理。原理 technology URL 与 resources URL 的意图可能重叠，但没有查询+页面数据，暂不合并或改 canonical。

优化方向参考 [Google 有用内容指导](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)：页面应回答访问者实际问题并提供主题相关的实质信息。本地发现的重复正文是可改进问题，不等于已证明受到搜索处罚。

## 验证与后续观测

验证结果（2026-10-08，本次修改后执行）：

- `npm run check`：检查 30 个文件，0 errors、0 warnings、0 hints。
- `npm run build`：成功生成 49 个页面及 sitemap.xml alias。
- `npm test`：现有 11 项测试全部通过，包括唯一 title、单一 H1、全部内部页面/图片链接、联系邮箱与 sitemap 构建要求。
- `node scripts/check-priority-seo.mjs`：五个重点页的 H1、description、canonical、sitemap 归属、JSON-LD 可解析性、正文差异和两篇文章相关阅读均通过；sitemap 含 48 个唯一非 www canonical URL。
- `git diff --check`：通过。仅出现 Windows 行尾转换提示。

首次 Astro 检查受改名后的沙箱 realpath 权限限制；获得自动审批后在沙箱外重跑检查、构建与测试，全部通过。SEO 输出检查在普通沙箱内通过。没有改产品参数、联系功能或部署配置。没有执行浏览器视觉检查、性能测量或线上重定向验证，测试通过不代表这些项目已经验证。

进一步分析所需：同两期的 query+page 明细（可加 country/device 对照）、五个内页 Inspection、线上 HTTP/重定向/robots/sitemap 检查，以及型号资料审核。未读取密钥或调用 GSC 写操作。

用户后续自行上线后，记录部署日期并观察完整 28 天的同页/同查询表现和抓取状态。先确认内容已被重新抓取，再评估趋势；不能保证排名或点击提升。
