import { StackScreenProps } from "@react-navigation/stack";

export type AuthStackParamList = {
  Login: undefined
  SignUp: undefined
  ForgotPassword: undefined
  NotFound: undefined
  
  App: undefined
}

export type AppStackParamList = {
  ServerList: undefined
}

export type BottomTabParamList = {
  TabOne: undefined
  TabTwo: undefined
}

export type TabOneParamList = {
  TabOneScreen: undefined
}

export type TabTwoParamList = {
  TabTwoScreen: undefined
}


export interface Container {
  id: string
  names: string[]
  Image: string
  Command: string
  Created: number
  Ports: Array<{
    PrivatePort: number
    PublicPort: number
  }>
  State: string
  Status: string
}