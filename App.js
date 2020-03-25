import React from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { enableScreens } from 'react-native-screens';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import MealsNavigator from './navigation/MealsNavigator';
import mealsReducer from './store/reducers/meals';

enableScreens();
const rootReducer = combineReducers({
  meals: mealsReducer
});
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

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
    return this.state.fontLoaded ? (
      <Provider store={store}>
        <MealsNavigator />
      </Provider>
    ) : (
      <AppLoading />
    );
  }
}
