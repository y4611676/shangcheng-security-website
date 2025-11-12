'use client'

import { useState } from 'react'
import { scrollToSection } from '@/lib/utils'

/**
 * 導航選單切換 Hook
 */
export function useMenuToggle() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setIsMenuOpen(false)
  }

  return {
    isMenuOpen,
    setIsMenuOpen,
    handleNavClick,
  }
}


