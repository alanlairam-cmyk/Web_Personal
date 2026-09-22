export default function AboutPage() {
  // 核心價值資料
  const values = [
    {
      title: "專業技術後盾",
      description: "團隊成員皆具備多年業界 IT 支援與硬體維修經驗，精通各式作業系統除錯與網路架設。",
      icon: "🛠️",
    },
    {
      title: "誠信明碼實價",
      description: "堅持「先檢測、後報價、再維修」的服務原則，絕不臨時加價，讓您每一分錢都花得安心。",
      icon: "📋",
    },
    {
      title: "重視資料隱私",
      description: "在維修與備份過程中，嚴格執行資安保密協議，確保客戶的商業文件與個人隱私絕不外洩。",
      icon: "🔒",
    },
  ];

  // 維修服務流程資料
  const steps = [
    {
      num: "01",
      title: "線上 / 電話諮詢",
      description: "透過 WhatsApp 或電話告訴我們您的設備故障狀況或 IT 需求。",
    },
    {
      num: "02",
      title: "初步診斷與報價",
      description: "工程師進行檢測分析，並在動工前提供完整透明的維修或工程方案報價。",
    },
    {
      num: "03",
      title: "專業維修與測試",
      description: "經您同意後快速動工，修復完成後會進行嚴格的效能與穩定度測試。",
    },
    {
      num: "04",
      title: "完工交付與保固",
      description: "將設備完好交還給您，並針對更換的零件或服務提供相對應的售後保固。",
    },
  ];

  return (
    <div className="space-y-20 py-4">
      {/* 1. 關於我們 - 團隊故事區 */}
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            關於我們的 IT 團隊
          </h1>
          <p className="text-gray-600 leading-relaxed">
            我們是一群對科技充滿熱忱、經驗豐富的 IT 專家。在這個高度依賴網路與電腦的時代，設備一旦發生故障，往往會為生活與工作帶來極大的困擾。
          </p>
          <p className="text-gray-600 leading-relaxed">
            因此，我們致力於提供最即時、最透明且最可靠的電腦維修與 IT 技術支援服務。不論是個人的手提電腦升級，還是中小企業的辦公室網絡規劃，我們都能扮演您最強大的科技後盾，讓您免去繁瑣的技術煩惱，專注於核心業務。
          </p>
        </div>
        {/* 右側裝飾區：可以用一張漂亮的科技感背景替代 */}
        <div className="h-64 md:h-80 bg-teal-600/5 rounded-2xl border border-teal-600/10 flex flex-col items-center justify-center p-8 text-center">
          <span className="text-5xl mb-4">👨‍💻</span>
          <h3 className="text-xl font-bold text-gray-900 mb-2">隨時候命的技術專家</h3>
          <p className="text-gray-500 text-sm max-w-xs">一站式解決所有開不了機、網路斷線、系統崩潰等科技疑難雜症。</p>
        </div>
      </section>

      {/* 2. 核心價值區 */}
      <section className="space-y-12 bg-gray-50/50 -mx-4 px-4 py-12 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 border-y border-gray-100">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">我們的服務承諾</h2>
          <p className="text-gray-500 text-sm">我們深信，優質的服务源於技術，贏在誠信。</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-7xl mx-auto">
          {values.map((val, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-xs">
              <div className="text-2xl mb-4 inline-block p-3 rounded-lg bg-teal-50 text-teal-600">
                {val.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{val.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{val.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. 維修服務流程區（使用 Loop 渲染） */}
      <section className="space-y-12 pb-8">
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">標準服務流程</h2>
          <p className="text-gray-500 text-sm">清晰透明的四個步驟，讓您隨時掌握維修進度。</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-xl bg-white space-y-4 relative overflow-hidden group hover:border-teal-500/40 transition-colors">
              <span className="absolute right-4 top-2 text-5xl font-extrabold text-gray-50/70 group-hover:text-teal-50/50 transition-colors select-none">
                {step.num}
              </span>
              <h3 className="text-lg font-bold text-gray-900 relative z-10">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed relative z-10">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
