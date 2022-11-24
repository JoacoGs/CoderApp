import { useFonts } from "expo-font";
import ShopNavigator from "./src/navigation/ShopNavigator";

export default function App() {
  const [fontsLoaded] = useFonts({
    Sono: require("./src/assets/fonts/Sono-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <ShopNavigator />;
}
