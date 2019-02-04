const testNums = [1,2,3,4];
function sumFor(nums) {
  let result = 0;
  for (let i = 0; i <= nums.length - 1; i++) {
    result += num;
  }
  return result;
}

function sumWhile(nums) {
  let result = 0;
  let iterator = 0;
  while (iterator <= result){
    result += nums[iterator];
    iterator++;
  }
  return result;
}

function sumRecursion(nums) {
  if(num.length == 0){
    return 0;
  } else {
    return nums[0] += sumRecustion(nums.slice());
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