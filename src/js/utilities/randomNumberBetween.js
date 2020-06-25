export const randomNumberBetween = (max) => (Math.random() * max);

export const randomNumberBetweenMaxMin = (max, min) =>
  Math.max(min, randomNumberBetween(max));
