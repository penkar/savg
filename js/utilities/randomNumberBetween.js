// @flow
const randomNumberBetween = (max: number): number =>
  (Math.random() * max);

const randomNumberBetweenMaxMin = (max: number, min: number): number =>
  Math.max(min, randomNumberBetween(max));

export {randomNumberBetween, randomNumberBetweenMaxMin}
