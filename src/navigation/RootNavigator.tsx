import { createStackNavigator } from "@react-navigation/stack";
import MainStack, { MainStackParams } from "./MainStack";
import { AuthScreen } from "../screens";
import { NavigatorScreenParams } from "@react-navigation/native";

const Stack = createStackNavigator<StackParams>();

export type StackParams = {
  Auth: undefined;
  MainStack: NavigatorScreenParams<MainStackParams>;
};

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Auth"
    >
      <Stack.Screen
        name="Auth"
        component={AuthScreen}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen name="MainStack" component={MainStack} />
    </Stack.Navigator>
  );
};
