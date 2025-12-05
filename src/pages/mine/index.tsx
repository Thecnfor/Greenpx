import { View, Text, Image, ScrollView, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useState } from "react";
import "./index.scss";

export default function Mine() {
  const [showAdModal, setShowAdModal] = useState(false);
  const [points, setPoints] = useState(1280);

  // Mock Data for Nutrition Tree
  const [treeStage, setTreeStage] = useState(2); // 1: Seed, 2: Sprout, 3: Tree
  const [nutritionData, setNutritionData] = useState({
    lacking: ["维生素C", "膳食纤维"],
    status: "亚健康",
    score: 72,
  });

  const handleWatchAd = () => {
    setShowAdModal(true);
    // Simulate ad watching
    setTimeout(() => {
      setShowAdModal(false);
      setPoints((prev) => prev + 50);
      Taro.showToast({ title: "积分 +50", icon: "success" });
    }, 2000);
  };

  return (
    <View className="min-h-screen bg-stone-50 pb-48">
      {/* Header Section */}
      <View className="bg-emerald-800 pt-4 pb-16 px-4 rounded-b-[40px] relative shadow-lg shadow-emerald-900/20">
        <View className="flex items-center gap-4 mb-6">
          <View className="w-16 h-16 rounded-full bg-white/20 border-2 border-white/50 flex items-center justify-center text-3xl shadow-inner">
            🧑‍🌾
          </View>
          <View className="flex-1">
            <View className="flex items-center gap-2">
              <Text className="text-white text-xl font-bold">
                港澳青年_No.888
              </Text>
              <View className="bg-amber-400 text-amber-900 text-[10px] px-2 py-0.5 rounded-full font-bold">
                Lv.3 种植达人
              </View>
            </View>
            <Text className="text-emerald-100/80 text-xs mt-1">
              ID: 85300888
            </Text>
          </View>
          <View className="text-right" onClick={handleWatchAd}>
            <View className="flex items-center justify-end gap-1 text-amber-300">
              <Text className="text-lg">🪙</Text>
              <Text className="text-xl font-bold font-mono">{points}</Text>
            </View>
            <Text className="text-white/60 text-[10px] underline">
              看广告赚积分 {">"}
            </Text>
          </View>
        </View>

        {/* Nutrition Tree Card */}
        <View className="bg-white rounded-2xl p-5 shadow-xl relative overflow-hidden min-h-[180px]">
          <View className="absolute top-0 right-0 bg-emerald-100 text-emerald-700 text-[10px] px-3 py-1 rounded-bl-xl font-bold">
            专属营养树
          </View>

          <View className="flex gap-4">
            {/* Tree Visual */}
            <View className="w-1/3 flex flex-col items-center justify-center bg-stone-50 rounded-xl p-2 border border-stone-100">
              <Text className="text-6xl animate-bounce mb-2">
                {treeStage === 1 ? "🌱" : treeStage === 2 ? "🌿" : "🌳"}
              </Text>
              <View className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
                <View className="bg-emerald-500 h-full w-[72%]"></View>
              </View>
              <Text className="text-[10px] text-stone-400 mt-1">
                成长值 72/100
              </Text>
            </View>

            {/* Stats & Recommendations */}
            <View className="flex-1">
              <View className="flex items-baseline gap-2 mb-2">
                <Text className="text-stone-800 font-bold">我的健康评估</Text>
                <Text className="text-emerald-600 font-bold text-xl">
                  {nutritionData.score}分
                </Text>
              </View>
              <View className="flex flex-wrap gap-2 mb-3">
                {nutritionData.lacking.map((item, idx) => (
                  <View
                    key={idx}
                    className="bg-red-50 text-red-600 text-[10px] px-2 py-1 rounded border border-red-100"
                  >
                    缺乏 {item}
                  </View>
                ))}
              </View>
              <View
                className="bg-emerald-50 rounded-lg p-2 flex items-center justify-between"
                onClick={() =>
                  Taro.showToast({ title: "跳转匹配产品", icon: "none" })
                }
              >
                <View>
                  <Text className="text-[10px] text-emerald-800 block font-bold">
                    推荐补充：
                  </Text>
                  <Text className="text-xs text-stone-600">
                    徐闻菠萝 (富含VC)
                  </Text>
                </View>
                <View className="bg-emerald-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shadow-sm">
                  {">"}
                </View>
              </View>
            </View>
          </View>

          {/* Questionnaire Entry */}
          <View className="mt-4 border-t border-stone-100 pt-3 flex items-center justify-between">
            <Text className="text-xs text-stone-500">
              更新今日饮食，让树苗长得更快！
            </Text>
            <View className="bg-stone-800 text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1">
              <Text>📝</Text>
              <Text>日常小测</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Marketing Banners */}
      <View className="px-4 mt-20 mb-6 space-y-3">
        {/* Invite Friends */}
        <View className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl p-4 text-white flex items-center justify-between shadow-lg shadow-rose-500/20">
          <View>
            <Text className="block font-bold text-lg">邀请好友得优惠</Text>
            <Text className="block text-xs opacity-90">
              每邀请1位好友，各得8.8折券
            </Text>
          </View>
          <View className="bg-white text-rose-500 px-4 py-2 rounded-full text-xs font-bold shadow-sm">
            立即邀请
          </View>
        </View>

        {/* Buy 1 Get 1 Free */}
        <View className="bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl p-4 text-white flex items-center justify-between shadow-lg shadow-purple-500/20">
          <View>
            <Text className="block font-bold text-lg">周三会员日</Text>
            <Text className="block text-xs opacity-90">
              指定生态农产 买一送一
            </Text>
          </View>
          <Text className="text-3xl">🎁</Text>
        </View>
      </View>

      {/* Menu Grid */}
      <View className="px-4 mb-8">
        <View className="bg-white rounded-xl shadow-sm border border-stone-100 p-4">
          <Text className="font-bold text-stone-800 mb-4 block">常用服务</Text>
          <View className="grid grid-cols-4 gap-4">
            {[
              { name: "我的订单", icon: "📦" },
              { name: "收货地址", icon: "📍" },
              { name: "南光通物流", icon: "🚛" },
              { name: "营养报告", icon: "📊" },
              { name: "优惠券", icon: "🎫" },
              { name: "设置", icon: "⚙️" },
              { name: "关于我们", icon: "ℹ️" },
              { name: "XRAK", icon: "👾", link: "/pages/xrak/index" },
            ].map((item, idx) => (
              <View
                key={idx}
                className="flex flex-col items-center gap-2"
                onClick={() => {
                  if (item.link) {
                    Taro.navigateTo({ url: item.link });
                  } else {
                    Taro.showToast({
                      title: `点击了${item.name}`,
                      icon: "none",
                    });
                  }
                }}
              >
                <View className="w-10 h-10 bg-stone-50 rounded-full flex items-center justify-center text-xl">
                  {item.icon}
                </View>
                <Text className="text-xs text-stone-600">{item.name}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Ad Modal (Mock) */}
      {showAdModal && (
        <View className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <View className="bg-white p-6 rounded-2xl w-64 text-center">
            <Text className="text-4xl mb-4 block">📺</Text>
            <Text className="text-lg font-bold mb-2 block">广告播放中...</Text>
            <Text className="text-sm text-stone-500 mb-4 block">
              观看完整视频可获 50 积分
            </Text>
            <View className="w-full bg-stone-100 h-1 rounded-full overflow-hidden mb-4">
              <View className="h-full bg-emerald-500 animate-[width_2s_linear_forwards] w-full"></View>
            </View>
            <Text className="text-xs text-stone-400">
              模拟广告，2秒后自动关闭
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}
