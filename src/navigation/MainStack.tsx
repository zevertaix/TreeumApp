import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens";

const Stack = createStackNavigator<MainStackParams>();

export type MainStackParams = {
  Home: undefined;
};

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
