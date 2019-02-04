const testNums = [1,2,3,4];
function sumFor(nums) {
  let result = 0;
  for (let i = 0; i <= nums.length; i++) {
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
}

function sumRecursion(nums, iterator,result) {
  if(iterator == nums.length){
    return result;
  } else {
    return sumRecursion(nums, iterator++, result += nums[iterator]);
  }
}

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function (memo, num) {return memo + num;}, 0);
}

console.log(testNums);
console.log(sumWhile(testNums));
console.log(sumTheSimpleWay(testNums));
console.log(sumRecursion(testNums));
console.log(sumFor(testNums,0,0));

//22:36