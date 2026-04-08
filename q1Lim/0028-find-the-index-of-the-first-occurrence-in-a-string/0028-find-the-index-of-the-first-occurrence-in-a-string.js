/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    /* 
        needle의 문자열 개수만큼 묶어서 같은 것이 있는지 확인한다
        needle의 length만큼 잘라서 문자열을 만든 후 비교할 문자열이 needle과 동일한지 확인
        있으면 그 문자열의 index를 반환
    */ 
    
    for (let i = 0 ; i <= haystack.length - needle.length ; i++){
        const compareStr = haystack.slice(i, i + needle.length)
        if (compareStr === needle){
            return i
        }
    }
    return -1
};