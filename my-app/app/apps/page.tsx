import Link from "next/link";

export default function AppsOverviewPage() {
  const tools = [
    {
      title: "IP 與網絡狀態即時檢測工具",
      description: "一鍵查詢您目前的外部公網 IP 位址、下載速度與網路連線延遲狀態，方便 IT 遠端支援時快速進行網絡故障除錯。",
      icon: "🌐",
      slug: "network-checker",
      badge: "免安裝"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 space-y-8">
      <div className="border-b border-gray-100 pb-6">
        <h1 className="text-3xl font-black text-gray-900 tracking-tight">
          免安裝線上 <span className="text-teal-600">實用小工具箱</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tools.map((tool, index) => (
          <div key={index} className="bg-white border border-gray-200 p-6 rounded-2xl shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="text-3xl p-3 bg-teal-50 rounded-xl text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                {tool.icon}
              </div>
              <h2 className="font-bold text-gray-900 text-lg group-hover:text-teal-600 transition-colors">
                {tool.title}
              </h2>
              <p className="text-xs text-gray-500 leading-relaxed">{tool.description}</p>
            </div>
            <div className="pt-6 border-t border-gray-50 mt-6">
              <Link href={`/apps/${tool.slug}`} className="inline-flex items-center w-full justify-center rounded-xl bg-gray-950 px-4 py-2.5 text-xs font-bold text-white transition-all group-hover:bg-teal-600">
                立即開啟小工具 <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
