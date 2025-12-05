import { View, Text, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";

export default function XrakPage() {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <View className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#ff0080_100%)] opacity-20 animate-[spin_4s_linear_infinite] blur-3xl"></View>
      <View className="absolute top-[-20%] right-[-20%] w-[140%] h-[140%] bg-[conic-gradient(from_270deg_at_50%_50%,#00000000_50%,#00ffcc_100%)] opacity-20 animate-[spin_4s_linear_infinite_reverse] blur-3xl"></View>

      {/* Main Content */}
      <View className="relative z-10 flex flex-col items-center">
        <View className={`relative ${glitch ? "translate-x-1" : ""}`}>
          <Text className="text-[120px] font-black text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-500 via-purple-600 to-cyan-500 leading-none tracking-tighter italic transform -skew-x-12 drop-shadow-[0_0_15px_rgba(255,0,255,0.5)]">
            XRAK
          </Text>
          {/* Glitch Layer */}
          {glitch && (
            <Text className="absolute top-0 left-1 text-[120px] font-black text-cyan-400 opacity-50 leading-none tracking-tighter italic transform -skew-x-12 mix-blend-screen">
              XRAK
            </Text>
          )}
          {glitch && (
            <Text className="absolute top-0 -left-1 text-[120px] font-black text-red-500 opacity-50 leading-none tracking-tighter italic transform -skew-x-12 mix-blend-screen">
              XRAK
            </Text>
          )}
        </View>

        <View className="mt-8 flex flex-col items-center gap-2">
          <View className="px-4 py-1 border border-cyan-500/50 bg-cyan-900/20 rounded-full backdrop-blur-sm">
            <Text className="text-cyan-400 text-xs tracking-[0.5em] font-mono">
              EST. 2025
            </Text>
          </View>
          <Text className="text-fuchsia-300 text-sm font-bold tracking-widest uppercase mt-4 animate-pulse">
            XRAK · 释放未知
          </Text>
        </View>
      </View>

      {/* Decorative Grid */}
      <View className="absolute bottom-0 w-full h-1/3 bg-[linear-gradient(to_top,#000_0%,transparent_100%),repeating-linear-gradient(90deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_40px)] pointer-events-none"></View>

      <View className="absolute bottom-10">
        <Text className="text-white/20 text-[10px] font-mono">
          www.xrak.xyz
        </Text>
      </View>
    </View>
  );
}
