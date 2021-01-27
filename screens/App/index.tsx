import React, {} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { RootStackParamList } from '../../types';
 
import ServerListScreen from './ServerListScreen' 
import { StackScreenProps } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
interface Props extends StackScreenProps<RootStackParamList, 'App'> {
  onLogout: () => void;
}

const App:React.FC<Props> = ({ onLogout: handleLogOut }) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="ServerList">
        { props => 
          <ServerListScreen {...props} onLogout={handleLogOut}/>
        }
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};


export default App
export {default as ServerListScreen} from './ServerListScreen'