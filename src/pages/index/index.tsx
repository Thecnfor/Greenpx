import { View, Text, Image, ScrollView, Input } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useState } from "react";
import "./index.scss";

export default function Index() {
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    {
      id: 1,
      name: "地标农产",
      icon: "🥬",
      color: "bg-emerald-100 text-emerald-700",
    },
    { id: 2, name: "优选良种", icon: "🌱", color: "bg-lime-100 text-lime-700" },
    { id: 3, name: "深加工", icon: "🍯", color: "bg-amber-100 text-amber-700" },
    {
      id: 4,
      name: "现代农具",
      icon: "🚜",
      color: "bg-slate-100 text-slate-700",
    },
  ];

  const features = [
    { title: "原产地直供", desc: "拒绝中间商", icon: "📍" },
    { title: "全程溯源", desc: "一物一码", icon: "🛡️" },
    { title: "生态种植", desc: "绿色无公害", icon: "🌿" },
  ];

  const products = [
    {
      id: 1,
      title: "广东增城迟菜心 5斤装",
      tag: "国家地理标志",
      price: "39.9",
      origin: "广州增城",
      imageColor: "bg-emerald-200",
      sold: 1200,
    },
    {
      id: 2,
      title: "徐闻菠萝 凤梨 现摘现发",
      tag: "产地直发",
      price: "29.9",
      origin: "湛江徐闻",
      imageColor: "bg-yellow-200",
      sold: 3400,
    },
    {
      id: 3,
      title: "英德红茶 英红九号",
      tag: "非遗工艺",
      price: "128.0",
      origin: "清远英德",
      imageColor: "bg-red-100",
      sold: 850,
    },
    {
      id: 4,
      title: "新会陈皮 十年老皮",
      tag: "药食同源",
      price: "299.0",
      origin: "江门新会",
      imageColor: "bg-orange-200",
      sold: 560,
    },
    {
      id: 5,
      title: "高产水稻种子 粤香丝苗",
      tag: "农科院研发",
      price: "15.0",
      origin: "广东省农科院",
      imageColor: "bg-stone-200",
      sold: 5000,
    },
    {
      id: 6,
      title: "智能灌溉控制器",
      tag: "智慧农业",
      price: "450.0",
      origin: "深圳科技园",
      imageColor: "bg-blue-100",
      sold: 120,
    },
  ];

  return (
    <View className="min-h-screen bg-stone-50 pb-20">
      {/* Header & Search */}
      <View className="sticky top-0 z-50 bg-white/80 backdrop-blur-md px-4 py-2 shadow-sm">
        <View className="flex items-center gap-3">
          <View className="flex-1 bg-stone-100 rounded-full h-9 px-4 flex items-center gap-2">
            <Text className="text-stone-400 text-sm">🔍</Text>
            <Input
              className="flex-1 text-sm text-stone-800"
              placeholder="搜索地标农产、良种、农具..."
              placeholderClass="text-stone-400"
            />
          </View>
          <View
            className="relative"
            onClick={() => Taro.navigateTo({ url: "/pages/cart/index" })}
          >
            <Text className="text-xl">🛒</Text>
            <View className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              2
            </View>
          </View>
        </View>
      </View>

      {/* Hero Section - Cloud Farming Concept */}
      <View className="p-4">
        <View className="relative w-full h-48 rounded-2xl overflow-hidden bg-emerald-800 flex items-center justify-center shadow-lg shadow-emerald-800/20">
          {/* Decorative background circles */}
          <View className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></View>
          <View className="absolute bottom-0 right-0 w-40 h-40 bg-emerald-600/30 rounded-full translate-x-1/3 translate-y-1/3"></View>

          <View className="relative z-10 text-center text-white">
            <View className="flex items-center justify-center gap-2 mb-2">
              <Text className="text-[10px] bg-blue-600/80 backdrop-blur-md px-2 py-0.5 rounded text-white font-medium">
                南光通物流 · 澳门直达
              </Text>
              <Text className="text-sm font-medium tracking-widest opacity-80">
                云端认养 · 生态溯源
              </Text>
            </View>
            <Text className="block text-3xl font-bold mb-3">青芽云圃</Text>
            <View className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/30">
              <Text className="text-xs font-bold mr-1">立即认养</Text>
              <Text className="text-xs">{">"}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Value Proposition - Addressing Trust Issues */}
      <View className="px-4 mb-6">
        <View className="flex justify-between bg-white p-3 rounded-xl shadow-sm border border-stone-100">
          {features.map((item, index) => (
            <View
              key={index}
              className="flex flex-col items-center flex-1 border-r last:border-r-0 border-stone-100"
            >
              <Text className="text-lg mb-1">{item.icon}</Text>
              <Text className="text-xs font-bold text-stone-800">
                {item.title}
              </Text>
              <Text className="text-[10px] text-stone-500 mt-0.5">
                {item.desc}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Categories */}
      <View className="px-4 mb-8">
        <View className="flex justify-between gap-2">
          {categories.map((cat) => (
            <View
              key={cat.id}
              className="flex flex-col items-center gap-2 w-1/4"
            >
              <View
                className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm ${cat.color}`}
              >
                <Text className="text-2xl">{cat.icon}</Text>
              </View>
              <Text className="text-xs font-medium text-stone-700">
                {cat.name}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Brand Highlight Section - Addressing Brand Recognition */}
      <View className="px-4 mb-6">
        <View className="flex items-center justify-between mb-3">
          <Text className="text-lg font-bold text-stone-900">
            粤字号 · 品牌馆
          </Text>
          <Text className="text-xs text-stone-500">查看全部 {">"}</Text>
        </View>
        <ScrollView scrollX className="whitespace-nowrap" showScrollbar={false}>
          <View className="inline-flex gap-3 pb-2">
            {[1, 2, 3].map((i) => (
              <View
                key={i}
                className="w-64 h-32 bg-stone-800 rounded-xl relative overflow-hidden shrink-0"
              >
                <View className="absolute inset-0 bg-gradient-to-r from-stone-900 to-transparent z-10"></View>
                <View className="absolute top-4 left-4 z-20">
                  <Text className="block text-amber-400 text-xs font-bold mb-1">
                    BRAND STORY
                  </Text>
                  <Text className="block text-white text-lg font-bold">
                    家养包
                  </Text>
                  <Text className="block text-stone-300 text-xs mt-1 w-32 whitespace-normal">
                    千年贡品，从枝头到舌尖的鲜甜。
                  </Text>
                </View>
                <View className="absolute right-0 bottom-0 w-32 h-32 bg-red-500/20 rounded-full blur-2xl"></View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      {/* Product Tabs */}
      <View className="sticky top-[52px] z-40 bg-stone-50/95 backdrop-blur-sm px-4 py-2 mb-2">
        <ScrollView scrollX className="whitespace-nowrap" showScrollbar={false}>
          <View className="flex gap-6">
            {["全部推荐", "时令生鲜", "种子种苗", "农用工具", "深加工"].map(
              (tab, idx) => (
                <View
                  key={idx}
                  className="flex flex-col items-center relative py-2"
                  onClick={() => setActiveTab(idx)}
                >
                  <Text
                    className={`text-sm transition-all ${
                      activeTab === idx
                        ? "font-bold text-emerald-800 text-base"
                        : "text-stone-500"
                    }`}
                  >
                    {tab}
                  </Text>
                  {activeTab === idx && (
                    <View className="absolute bottom-0 w-4 h-1 bg-emerald-600 rounded-full"></View>
                  )}
                </View>
              )
            )}
          </View>
        </ScrollView>
      </View>

      {/* Product Grid */}
      <View className="px-4 grid grid-cols-2 gap-3 pb-8">
        {products.map((product) => (
          <View
            key={product.id}
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-stone-100 flex flex-col"
          >
            {/* Image Placeholder */}
            <View
              className={`h-32 w-full ${product.imageColor} relative flex items-center justify-center`}
            >
              <Text className="text-4xl opacity-20">🌾</Text>
              {product.tag && (
                <View className="absolute top-2 left-2 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded">
                  <Text className="text-[10px] text-white font-medium">
                    {product.tag}
                  </Text>
                </View>
              )}
            </View>

            <View className="p-3 flex-1 flex flex-col">
              <Text className="text-sm font-bold text-stone-900 line-clamp-2 mb-1">
                {product.title}
              </Text>
              <View className="flex items-center gap-1 mb-3">
                <Text className="text-[10px] text-stone-500 bg-stone-100 px-1.5 py-0.5 rounded-sm">
                  📍 {product.origin}
                </Text>
              </View>

              <View className="mt-auto flex items-end justify-between">
                <View>
                  <Text className="text-xs text-red-600 font-bold">¥</Text>
                  <Text className="text-lg text-red-600 font-bold leading-none">
                    {product.price}
                  </Text>
                </View>
                <View className="bg-emerald-600 w-6 h-6 rounded-full flex items-center justify-center active:scale-95 transition-transform">
                  <Text className="text-white text-sm">+</Text>
                </View>
              </View>
              <Text className="text-[10px] text-stone-400 mt-1">
                已售 {product.sold}+
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
