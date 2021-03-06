const testNums = [1,2,3,4];
function sumFor(nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result += nums[i];
  }
  return result;
}

function sumWhile(nums) {
  let result = 0;
  let iterator = 0;
  while (iterator <= nums.length - 1){
    result += nums[iterator];
    iterator++;
  }
  return result;
}

function sumRecursion(nums) {
  if(nums.length == 0){
    return 0;
  } else {
    return nums[0] += sumRecursion(nums.slice(1, nums.length));
  }
}

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function (memo, num) {return memo + num;}, 0);
}

console.log(testNums);
console.log(sumWhile(testNums));
console.log(sumTheSimpleWay(testNums));
console.log(sumRecursion(testNums));
console.log(sumFor(testNums));

//22:36