import React from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";
import colors from "../../theme";

interface IButton {
  title: string;
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  basic?: boolean;
}

const Button = ({
  title,
  onPress,
  containerStyle,
  basic,
  labelStyle,
}: IButton) => {
  return (
    <Pressable
      style={[
        styles.container,
        basic && { backgroundColor: "transparent", paddingVertical: 0 },
        containerStyle,
      ]}
      onPress={onPress}
    >
      <Text
        style={[styles.label, basic && { color: colors.accent }, labelStyle]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.accent,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
  },
  label: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default Button;
