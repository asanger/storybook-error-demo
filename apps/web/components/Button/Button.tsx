import { classed } from "@tw-classed/react";
import { ReactNode } from "react";
import { Pressable, Text } from "react-native";

const Button = ({ children }: { children: ReactNode }) => (
  <Pressable>
    <Text>Testing</Text>
  </Pressable>
);

export default Button;
