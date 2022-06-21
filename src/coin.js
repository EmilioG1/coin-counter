const coinArray = [];

export const coinChange = (x) => {
  const amount = x * 100;
  // base case
  if (isNaN(x)) {
    return;
  }
  if (x === 0) {
    return coinArray;
    // recursion
  } else if (Math.round(amount - 25) >= 0) {
    coinArray.push(.25);
    return coinChange(x - .25);
  } else if (Math.round(amount - 10) >= 0) {
    coinArray.push(.10);
    return coinChange(x - .10);
  } else if (Math.round(amount - 5) >= 0) {
    coinArray.push(.05);
    return coinChange(x - .05);
  } else if (Math.round(amount - 1) >= 0) {
    coinArray.push(.01);
    return coinChange(x - .01);
  }
  return coinArray;
};

export const typeTally = coinArray.reduce(function(coinTally, coin) {
  coinTally[coin] = (coinTally[coin] || 0) + 1;
  return coinTally;
}, {});

