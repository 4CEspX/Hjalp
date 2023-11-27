// AppNavigator.js
import { createStackNavigator } from 'react-navigation-stack';
import Scanner from './Scanner';
import LoginScreen from './LoginScreen';


const AppNavigator = createStackNavigator(
  {
   
    Scanner: Scanner,
    LoginScreen: LoginScreen,
  },
  {
    initialRouteName: 'LoginScreen',
  }
);

export default AppNavigator;
