const randomNumberBetween = (max) => {
  return (Math.random() * max);
}
const randomNumberBetweenMaxMin = (max, min) => {
  return Math.max(min, randomNumberBetween(max));
}
export {randomNumberBetween, randomNumberBetweenMaxMin}
