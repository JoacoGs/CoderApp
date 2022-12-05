import { useFonts } from "expo-font";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";

export default function App() {
  const [fontsLoaded] = useFonts({
    Sono: require("./src/fonts/Sono-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <BottomTabNavigator />;
}
