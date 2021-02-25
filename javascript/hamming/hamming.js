//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (left, right) => {
  let hamming = 0;
  if (!right && left) {
    throw new Error(errors.rightEmpty);
  } else if (!left && right) {
    throw new Error(errors.leftEmpty);
  } else if (right.length !== left.length) {
    throw new Error(errors.diflength);
  } else {
    left = left.split("");
    right = right.split("");
    for (let i = 0; i < left.length; i++) {
      if (left[i] !== right[i]) {
        hamming++;
      }
    }
  }
  return hamming;
};

const errors = {
  rightEmpty: "right strand must not be empty",
  leftEmpty: "left strand must not be empty",
  diflength: "left and right strands must be of equal length",
};
