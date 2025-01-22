/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  let result = 0

  let sortedNums = nums.sort((a, b) => a - b)

  for (let i = 0; i < sortedNums.length; i += 2) {
    result += nums[i];
  }

  return result
};