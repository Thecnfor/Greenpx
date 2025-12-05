import { View, Text, Image, ScrollView, Input } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useState } from "react";
import "./index.scss";

export default function Cart() {
  const [address, setAddress] = useState({
    name: "张伟",
    phone: "66***888",
    region: "中国澳门",
    detail: "澳门半岛大堂区友谊大马路999号",
  });

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "广东增城迟菜心 5斤装",
      tag: "国家地理标志",
      price: 39.9,
      imageColor: "bg-emerald-200",
      quantity: 1,
      selected: true,
    },
    {
      id: 2,
      title: "徐闻菠萝 凤梨 现摘现发",
      tag: "产地直发",
      price: 29.9,
      imageColor: "bg-yellow-200",
      quantity: 2,
      selected: true,
    },
  ]);

  const totalPrice = cartItems.reduce(
    (sum, item) => (item.selected ? sum + item.price * item.quantity : sum),
    0
  );

  return (
    <View className="min-h-screen bg-stone-50 pb-24">
      <ScrollView scrollY className="h-full">
        {/* Header */}
        <View className="bg-white p-4 sticky top-0 z-10 shadow-sm">
          <Text className="text-lg font-bold">购物车 ({cartItems.length})</Text>
        </View>

        {/* Logistics & Address Section */}
        <View className="mx-4 mt-4 bg-white rounded-xl p-4 border border-stone-100 shadow-sm">
          <View className="flex items-center justify-between mb-3 border-b border-stone-100 pb-3">
            <View className="flex items-center gap-2">
              <View className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
                南
              </View>
              <Text className="font-bold text-stone-800">
                南光通物流 · 内地直达澳门
              </Text>
            </View>
            <Text className="text-xs text-emerald-600 font-medium">次日达</Text>
          </View>

          <View className="flex gap-3 items-start">
            <View className="mt-1">
              <Text className="text-xl">📍</Text>
            </View>
            <View className="flex-1">
              <View className="flex items-center gap-2 mb-1">
                <Text className="font-bold text-stone-900">{address.name}</Text>
                <Text className="text-stone-500 text-sm">{address.phone}</Text>
              </View>
              <Text className="text-stone-700 text-sm leading-relaxed">
                {address.region} {address.detail}
              </Text>
            </View>
            <Text className="text-stone-300">{">"}</Text>
          </View>

          {/* Logistics Timeline Preview */}
          <View className="mt-3 bg-stone-50 rounded-lg p-3">
            <View className="flex items-center justify-between text-xs text-stone-500 mb-2">
              <Text>预计送达：明天 14:00 前</Text>
              <Text className="text-blue-600">查看运费规则 {">"}</Text>
            </View>
            <View className="flex items-center gap-2">
              <View className="h-1 flex-1 bg-stone-200 rounded-full overflow-hidden">
                <View className="h-full w-1/3 bg-emerald-500"></View>
              </View>
              <Text className="text-[10px] text-emerald-600 font-medium">
                商家配货中
              </Text>
            </View>
          </View>
        </View>

        {/* Cart Items */}
        <View className="mx-4 mt-4 bg-white rounded-xl overflow-hidden border border-stone-100 shadow-sm">
          <View className="p-3 bg-stone-50 border-b border-stone-100 flex justify-between items-center">
            <Text className="text-xs font-bold text-stone-600">
              青芽云圃自营
            </Text>
            <Text className="text-[10px] text-stone-400">免运费</Text>
          </View>

          {cartItems.map((item) => (
            <View
              key={item.id}
              className="p-4 border-b border-stone-100 last:border-b-0 flex gap-3"
            >
              {/* Checkbox */}
              <View className="self-center">
                <View
                  className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                    item.selected
                      ? "bg-emerald-500 border-emerald-500"
                      : "border-stone-300"
                  }`}
                >
                  {item.selected && (
                    <Text className="text-white text-xs">✓</Text>
                  )}
                </View>
              </View>

              {/* Image */}
              <View
                className={`w-20 h-20 rounded-lg ${item.imageColor} flex items-center justify-center flex-shrink-0`}
              >
                <Text className="text-2xl opacity-30">🥬</Text>
              </View>

              {/* Info */}
              <View className="flex-1 flex flex-col justify-between">
                <View>
                  <Text className="text-sm font-bold text-stone-900 line-clamp-2">
                    {item.title}
                  </Text>
                  <Text className="text-[10px] text-emerald-600 bg-emerald-50 inline-block px-1.5 py-0.5 rounded mt-1">
                    {item.tag}
                  </Text>
                </View>
                <View className="flex justify-between items-end">
                  <Text className="text-red-600 font-bold text-lg">
                    ¥{item.price}
                  </Text>
                  <View className="flex items-center gap-3 bg-stone-100 rounded px-2 py-1">
                    <Text className="text-stone-500">-</Text>
                    <Text className="text-sm font-medium w-4 text-center">
                      {item.quantity}
                    </Text>
                    <Text className="text-stone-900">+</Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Service Guarantee */}
        <View className="mx-4 mt-4 mb-6 bg-emerald-50/50 rounded-xl p-4 border border-emerald-100">
          <View className="flex items-center gap-2 mb-2">
            <Text className="text-lg">🛡️</Text>
            <Text className="font-bold text-emerald-900 text-sm">
              无忧售后承诺
            </Text>
          </View>
          <View className="space-y-2">
            <View className="flex gap-2">
              <View className="w-1 h-1 bg-emerald-400 rounded-full mt-1.5"></View>
              <Text className="text-xs text-emerald-800 leading-relaxed flex-1">
                <Text className="font-bold">坏果包赔：</Text>
                若产品有误差或损坏，请在签收后24小时内拍照联系客服，我们承诺给予诚挚道歉并立即安排补发或退款。
              </Text>
            </View>
            <View className="flex gap-2">
              <View className="w-1 h-1 bg-emerald-400 rounded-full mt-1.5"></View>
              <Text className="text-xs text-emerald-800 leading-relaxed flex-1">
                <Text className="font-bold">全程冷链：</Text>
                南光通专线物流，全程温控，确保从田间到餐桌的新鲜。
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Bar */}
      <View className="fixed bottom-0 left-0 right-0 bg-white border-t border-stone-100 p-4 flex items-center justify-between z-50 pb-safe">
        <View className="flex items-center gap-2">
          <View className="w-5 h-5 rounded-full border border-stone-300 bg-emerald-500 border-emerald-500 flex items-center justify-center">
            <Text className="text-white text-xs">✓</Text>
          </View>
          <Text className="text-sm text-stone-500">全选</Text>
        </View>

        <View className="flex items-center gap-4">
          <View className="text-right">
            <Text className="text-xs text-stone-400">不含运费</Text>
            <View className="flex items-baseline">
              <Text className="text-sm font-bold text-stone-900 mr-1">
                合计:
              </Text>
              <Text className="text-red-600 font-bold text-xl">
                ¥{totalPrice.toFixed(2)}
              </Text>
            </View>
          </View>
          <View className="bg-emerald-600 text-white px-8 py-3 rounded-full font-bold text-sm shadow-lg shadow-emerald-600/30 active:scale-95 transition-transform">
            立即结算
          </View>
        </View>
      </View>
    </View>
  );
}
