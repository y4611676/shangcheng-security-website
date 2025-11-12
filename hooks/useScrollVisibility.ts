'use client'

import { useState, useEffect } from 'react'

/**
 * 監聽滾動位置，返回是否應該顯示按鈕
 */
export function useScrollVisibility(threshold: number = 300) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > threshold)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [threshold])

  return isVisible
}


