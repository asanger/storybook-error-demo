module.exports = {
  presets: ["next/babel", "nativewind/babel"],
  plugins: [
    "add-react-displayname",
    "@babel/plugin-transform-modules-commonjs",
    ["react-native-web", { commonjs: true }],
    [
      "inline-dotenv",
      {
        path: ".env",
      },
    ],
  ],
};
