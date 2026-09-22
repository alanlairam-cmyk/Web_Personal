export default function HomePage() {
  // ...（前面保持不變的 onlineTools 和 blogPosts 資料陣列）...

  // 🎯 新增的 WhatsApp 動態連結變數
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=64127857&text&type=phone_number&app_absent=0`;

  return (
    <div className="space-y-20 py-8 px-4 max-w-7xl mx-auto">
      {/* ─── 🌟 頂部大標題迎賓區 (Hero Section) ─── */}
      <section className="text-center max-w-4xl mx-auto space-y-6 pt-6 pb-12 border-b border-gray-100">
        {/* 頂部精緻小標籤 */}
        <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700 ring-1 ring-inset ring-teal-700/10 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span>
          2026 全港免費線上 IT 技術工具箱 & 知識博客
        </span>

        {/* 🎯 網頁核心 H1 主標題 */}
        <h1 className="text-4xl font-black tracking-tight text-gray-900 sm:text-6xl leading-tight">
          分享最實用的 <span className="text-teal-600 relative inline-block">電腦維修</span> <br className="sm:hidden" /> 與 IT 技術指南
        </h1>

        {/* 副標題描述 */}
        <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          不論是個人手提電腦故障、辦公室網絡不通，還是中小企業 IT 外包，我們在此提供一鍵即用的免安裝線上小工具，並分享最專業的故障除錯知識。
        </p>

        {/* 快速聯絡與動態按鈕 */}
        <div className="pt-4 flex flex-wrap justify-center items-center gap-6">
          {/* 🔗 已將 href 改為 {whatsappUrl} */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-[#20ba56] hover:scale-105"
          >
            💬 WhatsApp 線上急修諮詢
          </a>
          
          <div className="text-left sm:text-center">
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">熱線電話</p>
            <p className="text-xl font-black text-teal-600 tracking-wide">6412 7857</p>
          </div>
        </div>
      </section>

      {/* ...（下方保持不變的 🧰小工具網格區 與 📰技術文章博客區）... */}
    </div>
  );
}
