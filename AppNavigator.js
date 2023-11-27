// AppNavigator.js
import { createStackNavigator } from 'react-navigation-stack';
import Scanner from './Scanner';
import LoginScreen from './Loginscreen';


const AppNavigator = createStackNavigator(
  {
   
    Scanner: Scanner,
    LoginScreen: LoginScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default AppNavigator;
