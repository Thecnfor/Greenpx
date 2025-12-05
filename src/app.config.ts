export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/cart/index",
    "pages/mine/index",
    "pages/bud/index",
    "pages/xrak/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "广东云上农场",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    custom: true,
    color: "#a8a29e",
    selectedColor: "#059669",
    backgroundColor: "#ffffff",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
      },
      {
        pagePath: "pages/bud/index",
        text: "青芽",
      },
      {
        pagePath: "pages/mine/index",
        text: "我的",
      },
    ],
  },
});
