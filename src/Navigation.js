import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "./screens/Authentication/Splash/Splash";
import Login from "./screens/Authentication/Login/Index";
import Welcome from "./screens/Authentication/Welcome/Index";
import { Colors } from "./Utils/Colors";

const Navigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    contentStyle: {
                        backgroundColor: Colors.white,
                    },
                }}
                initialRouteName="Splash"
            >
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="Login" component={Login} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
