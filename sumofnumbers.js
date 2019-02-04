const testNums = [1,2,3,4];
function sumFor(nums) {
  let result = 0;
  for (let num of nums) {
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

function sumWhile(nums) {
  return _.reduce(nums, function (memo, num) {return memo + num;}, 0);
}

console.log(testNums);

//22:36