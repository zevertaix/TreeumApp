import React, { useState } from "react";
import { Keyboard, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../theme";
import { Button, InputBase } from "../../components";
import HeadphonesSVG from "../../assets/icons/HeadphonesSVG";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StackParams } from "../../navigation/RootNavigator";

const CREDENTIALS = {
  email: "test@mail.com",
  password: "12345678",
};

const AuthScreen = () => {
  const navigation = useNavigation<NavigationProp<StackParams>>();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onLogin = () => {
    if (email === CREDENTIALS.email && password === CREDENTIALS.password) {
      navigation.navigate("MainStack", { screen: "Home" });
    }
  };

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <Pressable style={{ flex: 1 }} onPress={Keyboard.dismiss}>
        <View style={styles.mainContainer}>
          <View style={styles.logoContainer}>
            <HeadphonesSVG width={120} height={120} />
            <Text style={styles.title}>Log In</Text>
          </View>
          <View style={styles.inputsContainer}>
            <InputBase onChangeText={setEmail} value={email} label="Email" />
            <InputBase
              onChangeText={setPassword}
              value={password}
              label="Password"
              hidden
            />
          </View>
          <Button title="Log In" onPress={onLogin} />
          <Button
            title="Fill credentials"
            basic
            onPress={() => {
              setEmail(CREDENTIALS.email);
              setPassword(CREDENTIALS.password);
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
    fontSize: 34,
    fontWeight: "bold",
    color: colors.text,
  },
  inputsContainer: {
    gap: 24,
  },
  mainContainer: {
    gap: 30,
    paddingVertical: 24,
    paddingHorizontal: 12,
  },
  logoContainer: {
    alignItems: "center",
    gap: 20,
  },
});

export default AuthScreen;
