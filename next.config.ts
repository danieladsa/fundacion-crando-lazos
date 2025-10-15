/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 🔹 Esto genera los HTML/CSS/JS estáticos
  images: {
    unoptimized: true, // Si usas next/image
  },
};

module.exports = nextConfig;
