import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE } from '../actions/meals';
import { addOrRemoveObjById } from '../../utils/functions';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const updatedFavMeals = addOrRemoveObjById(
        action.mealId,
        state.favoriteMeals,
        state.meals
      );
      return { ...state, favoriteMeals: updatedFavMeals };

      break;

    default:
      return state;
  }
};

export default mealsReducer;
