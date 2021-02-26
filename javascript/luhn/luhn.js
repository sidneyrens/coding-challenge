//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (number) => {
  let cleanNumber = number.replace(/ /g, "");
  if (cleanNumber.length < 2) {
    return false;
  }
  if (isNaN(cleanNumber)) {
    return false;
  }

  var numbersToSum = [];
  let reversedNumbers = cleanNumber.split("").reverse().join("");
  for (let i = 0; i < reversedNumbers.length; i++) {
    if (i % 2 != 0) {
      if (reversedNumbers[i] * 2 > 9) {
        numbersToSum.push(reversedNumbers[i] * 2 - 9);
      } else {
        numbersToSum.push(reversedNumbers[i] * 2);
      }
    } else {
      numbersToSum.push(reversedNumbers[i]);
    }
  }

  let sum = numbersToSum.reduce(
    (a, b) => Number.parseInt(a) + Number.parseInt(b)
  );
  
  return sum % 10 == 0;
};
