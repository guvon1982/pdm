import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginScreen from "./screen/LoginScreen";
import ContactScreen from "./screen/ContactScreen";


function App() {
  return (
    <SafeAreaProvider>
      <ContactScreen/>
    </SafeAreaProvider>
  );
}


export default App;