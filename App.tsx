import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faCog, faInfoCircle, faUser } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Home from './src/pages/Home';
import News from './src/pages/News';
import Preference from './src/pages/Preference';
import About from './src/pages/About';
import Profile from './src/pages/Profile';
import Article from './src/pages/Article';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="News Feed" component={Home} />
      <Stack.Screen name="News" component={News} />
      <Stack.Screen name="Article" component={Article} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: IconProp = faHome;

            if (route.name === 'Home') {
              iconName = faHome;
            } else if (route.name === 'Preference') {
              iconName = faCog;
            } else if (route.name === 'About') {
              iconName = faInfoCircle;
            } else if (route.name === 'Profile') {
              iconName = faUser;
            }

            return <FontAwesomeIcon icon={iconName} color={color} size={15} />;
          },
          tabBarLabelStyle: {
            fontSize: 10,
            padding:5
          },
          tabBarStyle: {
            display: 'flex',
            padding:10
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Preference" component={Preference} />
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
