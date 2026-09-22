import Link from "next/link";

// 💡 1. 使用 TypeScript 定義傳入資料的規格（型別）
interface BlogCardProps {
  post: {
    title: string;
    excerpt: string;
    date: string;
    category: string;
    readTime: string;
    slug: string;
  };
}

// 💡 2. 核心：必須在這裡寫 export default function，並在括號內解構接收 { post }
export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="p-6 bg-gray-50/50 border border-gray-100 rounded-2xl hover:bg-white hover:shadow-xs transition-all duration-300 flex flex-col gap-4 group">
      
      {/* 分類、日期、閱讀時間 */}
      <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400">
        <span className="font-semibold text-teal-600 bg-teal-50 px-2 py-0.5 rounded">
          {post.category}
        </span>
        <span>•</span>
        <time>{post.date}</time>
        <span>•</span>
        <span>閱讀時間 {post.readTime}</span>
      </div>

      {/* 文章標題與連結（這裡已經用上了完美的反引號語法！） */}
      <div className="space-y-1">
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>
      </div>

      {/* 閱讀全文連結 */}
      <div className="pt-1">
        <Link 
          href={`/blog/${post.slug}`} 
          className="text-xs font-bold text-teal-600 hover:text-teal-700 inline-flex items-center"
        >
          閱讀完整教學全文 <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>

    </article>
  );
}
