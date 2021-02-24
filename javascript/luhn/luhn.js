//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (nums) => {
  nums = nums.replace(/\s/g, "");
  let total = 0;

  if (nums.length < 2) {
    return false;
  }

  nums = nums.split("").reverse();
  for (let i = 0; i < nums.length; i++) {
    if (isNaN(nums[i])) {
      return false;
    }
    if (i % 2 !== 0) {
      nums[i] = nums[i] * 2;
      if (nums[i] > 9) {
        nums[i] = nums[i] - 9;
      }
    }
    total += +nums[i];
  }

  if (total % 10 !== 0) {
    return false;
  }
  return true;
};
