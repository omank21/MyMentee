import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// Import your screen components here
import LoginScreen from "./Components/LoginScreen";
import RegisterScreenMentor from "./Components/RegisterScreenMentor";
import RegisterScreenMentee from "./Components/RegisterScreenMentee";
import TextingPage from "./Components/TextingPage";
import HomeScreen from "./Components/HomeScreen";
import SettingsPage from "./Components/SettingsPage";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="RegisterMentee"
          component={RegisterScreenMentee}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="RegisterMentor"
          component={RegisterScreenMentor}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="TextingPage"
          component={TextingPage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="MainScreen"
          component={MainScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({}) => (
            <MaterialCommunityIcons name="home" size={24} color="black" />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Texting"
        component={TextingPage}
        options={{
          tabBarIcon: ({}) => (
            <MaterialCommunityIcons
              name="comment-text"
              color="black"
              size={24}
            />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Setting"
        component={SettingsPage}
        options={{
          tabBarIcon: ({}) => (
            <MaterialCommunityIcons name="cog" color="black" size={24} />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}
