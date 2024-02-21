// Problem
// Write a function getTop2MaxNumbers that takes an array of numbers as input
// and returns an array containing the top two maximum numbers
// from the input array and if there are duplicated numbers, please remove them

// Examples:
// getTop2MaxNumbers([10, 40, 20, 2, 9, 19]) === [40, 20]
// getTop2MaxNumbers([-10, -40, -20, -2, -9, -19]) === [-2, -9]
// getTop2MaxNumbers([10, 40, 20, 2, 40, 9, 19]) === [40, 20]

export const getTop2MaxNumbers = (numbers) => {
   let highest = numbers[0];
   let secondHighest = numbers[0];

   for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > highest) {
        highest = numbers[i];
    }
    else if (numbers[i] > secondHighest && numbers[i] !== highest) {
        secondHighest = numbers[i];
    }
   }

   return [highest, secondHighest]
};
