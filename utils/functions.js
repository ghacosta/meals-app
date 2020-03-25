export const addOrRemoveObjById = (id, arr, arrRef = []) => {
  const existingIndex = arr.findIndex(v => v.id === id);
  let updatedArray;
  if (existingIndex >= 0) {
    updatedArray = [...arr];
    updatedArray.splice(existingIndex, 1);
  } else {
    const value = arrRef.find(v => v.id === id);
    updatedArray = [...arr, value];
  }
  return updatedArray;
};

// val = action.mealId
// arr = state.favoriteMeals
// arrRef = state.meals
