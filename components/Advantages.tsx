export default function Advantages() {
  const advantages = [
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: 'AI 智慧偵測',
      description: '精準辨識異常行為，減少誤報',
      details: '運用最新深度學習技術，能夠自動識別人員、車輛及異常行為，大幅降低誤報率，提升監控效率。',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      ),
      title: '高畫質夜視',
      description: '極低光源下也能清晰成像',
      details: '配備星光級感光元件與紅外線技術，即使在完全黑暗的環境下，也能捕捉清晰的影像畫面。',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      ),
      title: '雲端儲存方案',
      description: '加密儲存影像，資料永不遺失',
      details: '提供安全的雲端備份服務，採用多重加密技術，確保影像資料安全無虞，隨時隨地都能查看。',
      color: 'from-cyan-500 to-cyan-600'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white" id="advantages" aria-labelledby="advantages-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="advantages-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            三大核心優勢
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            結合先進技術與專業服務，打造最可靠的安全防護體系
          </p>
        </header>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
          {advantages.map((advantage, index) => (
            <article
              key={index}
              className="group relative bg-gradient-to-br from-secondary to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              role="listitem"
            >
              {/* Icon */}
              <div className={`inline-block p-4 bg-gradient-to-br ${advantage.color} text-white rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`} aria-hidden="true">
                {advantage.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-primary mb-3">
                {advantage.title}
              </h3>

              {/* Description */}
              <p className="text-accent font-medium text-lg mb-4">
                {advantage.description}
              </p>

              {/* Details */}
              <p className="text-gray-600 leading-relaxed">
                {advantage.details}
              </p>

              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/5 to-transparent rounded-bl-full"></div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-secondary rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-gray-600">客戶滿意度</div>
          </div>
          <div className="p-6 bg-secondary rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">4K</div>
            <div className="text-gray-600">超高畫質</div>
          </div>
          <div className="p-6 bg-secondary rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">免費</div>
            <div className="text-gray-600">現場評估</div>
          </div>
        </div>
      </div>
    </section>
  )
}



