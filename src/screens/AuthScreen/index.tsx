import React, { useState } from "react";
import { Keyboard, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../theme";
import { Button, InputBase } from "../../components";
import HeadphonesSVG from "../../assets/icons/HeadphonesSVG";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StackParams } from "../../navigation/RootNavigator";

const AuthScreen = () => {
  const navigation = useNavigation<NavigationProp<StackParams>>();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <Pressable style={{ flex: 1 }} onPress={Keyboard.dismiss}>
        <View
          style={{
            gap: 30,
            paddingVertical: 24,
            paddingHorizontal: 12,
          }}
        >
          <View style={{ alignItems: "center", gap: 20 }}>
            <HeadphonesSVG width={120} height={120} />
            <Text
              style={{ fontSize: 34, fontWeight: "bold", color: "#040A2C" }}
            >
              Log In
            </Text>
          </View>
          <View style={{ gap: 24 }}>
            <InputBase onChangeText={setEmail} value={email} label="Email" />
            <InputBase
              onChangeText={setPassword}
              value={password}
              label="Password"
              hidden
            />
          </View>
          <Button
            title="Log In"
            onPress={() => {
              navigation.navigate("MainStack", { screen: "Home" });
            }}
          />
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 12,
    gap: 30,
  },
  title: {
    fontSize: 40,
    fontWeight: "700",
  },
});

export default AuthScreen;
