import { createStackNavigator } from "@react-navigation/stack";
import { AlbumScreen, DetailsScreen, HomeScreen } from "../screens";

const Stack = createStackNavigator<MainStackParams>();

export type MainStackParams = {
  Home: undefined;
  Album: {
    artist: string;
    album: string;
  };
  Details: {
    artistName: string;
  };
};

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Album" component={AlbumScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
