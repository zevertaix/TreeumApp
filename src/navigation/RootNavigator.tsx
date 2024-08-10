import { createStackNavigator } from "@react-navigation/stack";
import MainStack, { MainStackParams } from "./MainStack";
import { AuthScreen } from "../screens";
import { NavigatorScreenParams } from "@react-navigation/native";

const Stack = createStackNavigator<StackParams>();

export type StackParams = {
  Auth: undefined;
  MainStack: NavigatorScreenParams<MainStackParams>;
};

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
      initialRouteName="Auth"
    >
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="MainStack" component={MainStack} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
