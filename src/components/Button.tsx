import React from "react";
import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useTheme } from "@shopify/restyle";

import { Theme, Text } from "./Theme";

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

interface ButtonProps {
  variant: "default" | "primary";
  label?: string;
  onPress: () => void;
  width: number;
}

const Button = ({ variant, label, onPress, width }: ButtonProps) => {
  const theme = useTheme<Theme>();
  const backgroundColor =
    variant === "primary" ? theme.colors.danger : theme.colors.grey;
  const color =
    variant === "primary" ? theme.colors.white : theme.colors.secondary;
  return (
    <RectButton
      {...{ onPress }}
      style={[styles.container, { backgroundColor, width }]}
    >
      <Text variant="button" style={{ color }}>
        {label}
      </Text>
    </RectButton>
  );
};
export default Button;
