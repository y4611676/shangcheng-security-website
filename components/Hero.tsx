'use client'

import { scrollToSection } from '@/lib/utils'

export default function Hero() {
  return (
    <section className="pt-16 md:pt-20 bg-gradient-to-br from-secondary via-white to-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full">
              <span className="text-accent font-medium text-sm md:text-base">
                專業弱電系統施工商
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              24 小時
              <br />
              智慧守護
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              專業弱電系統施工商，為家庭與企業提供全方位安全防護解決方案。採用最新 AI 智慧偵測技術，確保每一刻都在守護之下。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection('services')}
                className="px-8 py-4 bg-primary text-white rounded-lg text-lg font-medium hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                了解項目
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-white text-primary border-2 border-primary rounded-lg text-lg font-medium hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                立即詢價
              </button>
            </div>

          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              {/* 夜間監控攝影機圖片 */}
              <img 
                src="/surveillance-night.jpg" 
                alt="上誠通訊監視 - 專業夜間智慧監控系統，AI 即時偵測技術，高畫質成像，24小時守護您的安全"
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
                onError={(e) => {
                  // 如果圖片載入失敗，顯示備用的 SVG 圖示
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-primary/80">
                        <div class="text-center text-white p-8">
                          <svg class="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                          </svg>
                          <p class="text-xl md:text-2xl font-medium">夜間智慧監控</p>
                          <p class="text-sm md:text-base mt-2 opacity-90">AI 即時偵測 · 高畫質成像</p>
                        </div>
                      </div>
                    `;
                  }
                }}
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 md:p-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-accent/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-primary font-bold text-base md:text-lg">專業認證</div>
                  <div className="text-gray-600 text-xs md:text-sm">安全可靠</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


