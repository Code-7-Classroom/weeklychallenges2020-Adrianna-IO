// MEDIUM: Suppose an array sorted in ascending order
//  is rotated at some pivot unknown to you beforehand.
//   (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// You are given a target value to search. If found 
// in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

// Hint:  Use a function. Use the built in method 
// .indexOf( ) and/or  for loops. Review your lesson 
// on Arrays and use the Resources provided at the
//  end of the lesson to practice to aid in working 
// through this problem.

// Example 1:
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

// Example 2:
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

let nums = [3, 6, 9, 12, 15, 18, 21];
let target = 12;

function findNum(target, nums) {
    //target == 3

  return nums.indexOf(target) // index = position, target = # looking for in array

    // for (var i = 0; i < nums.length; i++) { //do we even need a for loop here?
    //     // if (target === nums.indexOf()) { //target == 3 & nums.indexOf() ==?
    //     //     return target.indexOf();
    //     // }
    // }
}

//you cant use indexOf()!! target == 100
function findNumHardMode(target, nums){
    let answer = null;

    for (var i = 0; i < nums.length; i++) {
        if(target === nums[i])
        {
            return answer;
        } else {
            answer = -1;
        }

        //loop 1 answer@43 = null i = 0 nums[i] = 3 answer@59 = -1
        //loop 2 answer@43 = -1 i = 1 nums[i] = 6 answer@59 = -1
        //loop 3 answer@43 = -1 i = 2 nums[i] = 9 answer@59 = -1
        //loop 4 answer@43 = -1 i = 3 nums[i] = 12 answer@59 = -1
        //loop 5 answer@43 = -1 i = 4 nums[i] = 15 answer@59 = -1
        // -1
        // -1
   
    }

    return answer; //-1
}


console.log(findNum(target, nums));