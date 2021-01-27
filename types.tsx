import { StackScreenProps } from "@react-navigation/stack";

export type RootStackParamList = {
  Root: undefined
  NotFound: undefined
  App: undefined

  Login: undefined
  SignUp: undefined
  ForgotPassword: undefined
}

export type AppDrawerParamList = {
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
