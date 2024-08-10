import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../theme";

const HomeScreen = () => {
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <View style={styles.floatContainer}>
        <Text style={styles.title}>Coming Soon...</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
  },
  title: {
    fontSize: 40,
    fontWeight: "700",
  },
  floatContainer: {
    position: "absolute",
    alignItems: "center",
    gap: 20,
  },
});

export default HomeScreen;
