import { CONTACT_INFO, BUSINESS_HOURS } from '@/lib/constants'

// 圖標組件
const PhoneIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const LineIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
)

const EmailIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const AddressIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const contactInfo = [
  { ...CONTACT_INFO.phone, icon: PhoneIcon },
  { ...CONTACT_INFO.line, icon: LineIcon },
  { ...CONTACT_INFO.email, icon: EmailIcon },
  { ...CONTACT_INFO.address, icon: AddressIcon },
]

export default function Contact() {

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/90" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            立即獲得專屬弱電系統解決方案
          </h2>
          <p className="text-white/90 text-lg md:text-xl">
            專業團隊提供免費現場評估，量身打造防護系統
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href={CONTACT_INFO.phone.link}
              className="px-8 py-4 bg-white text-primary rounded-lg text-lg font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block"
            >
              免費諮詢
            </a>
            <a
              href={CONTACT_INFO.line.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-accent text-white rounded-lg text-lg font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block"
            >
              LINE 聯絡
            </a>
          </div>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            const isExternal = info.link.startsWith('http')
            
            return (
              <a
                key={index}
                href={info.link}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-white">
                    <Icon />
                  </div>
                  <div className="flex-1">
                    <div className="text-white/70 text-sm mb-1">{info.label}</div>
                    <div className="text-white font-medium text-base break-words">
                      {info.value}
                    </div>
                  </div>
                </div>
              </a>
            )
          })}
        </div>

        {/* Company Info */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* About */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">關於上誠通訊</h3>
              <p className="text-white/90 leading-relaxed mb-6">
                為家庭與企業打造安心防護的弱電系統施工商。我們擁有專業的技術團隊與豐富的施工經驗，致力於提供最優質的安全防護解決方案。從規劃、施工到維護，全程提供專業服務，讓您的安全無後顧之憂。
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white/20 text-white rounded-full text-sm">
                  專業認證
                </span>
                <span className="px-4 py-2 bg-white/20 text-white rounded-full text-sm">
                  經驗豐富
                </span>
                <span className="px-4 py-2 bg-white/20 text-white rounded-full text-sm">
                  服務優質
                </span>
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">營業時間</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-white/90 pb-3 border-b border-white/20">
                  <span>週一至週五</span>
                  <span className="font-medium">{BUSINESS_HOURS.weekdays}</span>
                </div>
                <div className="flex items-center justify-between text-white/90 pb-3 border-b border-white/20">
                  <span>週六</span>
                  <span className="font-medium text-white/60">{BUSINESS_HOURS.saturday}</span>
                </div>
                <div className="flex items-center justify-between text-white/90 pb-3 border-b border-white/20">
                  <span>週日</span>
                  <span className="font-medium text-white/60">{BUSINESS_HOURS.sunday}</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-accent/20 rounded-lg">
                <p className="text-white/90 text-sm">
                  💡 提供預約制的週末緊急服務，歡迎來電洽詢
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-white/70 text-sm">
            © 2025 上誠通訊監視公司 All rights reserved.
          </p>
          <p className="text-white/60 text-xs mt-2">
            專業弱電系統施工 | 監控系統 | 門禁系統 | 網路工程
          </p>
        </div>
      </div>
    </section>
  )
}



