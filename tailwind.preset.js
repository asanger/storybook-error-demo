/**
 * Global configuration of tailwind values.
 * You can see here that we are also importing from a shared constants file. If there are any configurations that we might need to reference outside of a className, we should define it in our constants and import the object.
 */
const { colors } = require("./packages/shared/constants/colors");

module.exports = {
  theme: {
    fontSize: {
      sm: "5.8rem",
      base: "5rem",
      xl: "7.25rem",
      "2xl": "9.563rem",
      "3xl": "12.953rem",
      "4xl": "20.441rem",
      "5xl": "30.052rem",
    },
    extend: {
      colors,
      opacity: {
        85: ".85",
        45: ".45",
      },
    },
  },
};
