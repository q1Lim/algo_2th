/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    /*
        1. nums 배열을 정렬하기
        2. 배열의 길이에 나누기 2를 한 후 내림 연산을 수행한다.
        3. 배열의 중간값은 무조건 과반수의 값이 될 수 밖에 없기 때문에 해당 값을 return한다.
    */

    nums.sort((a, b) => a -b);
    return nums[Math.floor(nums.length / 2)];

};