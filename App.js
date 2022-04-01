// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreens";
import Onboard from "./screens/Onboard";
import { StatusBar } from "expo-status-bar";
import JobDetail from "./screens/JobDetail";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <React.Fragment>
      <StatusBar style="light" translucent hidden />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Onbording" component={Onboard} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="JobDetail" component={JobDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </React.Fragment>
  );
}

export default App;
