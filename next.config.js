/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // 使用自訂域名 shangchengsecurity.com，不需要 basePath
  // 如果部署在 GitHub Pages 子路徑（如 username.github.io/repo-name），才需要設定 basePath
  images: { unoptimized: true },
  trailingSlash: true,
};

module.exports = nextConfig;

