// components/Header.tsx
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link className="block flex items-center" href="/">
          <span className="sr-only">Home</span>
          {/* 2. 替換掉原本的 <svg>，加入 <Image /> */}
          {/* 在 Next.js 中，public 資料夾的內容直接用 "/" 開頭存取即可 */}
          <Image
            src="/image/logo.png"
            alt="Website Logo"
            width={52}
            height={52}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>

        {/* 右側：桌面版選單與手機版選單按鈕 */}
        <div className="flex items-center gap-6">
          {/* 桌面版導航連結 */}
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/"
                >
                  {" "}
                  Home{" "}
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/about"
                >
                  {" "}
                  About{" "}
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/services"
                >
                  {" "}
                  Services{" "}
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/apps"
                >
                  {" "}
                  Online Tools{" "}
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/blog"
                >
                  {" "}
                  Blog{" "}
                </Link>
              </li>
            </ul>
          </nav>

          {/* 手機板選單漢堡按鈕 (僅在行動裝置顯示) */}
          <button className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
