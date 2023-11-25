/**
 * Site-specific configuration of tailwind values.
 * You can see here that we are also importing from a shared constants file. If there are any configurations that we might need to reference outside of a className, we should define it in our constants and import the object.
 */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontSize: {
        "2xs": "0.625rem", // caption-2
        xs: "0.75rem", // caption-1 and featured-3
        sm: "0.875rem", // body-3 and featured-2
        base: "1rem", // body-2 and featured-1
        lg: "1.125rem", // body-1
        xl: "1.5rem", // title-5
        "2xl": "2rem", // title-4
        "3xl": "2.813rem", // title-3
        "4xl": "3rem", // title-2
        "5xl": "3.5rem", // title-1
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Poppins", "serif"],
      },
      colors: {
        background: {
          "elevation-raised": "#FFFFFF",
          neutral: "#E4E7EE",
          primary: "#183577",
        },
        "primary-blue": "#183577",
        "primary-gray": "#E4E7EEE5",
        "primary-red": "#E23839",
        transparent: "transparent",
        "electric-blue": "#00A3E0",
        "oxford-blue": "#041E42",
        core: {
          neutral: {
            10: "#abc123",
            20: "#abc123",
            30: "#abc123",
            40: "#abc123",
          },
        },
        blue: {
          1: "#1AC1FF",
          2: "#53D0FF",
          3: "#8DE0FF",
          4: "#C6EFFF",
          5: "#183577",
          6: "#006286",
          7: "#00415A",
          8: "#00212D",
        },
        "ruby-red": "#E40046",
        "success-green": "#4FC563",
        "error-red": "#DF1B1E",
        "gulf-light-blue": "#B9D9EB",
        "gulf-orange": "#FF6319",
      },
      opacity: {
        85: ".85",
        45: ".45",
      },
      containers: {
        // @xs	@container (min-width: 20rem /* 320px */)
        // @sm	@container (min-width: 24rem /* 384px */)
        // @md	@container (min-width: 28rem /* 448px */)
        // @lg	@container (min-width: 32rem /* 512px */)
        // @xl	@container (min-width: 36rem /* 576px */)
        // @2xl	@container (min-width: 42rem /* 672px */)
        // @3xl	@container (min-width: 48rem /* 768px */)
        // @4xl	@container (min-width: 56rem /* 896px */)
        // @5xl	@container (min-width: 64rem /* 1024px */)
        // @6xl	@container (min-width: 72rem /* 1152px */)
        // @7xl	@container (min-width: 80rem /* 1280px */)
      },
    },
  },
};
