import "../styles.css";
import { useColorScheme } from "nativewind";
import React from "react";
import { useEffect } from "react";
import { View } from "react-native";

const ThemeMap = {
  "#fff": "light",
  "#000": "dark",
  "#50C878": "emerald",
};

export const decorators = [
  (Story, props) => {
    const theme = props.globals.backgrounds?.value
      ? ThemeMap[props.globals.backgrounds?.value] || "dark"
      : "dark";
    const { setColorScheme } = useColorScheme();
    useEffect(() => {
      let active = true;
      if (active) {
      }
      return () => {
        active = false;
      };
    }, [theme, setColorScheme]);
    return (
      <View>
        <Story />
      </View>
    );
  },
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "light",
    values: [
      {
        name: "dark",
        value: "#000",
      },
      {
        name: "light",
        value: "#fff",
      },
      {
        name: "emerald",
        value: "#50C878",
      },
    ],
  },
};

export const globalTypes = {
  themes: {
    defaultValue: ["light", "dark"],
  },
};
