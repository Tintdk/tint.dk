/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Enables static exports
    reactStrictMode: true,
    images: {
        unoptimized: true, // Deactivates because GitHub Pages doesn't support the Next.js image optimization
      },
  };
  
  export default nextConfig;