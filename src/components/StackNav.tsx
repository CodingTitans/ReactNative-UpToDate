import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const StackNav = ({components}: {components: any[]}) => {
  console.log(components);

  return (
    <Stack.Navigator initialRouteName={components[0].displayName}>
      {components.map((c, index) => (
        <Stack.Screen
          key={index}
          name={c.displayName}
          component={c}
          options={{
            headerBackVisible: true,
          }}
        />
      ))}
    </Stack.Navigator>
  );
};

export default StackNav;
