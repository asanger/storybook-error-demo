module.exports = {
  content: [
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./utils/**/*.{ts,tsx}",
    "../../../packages/shared/**/*.{ts,tsx}",
  ],
  important: "html",
  plugins: [require("@tailwindcss/container-queries")],
  presets: [
    // require("../../../tailwind.preset.js"),
    require("./tailwind.preset.js"),
    require("nativewind/tailwind"),
  ],
};
