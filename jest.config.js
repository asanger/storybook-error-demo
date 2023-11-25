const {
    getWebPreset,
    getIOSPreset,
    getAndroidPreset,
  } = require("jest-expo/config");
  
  function getJestConfig(preset, platform) {
    return {
      ...preset,
      modulePaths: ["<rootDir>/packages/mobile", "<rootDir>/packages/shared", "<rootDir>/packages/web"],
    };
  }
  
  module.exports = {
    projects: [
      getJestConfig(getWebPreset(), "web"),
      getJestConfig(getIOSPreset(), "ios"),
      getJestConfig(getAndroidPreset(), "android"),
    ],
  };
  