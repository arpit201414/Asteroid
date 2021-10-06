import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AsteroiStack from "./src/navigation/asteroidStack";

const App = () => {
  return (
    <NavigationContainer>
      <AsteroiStack />
    </NavigationContainer>
  )
}


export default App;