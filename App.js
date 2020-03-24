import React from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { enableScreens } from 'react-native-screens';

import MealsNavigator from './navigation/MealsNavigator';

enableScreens();

export default class App extends React.Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return this.state.fontLoaded ? <MealsNavigator /> : <AppLoading />;
  }
}
