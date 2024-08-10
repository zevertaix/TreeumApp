import React from "react";
import {
  ActivityIndicator,
  ColorValue,
  Dimensions,
  StyleSheet,
  View,
} from "react-native";
import colors from "../../theme";

interface FullScreenLoaderProps {
  size?: number | "large" | "small" | undefined;
  color?: ColorValue | undefined;
}

const styles = StyleSheet.create({
  indicator: {
    position: "absolute",
    top: Dimensions.get("window").height / 2 - 25,
    left: Dimensions.get("window").width / 2 - 25,
    width: 50,
    height: 50,
    zIndex: 10,
  },
});

const FullScreenLoader: React.FC<FullScreenLoaderProps> = ({
  size = "large",
  color = colors.accent,
}) => {
  return (
    <View style={[styles.indicator]}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default FullScreenLoader;
