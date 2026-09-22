"use client";

import { useState } from "react";
import Link from "next/link";
import BlogCard from "../components/BlogCard";
import { BlogPost } from "../utils/markdownParser"; // 引入型別

// 💡 透過 props 接收從後端自動掃描出來的完整文章陣列
export default function BlogListClient({ allBlogPosts }: { allBlogPosts: BlogPost[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("全部文章");

  const categories = ["全部文章", "電腦維修", "資訊安全", "網絡技術", "IT外包服務"];

  const filteredPosts = allBlogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "全部文章" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 space-y-10">
      {/* 標題區 */}
      <div className="space-y-2 border-b border-gray-100 pb-6">
        <Link href="/" className="text-xs font-semibold text-teal-600 hover:text-teal-700 inline-flex items-center gap-1 group">
          <span className="transition-transform group-hover:-translate-x-1">←</span> 返回首頁
        </Link>
        <h1 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
          知識庫博客 <span className="text-teal-600">全部文章</span>
        </h1>
      </div>

      {/* 控制區 */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs py-2 px-4 rounded-xl font-medium transition-all ${
                selectedCategory === cat ? "bg-teal-600 text-white shadow-xs" : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="relative max-w-xs w-full">
          <input
            type="text"
            placeholder="搜尋文章關鍵字..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-xs pl-3 pr-8 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-teal-500 transition-all"
          />
        </div>
      </div>

      {/* 渲染區 */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
          <p className="text-sm font-bold text-gray-900">找不到符合條件的文章</p>
        </div>
      )}
    </div>
  );
}
