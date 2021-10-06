import React from "react";
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetAsteroid from "../screens/getAsteroid";
import AsteroidDetails from "../screens/asteroidDetails";

const Stack = createNativeStackNavigator();


const AsteroiStack = () => {
    return (
        <Stack.Navigator initialRouteName="GetAsteroid">
            <Stack.Screen name="GetAsteroid" component={GetAsteroid} />
            <Stack.Screen name="AsteroidDetails" component={AsteroidDetails} />
        </Stack.Navigator>
    )
}

export default AsteroiStack;