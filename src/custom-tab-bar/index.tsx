import { View, Text, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useState, useEffect } from "react";
import "./index.scss";

export default function CustomTabBar() {
  const [selected, setSelected] = useState(0);

  const list = [
    {
      pagePath: "/pages/index/index",
      text: "首页",
      icon: "🏠",
    },
    {
      pagePath: "/pages/bud/index",
      text: "青芽",
      icon: "🌱",
      isCenter: true,
    },
    {
      pagePath: "/pages/mine/index",
      text: "我的",
      icon: "👤",
    },
  ];

  const switchTab = (item, index) => {
    const url = item.pagePath;
    Taro.switchTab({
      url,
    });
    setSelected(index);
  };

  // Listen to page changes to update selected state
  useEffect(() => {
    // Initial check
    const pages = Taro.getCurrentPages();
    const currentPage = pages[pages.length - 1];
    if (currentPage) {
      const path = `/${currentPage.route}`;
      const index = list.findIndex((item) => item.pagePath === path);
      if (index !== -1) setSelected(index);
    }
  }, []);

  return (
    <View className="custom-tab-bar">
      {list.map((item, index) => {
        const isSelected = selected === index;

        if (item.isCenter) {
          return (
            <View
              key={index}
              className="tab-bar-item-center"
              onClick={() => switchTab(item, index)}
            >
              <View className="center-button">
                <Text className="center-icon">{item.icon}</Text>
              </View>
              <Text className="center-text">{item.text}</Text>
            </View>
          );
        }

        return (
          <View
            key={index}
            className="tab-bar-item"
            onClick={() => switchTab(item, index)}
          >
            <Text
              className={`tab-icon ${
                isSelected ? "scale-110 transition-transform" : ""
              }`}
            >
              {item.icon}
            </Text>
            <Text className={`tab-text ${isSelected ? "tab-text-active" : ""}`}>
              {item.text}
            </Text>
          </View>
        );
      })}
    </View>
  );
}
