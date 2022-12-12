import { useFonts } from "expo-font";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";
import { Provider } from "react-redux";
import store from "./src/store";

export default function App() {
  const [fontsLoaded] = useFonts({
    Sono: require("./src/fonts/Sono-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <BottomTabNavigator />
    </Provider>
  );
}
