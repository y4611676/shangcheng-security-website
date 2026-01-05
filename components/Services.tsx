'use client'

import { scrollToSection } from '@/lib/utils'

export default function Services() {
  const services = [
    {
      title: '網路工程',
      description: '提供企業級網路佈線、光纖施工、無線網路規劃等完整網路架設服務。',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      features: ['結構化佈線', '光纖網路', '無線覆蓋']
    },
    {
      title: '廣播系統',
      description: '公共廣播、緊急廣播、背景音樂系統規劃與安裝，音質清晰穩定。',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m0 0a5 5 0 007.072 0m-7.072 0l-2.828-2.829m9.9-2.828a9 9 0 00-12.728 0" />
        </svg>
      ),
      features: ['公共廣播', '緊急通知', '背景音樂']
    },
    {
      title: '保全系統',
      description: '紅外線感應、玻璃破碎偵測、瓦斯偵測等全方位保全防護設備。',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      features: ['入侵偵測', '火災警報', '異常通知']
    },
    {
      title: '刷卡門禁',
      description: '智慧門禁管理系統，支援 RFID、生物辨識、遠端控制等功能。',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
      features: ['卡片門禁', '指紋辨識', '遠端管理']
    },
    {
      title: '監控系統',
      description: 'IP 攝影機、類比監控、4K 高畫質錄影，提供完整監視解決方案。',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      features: ['IP 監控', '夜視功能', '遠端觀看']
    },
    {
      title: '電話總機',
      description: '企業電話系統建置、總機安裝、VoIP 電話系統整合服務。',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      features: ['總機系統', 'VoIP', '分機管理']
    },
    {
      title: '對講機系統',
      description: '大樓對講機、社區管理系統、訪客管理，打造智慧社區環境。',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      features: ['影像對講', '訪客管理', '遠端開門']
    },
    {
      title: '全弱電系統',
      description: '整合式弱電系統規劃，包含通訊、監控、消防、廣播等全方位解決方案。',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      features: ['整合規劃', '系統整合', '一站服務']
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-secondary via-white to-secondary" id="services" aria-labelledby="services-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="services-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            專業弱電系統施工項目
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            提供全方位弱電系統工程服務，滿足通訊與安全需求
          </p>
        </header>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8" role="list">
          {services.map((service, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-accent/20"
              role="listitem"
              itemScope
              itemType="https://schema.org/Service"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent text-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-primary mb-3" itemProp="name">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4" itemProp="description">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2" aria-label={`${service.title}特色`}>
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 text-accent mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            需要專業建議？
          </h3>
          <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
            我們提供免費現場評估與專業諮詢服務，為您量身打造最適合的安全防護方案
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-primary text-white rounded-lg text-lg font-medium hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              免費諮詢
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-accent text-white rounded-lg text-lg font-medium hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              立即詢價
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}


