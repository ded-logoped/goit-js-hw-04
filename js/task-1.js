function isEnoughCapacity(products, containerSize) {
  let total = 0;
  const values = Object.values(products);

  for (const key of values) {
    total += key;
  }
  if (total <= containerSize) {
    return true;
  }
  return false;
}
