import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  try {
    // 💡 關鍵路徑對齊：因為你的 posts 在 app 目錄下，所以對齊到 "app", "posts"
    const postsDirectory = path.join(process.cwd(), "app", "posts");
    const filePath = path.join(postsDirectory, `${slug}.md`);

    // 讀取實體 Markdown 檔案
    const fileContent = fs.readFileSync(filePath, "utf8");

    // 拆解文章標題、日期與內文
    const { data, content } = matter(fileContent);

    return (
      <article className="max-w-3xl mx-auto py-12 px-4 space-y-8">
        
        {/* 麵包屑導航 */}
        <div className="flex items-center gap-4 text-xs font-semibold">
          <Link href="/" className="text-teal-600 hover:underline">首頁</Link>
          <span className="text-gray-300">/</span>
          <Link href="/blog" className="text-teal-600 hover:underline">技術博客</Link>
          <span className="text-gray-300">/</span>
          <span className="text-gray-400 truncate max-w-[200px]">{data.title}</span>
        </div>

        {/* 文章大標題 */}
        <div className="space-y-4 border-b border-gray-100 pb-6">
          <span className="inline-block bg-teal-50 text-teal-700 text-xs font-bold px-2.5 py-1 rounded-md">
            {data.category}
          </span>
          <h1 className="text-2xl font-black text-gray-900 sm:text-4xl leading-tight">
            {data.title}
          </h1>
          <div className="flex items-center gap-4 text-xs text-gray-400 font-medium">
            <time>發佈日期：{data.date}</time>
            <span>•</span>
            <span>預估閱讀時間：{data.readTime}</span>
          </div>
        </div>

        {/* 💡 核心：將 Markdown 自動轉為漂亮的網頁 HTML */}
        <div className="text-gray-700 text-base leading-relaxed space-y-6 text-justify blog-markdown-content">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>

        {/* 底部按鈕 */}
        <div className="pt-8 border-t border-gray-100">
          <Link href="/blog" className="text-teal-600 hover:text-teal-700 font-bold text-sm inline-flex items-center gap-1 group">
            <span className="transition-transform group-hover:-translate-x-1">←</span> 返回文章列表
          </Link>
        </div>

      </article>
    );
  } catch (error) {
    // 萬一找不到對應的檔案，自動秀出 404
    notFound();
  }
}
