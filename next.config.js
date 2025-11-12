/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // 只在生產環境使用 basePath（用於 GitHub Pages 部署）
  // 開發環境不使用 basePath，避免 404 錯誤
  ...(process.env.NODE_ENV === 'production' && {
    basePath: '/shangcheng-security-website',
  }),
  images: { unoptimized: true },
  trailingSlash: true,
};

module.exports = nextConfig;

