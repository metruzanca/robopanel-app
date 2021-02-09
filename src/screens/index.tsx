import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';

import { AuthStackParamList } from '../types';

import NotFoundScreen from './NotFoundScreen';
import {
  LoginScreen
} from './Login';
import App from './App';

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<AuthStackParamList>();

export default function Navigation() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
 
  // TODO implement real log in mechanism
  // aka backend login request (Make sure to send it over https. *Do Not Send Password In Plan Text*) + AsyncStorage. 
  function handleLogin(email:string, pass:string) {
    setIsAuthenticated(true);
  }

  // TODO implement real log out mechanism
  function handleLogout() {
    setIsAuthenticated(false);
  }

  // TODO implement forgot password
  function handleForgotPassword(){}
  // TODO implement sign up
  function handleSignUp(){}

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <Stack.Screen
          name="App"
          options={{
            headerRight: () => <Button onPress={handleLogout} title="Sign Out" />,
          }}
          >
            { props => 
              <App {...props} onLogout={handleLogout}/>
            }
          </Stack.Screen>
        ): (
          <>
            {/* TODO Landing page of sorts of horrizontal cards showing off the app? */}
            <Stack.Screen name="Login" >
              { props =>
                <LoginScreen {...props} onLogin={handleLogin} />
              }
            </Stack.Screen>
            {/* TODO Signup Page */}
            {/* TODO Forgot Password page */}
          </>
        )}
        <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


