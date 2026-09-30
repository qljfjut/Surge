/**
 * @name 抖音去广告与去商城脚本
 * @author qianliangjun
 * @desc 拦截并切除首页信息流广告卡片，剔除底部「商城」Tab 导航栏配置
 */

const url = $request.url;
let body = $response.body;

if (!body) {
  $done({});
} else {
  try {
    let obj = JSON.parse(body);

    // 1. 过滤底部导航栏与页面配置（彻底消除「商城」Tab 入口）
    if (url.includes("/page/settings") || url.includes("/tab/settings")) {
      const isMallTab = (tab) => {
        if (!tab) return false;
        const name = (tab.name || tab.title || "").toLowerCase();
        const tabType = (tab.tab_type || tab.type || "").toLowerCase();
        const urlStr = (tab.url || tab.schema || "").toLowerCase();
        return (
          name.includes("商城") ||
          name.includes("电商") ||
          tabType.includes("mall") ||
          tabType.includes("shop") ||
          urlStr.includes("mall") ||
          urlStr.includes("ecom")
        );
      };

      if (obj.data) {
        if (Array.isArray(obj.data.tab_list)) {
          obj.data.tab_list = obj.data.tab_list.filter((t) => !isMallTab(t));
        }
        if (Array.isArray(obj.data.bottom_tab_list)) {
          obj.data.bottom_tab_list = obj.data.bottom_tab_list.filter((t) => !isMallTab(t));
        }
      }
    }

    // 2. 过滤主页推荐信息流广告卡片
    if (url.includes("/aweme/v1/feed")) {
      if (Array.isArray(obj.aweme_list)) {
        obj.aweme_list = obj.aweme_list.filter((item) => {
          if (!item) return false;
          // 判定广告属性：带有 is_ads, raw_ad_data, ad_info 等特征一律剔除
          const isAd =
            item.is_ads === true ||
            Boolean(item.raw_ad_data) ||
            Boolean(item.ad_info) ||
            Boolean(item.ad_src);
          return !isAd;
        });
      }
    }

    $done({ body: JSON.stringify(obj) });
  } catch (err) {
    // 解析失败安全回退原报文
    $done({ body });
  }
}
