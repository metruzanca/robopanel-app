import React from 'react';

import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';

import { View } from 'react-native';
import {Text} from '../../style'

interface Props extends StackScreenProps<RootStackParamList, 'ServerList'> {}

const ServerListScreen: React.FC<Props> = ({}) =>  {
  return (
    <View>
      <Text>
        Hello There! // TODO Drawer navigation
      </Text>
    </View>
  );
}

export default ServerListScreen