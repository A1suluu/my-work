
//================== 1. Two Sum  ==================

// let nums = [2,7,11,15]
// let target = 9

/// 1
// var twoSum = function(nums, target) {
//     let result;
//     for (let i = 0; i < nums.lenght; i++) {
//         if (nums[i] + nums[i] == target){
//             result.push(i)
//             result.push(j)
//             return result
//         }
//     }
//     return result
// };


/// 2
// const twoSum = (nums, targer) => {
//     let storage = {};
    
//     for(let[index,num] of nums.entries())  {
//         if(storage[num] !== undefined)  {
//           return [storage[num], index]; 
//             storage [target - num] = index; 
//         } 
//     }
// };

/// 3 
// var twoSum = function(nums, target) {
//     let storage = {};
  
//     for(let i = 0; i < nums.length; i++) {
//       let numsIndex = nums[i];
//       if(storage[target - numsIndex] !== undefined) {
//         return [storage[target - numsIndex], i];
//       }
//       storage[numsIndex] = i;
//     }
//     return [];
// }
  
// console.log(twoSum([1, 2, 3], 5));


// let nums = 121
// var isPalindrome = function(x) {

//     for (let i = 0; i < nums.length; i++) {
//         let a = nums[i]
//         let b = nums[nums.length-i-1] 
//         if (a == b) {
//             return console.log("true")
//         }
//     }
// };  

// isPalindrome(121)


// var isPalindrome = function(x) {
//     // Base condition
//     if (x < 0) {
//         return false;
//     }
//     // Store the number in a variable
//     let number = x;
//     // This will store the reverse of the number
//     let reverse = 0;
//     while (number > 0) {
//         reverse = reverse * 10 + number % 10;
//         number = parseInt(number / 10);
//     }
//     return x === reverse;
// };




// 3

/* 
функция которая считает числа римскими цифрами

Number	Roman
Numeral	Calculation
1	I	1
2	II	1+1
3	III	1+1+1
4	IV	5-1
5	V	5
6	VI	5+1
7	VII	5+1+1
8	VIII	5+1+1+1
9	IX	10-1
10	X	10
11	XI	10+1
12	XII	10+1+1
13	XIII	10+1+1+1
*/

// let userNum = XIII;
// let num = 0;
// let one = "I";
// let five = "V";
// let ten = "X"

// if(userNum == one) {
//     for(let i = 0; i < userNum; i++ ) {
//         if 
//     }
// }


// 35. Search Insert Position
// var searchInsert = function (nums, target) {

//     for (let index = 0; index < nums.length; index++) {
//       if (target <= nums[index]) {
//         return index;
//       }
//     }
//     return nums.length;
//   };

// var searchInsert = function(nums, target) {
//     nums.indexOf(target);  
//     return nums
// };




//2. Add Two Numbers

/*
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
*/

let l1 = [2,4,3], l2 = [5,6,4]

let result = 0;


//  


