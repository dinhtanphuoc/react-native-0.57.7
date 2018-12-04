import {
  createAppContainer,
  createStackNavigator
} from 'react-navigation';
import Home from '../screens/Home';
import Friends from '../screens/Friends';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Friends: { screen: Friends }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
