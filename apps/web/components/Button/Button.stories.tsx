import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";

// Because I am importing this from my local workspace, it works!
import { Button } from "./";

const meta = {
  title: "Components/Buttons",
  decorators: [
    (Story) => (
      <View className="flex items-start">
        <Story />
      </View>
    ),
  ],

  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard = {
  args: { children: "Test" },
  render: (args) => <Button {...args} />,
} satisfies Story;

export const Standard2 = {
  ...Standard,
  args: { children: "Test" },
  render: (args) => <Button {...args} />,
} satisfies Story;
