'use client'

import { useMenuToggle } from '@/hooks/useMenuToggle'

export default function Navbar() {
  const { isMenuOpen, setIsMenuOpen, handleNavClick } = useMenuToggle()

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo & Company Name */}
          <div className="flex-shrink-0">
            <h1 className="text-xl md:text-2xl font-bold text-primary">
              上誠通訊監視公司
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavClick('services')}
              className="text-gray-700 hover:text-primary transition-colors duration-300"
            >
              施工項目
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-gray-700 hover:text-primary transition-colors duration-300"
            >
              聯絡我們
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="px-5 py-2 bg-accent text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              免費諮詢
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="px-5 py-2 bg-primary text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              立即詢價
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => handleNavClick('services')}
                className="text-gray-700 hover:text-primary transition-colors duration-300 text-left py-2"
              >
                施工項目
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="text-gray-700 hover:text-primary transition-colors duration-300 text-left py-2"
              >
                聯絡我們
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="px-4 py-2 bg-accent text-white rounded-lg hover:shadow-lg transition-all duration-300 text-center"
              >
                免費諮詢
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:shadow-lg transition-all duration-300 text-center"
              >
                立即詢價
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}



