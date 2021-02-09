import React, {} from 'react';
import { AppStackParamList } from '../../types';
 
import ServerListScreen from './ServerListScreen' 
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';

const Stack = createStackNavigator<AppStackParamList>();

interface Props extends StackScreenProps<AppStackParamList, 'ServerList'> {
  onLogout: () => void;
}

const App:React.FC<Props> = ({ onLogout: handleLogOut }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ServerList">
        { props => 
          <ServerListScreen {...props} onLogout={handleLogOut}/>
        }
      </Stack.Screen>
    </Stack.Navigator>
  );
};


export default App
export {default as ServerListScreen} from './ServerListScreen'