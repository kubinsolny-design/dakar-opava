import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: { remotePatterns: [{ protocol: "https", hostname: "www.dakar-opava.cz", pathname: "/storage/**" }] },
  async redirects() {
    return [
      { source: "/kontakt.html", destination: "/kontakt", permanent: true },
      { source: "/dodavky.html", destination: "/sluzby/doprava", permanent: true },
      { source: "/klasika.html", destination: "/sluzby/doprava", permanent: true },
      { source: "/sola-do-6-5t.html", destination: "/sluzby/doprava", permanent: true },
      { source: "/lowdeck.html", destination: "/sluzby/doprava", permanent: true },
      { source: "/tandemove-soupravy.html", destination: "/sluzby/doprava", permanent: true },
      { source: "/o-nas", destination: "/o-spolecnosti", permanent: true }
    ];
  }
};
export default nextConfig;

