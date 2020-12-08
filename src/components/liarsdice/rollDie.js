export const rollDie = (numberOfDie) => {
  let arrayOfDie = [];
  for (let i = 0; i < numberOfDie; i++) {
    arrayOfDie = [...arrayOfDie, Math.floor(Math.random() * 6 + 1)];
  }
  const sortedArrayOfDie = arrayOfDie.sort((a, b) => a-b);
  return sortedArrayOfDie;
};
