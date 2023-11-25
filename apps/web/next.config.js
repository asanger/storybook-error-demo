module.exports = {
  transpilePackages: ["react-native", "shared", "nativewind", "react-native-svg"],
  webpack: (config) => {
    config.resolve.extensions = [".web.js", ".web.ts", ".web.tsx", ...config.resolve.extensions];
    return config;
  },
};
