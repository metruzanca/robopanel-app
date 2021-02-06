import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';


import {Text} from '../../style'
import { AppStackParamList } from '../../types';
import useServers from '../../hooks/useServers';
import { View } from '../../components/Themed';

interface Props extends StackScreenProps<AppStackParamList, 'ServerList'> {
  onLogout: () => void
}

const ServerListScreen: React.FC<Props> = ({onLogout}) =>  {
  const {
    createServer, servers, start, refresh
  } = useServers()

  useEffect(() => {
    setTimeout(() => {
      refresh()
    }, 1000)
  })

  return (
    <Wrapper>
      <Title>PlaceHolder Server List</Title>
      <Button
        title="Logout"
        onPress={onLogout}
      />
      <Button
        title="Create Server"
        onPress={createServer}
      />
        <Button
        title="Start Server"
        onPress={start}
      />
      <List>
        {servers.map((s, i) => (
          <View key={i}>
            <Text>Fuck</Text>
          </View>
        ))}
      </List>
    </Wrapper>
  );
}

export default ServerListScreen


const Wrapper = styled.View`
  background-color:#ffffff;
  height: 90vh;
`

const Title = styled(Text)`
  text-align: center;
  padding-top: 40px;
  color: #8c55aa;
  font-weight: bold;
  font-size: 23px;
  margin-bottom: 50px;
`

const List = styled(View)`
  display: flex;
  justify-content: center;
  margin: 1em 1em;
`