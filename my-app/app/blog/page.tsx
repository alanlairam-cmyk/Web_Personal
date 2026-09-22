import { getAllPosts } from "../utils/markdownParser";
import BlogListClient from "./BlogListClient";

// 💡 這一頁是 Server Component，負責呼叫掃描器，並把動態陣列傳給前端
export default function BlogPage() {
  const allBlogPosts = getAllPosts(); // 全自動撈出所有實體檔案！

  return <BlogListClient allBlogPosts={allBlogPosts} />;
}
