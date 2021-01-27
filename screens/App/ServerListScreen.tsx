import React from 'react';
import styled from 'styled-components/native';


import {Text} from '../../style'
import { AppDrawerParamList } from '../../types';
import { Button } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';

interface Props extends DrawerScreenProps<AppDrawerParamList, 'ServerList'> {
  onLogout: () => void
}

const ServerListScreen: React.FC<Props> = ({onLogout}) =>  {
  return (
    <Wrapper>
      <Main>
        <Title>PlaceHolder Server List</Title>
        <Button
          title="Back"
          onPress={onLogout}
        />
      </Main>
    </Wrapper>
  );
}

export default ServerListScreen


const Wrapper = styled.View`
  background-color:#f4ebf6;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Main = styled.View`
  display: flex;
  align-items: center;

  background-color: #ffffff;
  width: 400px;
  height: 400px;
  margin: 112px auto;
  border-radius: 20px;
  /* box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14); */
  /* font-family: "Ubuntu", sans-serif; */

  @media (max-width: 600px) {
    border-radius: 0;
  }
`

const Title = styled(Text)`
  text-align: center;
  padding-top: 40px;
  color: #8c55aa;
  font-weight: bold;
  font-size: 23px;
  margin-bottom: 50px;
`