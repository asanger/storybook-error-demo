import { join, dirname } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: ["../components/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    {
      name: "@storybook/addon-react-native-web",
      options: {
        modulesToTranspile: ["web", "shared"],
      },
    },
  ],
  core: {
    builder: "webpack5",
  },
  framework: {
    name: getAbsolutePath("@storybook/nextjs"),
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
