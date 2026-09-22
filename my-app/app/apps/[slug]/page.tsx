"use client"; // 💡 核心：這是一個需要即時處理前端組件互動的 Client 檔案

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";

// 🧰 1. 成功引入你抽離出去的獨立小工具組件
import NetworkChecker from "../tools/NetworkChecker";


// 🎯 2. 建立小工具的「網址」與「實體組件」核心對照表
// 未來你新開發了什麼小程式，只需要在這邊「登記一行」就完成了！
const toolsComponentMap: Record<string, { title: string; component: React.ReactNode }> = {
  "network-checker": {
    title: "網絡即時檢測工具",
    component: <NetworkChecker />
  },

  // "pc-estimator": { title: "硬體估算器", component: <PcEstimator /> } <-- 未來這樣加
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function AppsDynamicPage({ params }: PageProps) {
  // 💡 3. 全自動變數漏斗：自動抓取目前網址上的 slug 代碼
  const { slug } = use(params);
  const currentTool = toolsComponentMap[slug];

  // 萬一網址上的名字在對照表裡找不到，自動跳轉 404 報錯頁面
  if (!currentTool) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 space-y-8">
      
      {/* 頂部麵包屑導航 ➔ 全自動動態顯示目前的工具名稱 */}
      <div className="flex items-center gap-4 text-xs font-semibold border-b border-gray-100 pb-4">
        <Link href="/" className="text-teal-600 hover:underline">首頁</Link>
        <span className="text-gray-300">/</span>
        <span className="text-gray-400">線上小工具箱</span>
        <span className="text-gray-300">/</span>
        <span className="text-gray-400 font-bold">{currentTool.title}</span>
      </div>

      {/* 核心內容區 ➔ 🎯 奇蹟的瞬間：全自動注入對應的小程式組件畫面！ */}
      <div className="space-y-4">
        {currentTool.component}
      </div>

      {/* 底部返回按鈕 */}
      <div className="pt-4">
        <Link 
          href="/" 
          className="text-xs font-bold text-teal-600 hover:text-teal-700 inline-flex items-center gap-1 group"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span> 返回網站首頁
        </Link>
      </div>

    </div>
  );
}
