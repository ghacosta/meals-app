import React from 'react';
import { useSelector } from 'react-redux';
import { View, FlatList, StyleSheet } from 'react-native';
import MealItem from './MealItem';

const MealList = props => {
  const favMeals = useSelector(state => state.meals.favoriteMeals);
  const renderMealItem = itemData => {
    const isFav = favMeals.some(meal => meal.id === itemData.item.id);
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: 'MealDetail',
            params: {
              mealId: itemData.item.id,
              mealTitle: itemData.item.title,
              isFav
            }
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        renderItem={renderMealItem}
        style={styles.flatlist}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  },
  flatlist: {
    width: '100%'
  }
});

export default MealList;
