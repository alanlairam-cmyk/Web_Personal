import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "2026 全港免費線上 IT 技術工具箱 & 知識博客 | 電腦維修指南",
    template: "%s | IT 技術工具箱"
  },
  description: "提供香港最實用的電腦維修與 IT 技術指南！不論是個人手提電腦故障、辦公室網絡不通，還是中小企業 IT 外包，我們在此提供一鍵即用的免安裝線上小工具，並分享專業的故障除錯知識。",
  keywords: ["電腦維修", "IT技術指南", "香港電腦維修", "手提電腦故障", "網絡不通", "IT外包", "線上IT工具"],
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* 修正：將 Header 移入 body 內，並讓整個頁面呈現乾淨的垂直排列 */}
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        
        {/* 1. 導航欄外殼 */}
        <Header /> 
        
        {/* 2. 內容容器：使用與 Header 相同的 Tailwind 寬度與間距限制，確保上下絕對對齊 */}
        <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 flex-1">
          {children}
        </main>

      </body>
    </html>
  );
}
