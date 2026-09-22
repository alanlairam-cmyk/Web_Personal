export default function ServicesPage() {
  // 將核心業務定義為資料陣列
  const itServices = [
    {
      title: "專業電腦維修",
      description: "提供各品牌桌上型電腦與手提電腦的硬體故障檢測、零件更換（如螢幕、鍵盤、電池、風扇）及升級服務（如更換高速度 SSD 或加裝 RAM）。",
      icon: "🔧",
      tags: ["硬體更換", "系統重灌", "硬碟升級"],
    },
    {
      title: "全方位 IT 技術支援",
      description: "解決辦公室或居家各種技術難題。包括 Windows / Mac 系統除錯、惡劣軟體清除、資料備份與還原，以及常用辦公軟體的設定與故障排除。",
      icon: "👨‍💻",
      tags: ["遠端協助", "系統除錯", "資料救援"],
    },
    {
      title: "網路與週邊設備架設",
      description: "提供 Wi-Fi 路由器安裝、網路訊號優化、辦公室區域網路（LAN）規劃，以及印表機、NAS 網路儲存伺服器等週邊設備的連線設定。",
      icon: "🌐",
      tags: ["Wi-Fi優化", "印表機設定", "網路架設"],
    },
    {
      title: "企業年度 IT 外包服務",
      description: "針對中小企業提供客製化的 IT 外包方案。定期進行電腦健康檢查、伺服器維護和資安防護，讓您無須編制專職 IT 人員也能擁有專業技術後盾。",
      icon: "🏢",
      tags: ["定期維護", "資安防護", "企業合作"],
    },
  ];

  return (
    <div className="space-y-12 py-4">
      {/* 頂部標題區 */}
      <div className="text-center md:text-left space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          服務項目 / Our Services
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl">
          我們提供專業、快速且可靠的電腦維修與 IT 技術支援服務，不論是個人用戶還是中小企業，都能為您精準解決各類科技難題。
        </p>
      </div>

      {/* 服務卡片網格 */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {itServices.map((service, index) => (
          <div 
            key={index} 
            className="p-8 bg-white border border-gray-200 rounded-xl shadow-xs transition-all duration-300 hover:shadow-md hover:border-teal-500/40 group flex flex-col justify-between"
          >
            <div>
              {/* 圖標 (Icon) */}
              <div className="inline-flex items-center justify-center text-3xl w-14 h-14 rounded-xl bg-teal-50 text-teal-600 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>

              {/* 服務標題 */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              {/* 服務詳細描述 */}
              <p className="text-gray-600 leading-relaxed text-sm mb-6">
                {service.description}
              </p>
            </div>

            {/* 服務標籤 (Tags) */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-50">
              {service.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex} 
                  className="inline-flex items-center rounded-md bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 group-hover:bg-teal-50 group-hover:text-teal-700 group-hover:ring-teal-700/10 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

