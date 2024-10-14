import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import SignInScreen from "./screen/SignInScreen";

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <SignInScreen />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
