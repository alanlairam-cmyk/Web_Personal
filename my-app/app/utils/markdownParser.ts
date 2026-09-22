import fs from "fs";
import path from "path";
import matter from "gray-matter";

// 💡 定義文章的結構規格
export interface BlogPost {
  title: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  slug: string;
}

// 🎯 核心功能：全自動掃描 app/posts 資料夾並回傳所有文章陣列
export function getAllPosts(): BlogPost[] {
  const postsDirectory = path.join(process.cwd(), "app", "posts");
  
  // 1. 讀取該資料夾下的所有檔名 (例如: ['article1.md', 'article2.md'])
  const fileNames = fs.readdirSync(postsDirectory);
  
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md")) // 確保只讀取 .md 檔案
    .map((fileName) => {
      // 移除結尾的 ".md" 來當作網址的 slug
      const slug = fileName.replace(/\.md$/, "");

      // 讀取實體檔案內容
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // 使用 gray-matter 解析 Frontmatter
      const { data } = matter(fileContents);

      // 組合回傳單一文章物件
      return {
        slug,
        title: data.title || "未命名文章",
        date: data.date || "",
        category: data.category || "未分類",
        readTime: data.readTime || "1 分鐘",
        excerpt: data.excerpt || "",
      };
    });

  // 🌟 依照日期排序（最新的文章排在最前面）
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}
