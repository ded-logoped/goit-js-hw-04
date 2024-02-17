function calcAverageCalories(days) {
  let totalCalories = 0;
  for (const average of days) {
    totalCalories += average.calories;
  }
  return totalCalories / 7;
}
