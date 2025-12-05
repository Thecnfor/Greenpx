import { View, Text, Image, ScrollView, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useState } from "react";
import "./index.scss";

export default function Bud() {
  const [activeTab, setActiveTab] = useState<"virtual" | "real">("virtual");

  // Virtual Tree State
  const [waterLevel, setWaterLevel] = useState(30);
  const [treeStage, setTreeStage] = useState(2); // 1: Seed, 2: Sapling, 3: Tree
  const [showQuiz, setShowQuiz] = useState(false);
  const [showMilestone, setShowMilestone] = useState(false);

  // Mock Adoption Data
  const adoptions = [
    {
      id: 1,
      name: "肇庆沙浦肇实",
      location: "肇庆鼎湖山",
      days: 45,
      status: "抽穗期",
      video: "live_stream_url",
      imageColor: "bg-amber-100",
    },
    {
      id: 2,
      name: "佛山更合粉葛",
      location: "佛山高明",
      days: 12,
      status: "幼苗期",
      video: "live_stream_url",
      imageColor: "bg-emerald-100",
    },
  ];

  const handleWater = () => {
    if (waterLevel >= 100) {
      Taro.showToast({ title: "今日水分已充足", icon: "none" });
      return;
    }
    setWaterLevel((prev) => Math.min(prev + 20, 100));
    Taro.showToast({ title: "浇水成功 +20", icon: "success" });

    if (waterLevel + 20 >= 100 && treeStage < 3) {
      setTimeout(() => {
        setShowMilestone(true);
        setTreeStage((prev) => prev + 1);
      }, 1000);
    }
  };

  return (
    <View className="min-h-screen bg-stone-50 pb-24">
      {/* Top Navigation */}
      <View className="bg-white p-2 sticky top-0 z-10 shadow-sm flex justify-center">
        <View className="flex bg-stone-100 rounded-full p-1 w-64">
          <View
            className={`flex-1 py-1.5 rounded-full text-center text-xs font-bold transition-all ${
              activeTab === "virtual"
                ? "bg-emerald-500 text-white shadow-sm"
                : "text-stone-500"
            }`}
            onClick={() => setActiveTab("virtual")}
          >
            需求之树 (虚拟)
          </View>
          <View
            className={`flex-1 py-1.5 rounded-full text-center text-xs font-bold transition-all ${
              activeTab === "real"
                ? "bg-emerald-500 text-white shadow-sm"
                : "text-stone-500"
            }`}
            onClick={() => setActiveTab("real")}
          >
            生长树 (实体)
          </View>
        </View>
      </View>

      <ScrollView scrollY className="h-full">
        {activeTab === "virtual" ? (
          /* Virtual Tree Section */
          <View className="p-4">
            {/* Tree Visualization */}
            <View className="bg-gradient-to-b from-sky-200 to-emerald-50 rounded-2xl h-[400px] relative overflow-hidden shadow-inner border border-sky-100 mb-4">
              <View className="absolute top-4 left-4 bg-white/60 backdrop-blur-md px-3 py-1 rounded-full">
                <Text className="text-xs font-bold text-emerald-800">
                  Lv.{treeStage} 营养青芽
                </Text>
              </View>

              {/* Cloud Animation */}
              <View className="absolute top-8 right-8 text-4xl animate-pulse opacity-80">
                ☁️
              </View>
              <View className="absolute top-16 left-12 text-3xl animate-pulse opacity-60 delay-700">
                ☁️
              </View>

              {/* Tree Emoji */}
              <View className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center transition-all duration-1000">
                {/* Dialogue Bubble */}
                <View className="bg-white px-3 py-2 rounded-xl rounded-bl-none mb-2 shadow-sm animate-bounce">
                  <Text className="text-xs text-stone-600">
                    {waterLevel < 50 ? "主人，我渴了~" : "今天阳光真好！"}
                  </Text>
                </View>
                <Text
                  className={`transition-all ${
                    treeStage === 1
                      ? "text-6xl"
                      : treeStage === 2
                      ? "text-8xl"
                      : "text-9xl"
                  }`}
                >
                  {treeStage === 1 ? "🌱" : treeStage === 2 ? "🌿" : "🌳"}
                </Text>
              </View>

              {/* Water Bar */}
              <View className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur rounded-xl p-3 flex items-center gap-3">
                <Text className="text-xl">💧</Text>
                <View className="flex-1">
                  <View className="flex justify-between text-[10px] text-stone-500 mb-1">
                    <Text>水分值</Text>
                    <Text>{waterLevel}/100</Text>
                  </View>
                  <View className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
                    <View
                      className="h-full bg-blue-400 transition-all duration-500"
                      style={{ width: `${waterLevel}%` }}
                    ></View>
                  </View>
                </View>
                <View
                  className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-transform"
                  onClick={handleWater}
                >
                  <Text className="text-white text-xl">🚿</Text>
                </View>
              </View>
            </View>

            {/* Interaction Grid */}
            <View className="grid grid-cols-2 gap-3">
              <View
                className="bg-white p-3 rounded-xl shadow-sm flex items-center gap-3"
                onClick={() => setShowQuiz(true)}
              >
                <View className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-xl">
                  🧠
                </View>
                <View>
                  <Text className="block text-sm font-bold text-stone-800">
                    趣味测评
                  </Text>
                  <Text className="block text-[10px] text-stone-500">
                    生成健康画像
                  </Text>
                </View>
              </View>
              <View className="bg-white p-3 rounded-xl shadow-sm flex items-center gap-3">
                <View className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-xl">
                  📺
                </View>
                <View>
                  <Text className="block text-sm font-bold text-stone-800">
                    科普视频
                  </Text>
                  <Text className="block text-[10px] text-stone-500">
                    答题赢肥料
                  </Text>
                </View>
              </View>
            </View>

            {/* Recommendation Card */}
            <View className="mt-4 bg-emerald-50 border border-emerald-100 rounded-xl p-3">
              <View className="flex justify-between items-center mb-2">
                <Text className="text-xs font-bold text-emerald-800">
                  基于您的营养画像推荐
                </Text>
                <Text className="text-[10px] text-emerald-600 bg-white px-2 py-0.5 rounded-full">
                  去补充 {">"}
                </Text>
              </View>
              <View className="flex gap-3">
                <View className="w-16 h-16 bg-stone-200 rounded-lg flex items-center justify-center">
                  <Text className="text-2xl">🍍</Text>
                </View>
                <View className="flex-1">
                  <Text className="text-sm font-bold text-stone-800">
                    徐闻菠萝
                  </Text>
                  <Text className="text-[10px] text-stone-500 mt-1">
                    补充维生素C与膳食纤维，提升免疫力。
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ) : (
          /* Real Tree (Adoption) Section */
          <View className="p-4">
            <View className="mb-4">
              <Text className="text-lg font-bold text-stone-800 block mb-2">
                我的云端农场
              </Text>
              {adoptions.map((item) => (
                <View
                  key={item.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-stone-100 mb-3"
                >
                  {/* Video Placeholder */}
                  <View
                    className={`h-40 w-full ${item.imageColor} relative flex items-center justify-center`}
                  >
                    <View className="absolute top-2 left-2 bg-red-500/80 backdrop-blur px-2 py-0.5 rounded flex items-center gap-1">
                      <View className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></View>
                      <Text className="text-[10px] text-white">LIVE</Text>
                    </View>
                    <Text className="text-5xl opacity-50">📹</Text>
                    <Text className="absolute bottom-2 right-2 text-[10px] text-stone-600 bg-white/50 px-2 py-1 rounded">
                      {item.location}
                    </Text>
                  </View>

                  <View className="p-3">
                    <View className="flex justify-between items-start mb-2">
                      <View>
                        <Text className="text-base font-bold text-stone-900 block">
                          {item.name}
                        </Text>
                        <Text className="text-xs text-stone-500">
                          已云养 {item.days} 天 · {item.status}
                        </Text>
                      </View>
                      <View className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded font-bold">
                        生长日记
                      </View>
                    </View>

                    {/* Timeline Preview */}
                    <View className="flex items-center gap-2 mt-3">
                      {[1, 2, 3, 4, 5].map((dot, i) => (
                        <View
                          key={i}
                          className={`h-1.5 rounded-full flex-1 ${
                            i < 3 ? "bg-emerald-400" : "bg-stone-100"
                          }`}
                        ></View>
                      ))}
                      <Text className="text-[10px] text-stone-400 ml-1">
                        预计收获 15天
                      </Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>

            <View className="bg-stone-100 rounded-xl p-4 text-center">
              <Text className="text-stone-400 text-xs mb-2">
                想要更多专属农场？
              </Text>
              <View
                className="bg-white border border-stone-200 text-stone-800 py-2 rounded-lg font-bold text-sm shadow-sm"
                onClick={() => Taro.switchTab({ url: "/pages/index/index" })}
              >
                去首页认养
              </View>
            </View>
          </View>
        )}
      </ScrollView>

      {/* Milestone Modal */}
      {showMilestone && (
        <View
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setShowMilestone(false)}
        >
          <View
            className="bg-white p-6 rounded-2xl w-72 text-center relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <View className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-blue-500"></View>
            <Text className="text-6xl mb-4 block animate-bounce">🎉</Text>
            <Text className="text-xl font-bold mb-2 block text-stone-800">
              恭喜升级！
            </Text>
            <Text className="text-sm text-stone-500 mb-6 block leading-relaxed">
              您的青芽已成长为{" "}
              <Text className="font-bold text-emerald-600">幼苗</Text>！
              获得了专属“时光记忆卡片”。
            </Text>
            <View className="bg-stone-50 border border-stone-100 p-3 rounded-lg mb-4 rotate-1 hover:rotate-0 transition-transform">
              <Text className="block text-[10px] text-stone-400 text-left mb-1">
                2025.12.05
              </Text>
              <Text className="block text-sm font-serif text-stone-800">
                “ 破土而出的力量，是生命最美的赞歌。”
              </Text>
            </View>
            <View
              className="bg-emerald-600 text-white py-2 rounded-full font-bold text-sm shadow-lg shadow-emerald-600/30"
              onClick={() => setShowMilestone(false)}
            >
              收下卡片
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
