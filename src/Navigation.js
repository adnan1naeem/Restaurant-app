import React from "react";
import { Colors } from "./Utils/Colors";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "./screens/Authentication/Splash/Splash";
import Login from "./screens/Authentication/Login/Index";
import Welcome from "./screens/Authentication/Welcome/Index";
import ChoseRestaurant from './screens/Restaurant/ChoseRestaurent/Index';
import PaymentScreen from './screens/PaymentScreen'
import AddCard from './screens/AddCard';
import Selected_Restaurant from './screens/Restaurant/Selected_Restaurant/Index'
import OrderDetails from './screens/Checkout/OrderDetail/Index'

import Dev_testing from "../Dev_testing";


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
                <Stack.Screen name="Dev_testing" component={Dev_testing} />
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="ChoseRestaurant" component={ChoseRestaurant} />
                <Stack.Screen name="AddCard" component={AddCard} />
                <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
                <Stack.Screen name="Selected_Restaurant" component={Selected_Restaurant} />
                <Stack.Screen name="OrderDetails" component={OrderDetails} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
