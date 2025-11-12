/**
 * 工具函數庫
 */

/**
 * 平滑滾動到指定區塊
 */
export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}


