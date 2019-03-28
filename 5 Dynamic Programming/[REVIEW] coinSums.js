/*
Given types of coins return the unique ways to make change (order doesn't matter, combinations do)
*/

/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

var makeChange = function(total) {
  var count = 0;
  var coins = [1, 2, 5, 10, 20, 50, 100, 200];

  var changer = function(index, value){
    // value of the current coin to be handled
    var currentCoin = coins[index];
    // base case when you hit the end of the coins array
    if(index === 0){
      // increase count when value % coin === 0
      if( value % currentCoin === 0){
        count++;
      }
      // return out of the recursive call
      return;
    }

    // while there is still value left
    while(value >= 0){
      // call changer on the coin below (index decreases), and pass current value
      changer(index-1, value);
      // decrease value by currentcoin amount
      value -= currentCoin;
      // if value still remains, it will run this while loop again
        // initializing a new call of changer function, subtracting value
        // it's creating a branching recursive function
    }
  }
  // initial call to changer
  changer(coins.length-1, total);
  return count;
};

console.log(makeChange(5))