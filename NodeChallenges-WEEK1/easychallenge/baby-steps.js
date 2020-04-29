
var nums = process.argv;
var result = null;

for (var i = 2; i < nums.length; i++)
    result += Number(nums[i]);

console.log(result)

