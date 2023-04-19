/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // image optimization
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      "spline.design",
      "api.dicebear.com",
      "www.ultraupdates.com",
      "www.agrivi.com",
      "pxhere.com",
      "www.teachoo.com",
      "www.cuttingtechnologies.com",
      "www.sruc.ac.uk",
      "diplomatist.com",
      "www.agrifarming.in",
      "www.fertilizer-machine.net",
      "legacy.eagronom.com",
      "researchleap.com",
      "www.iacharya.in",
      "www.eweek.com",
      "i.pinimg.com",
      "www.sciencenews.org",
      "www.manufacturer.lighting",
      "media.istockphoto.com",
      "img.freepik.com",
      "www.nitorinfotech.com",
      "www.factsoftware.com",
      "tridenstechnology.com",
      "w0.peakpx.com",
    ],
  },
};

module.exports = nextConfig;
