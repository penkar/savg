const randomNumberBetween = (max) =>
  (Math.random() * max);

const randomNumberBetweenMaxMin = (max, min) =>
  Math.max(min, randomNumberBetween(max));

export {randomNumberBetween, randomNumberBetweenMaxMin}
