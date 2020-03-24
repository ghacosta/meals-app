import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  headerTitleStyle: {
    fontSize: 18
  }
};

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen
  },
  { defaultNavigationOptions: defaultStackNavOptions }
);

const FavoritesNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
  },
  { defaultNavigationOptions: defaultStackNavOptions }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor
    }
  },
  Favorites: {
    screen: FavoritesNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.secundaryColor
    }
  }
};

const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        shifting: true
        // shifting: false,
        // barStyle: {
        //   backgroundColor: Colors.primaryColor
        // }
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.secundaryColor
        }
      });

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: { drawerLabel: 'Meals' }
    },
    Filters: FiltersNavigator
  },
  {
    contentOptions: {
      activeTintColor: Colors.secundaryColor,
      labelStyle: {
        fontFamily: 'open-sans-bold'
      }
    }
  }
);
export default createAppContainer(MainNavigator);
