/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    
    /*
        1. magazine의 문자열을 반복문으로 돌리면서 ransomeNote값이 포함되어있는지 확인
        2. ransomNote[i]와 magazine[j]의 값이 같다면 i++해주기
        3. i값과 length의 값이 같다면 true
        4. 정렬을 해주기 위해 split, sort, join을 한번에 썼다
    */
    const sortedRansomNote = ransomNote.split("").sort().join("")
    const sortedMagazine = magazine.split("").sort().join("")
    console.log(sortedMagazine)
    let i = 0;

    for (let j = 0 ; j < sortedMagazine.length; j++){
        if (sortedRansomNote[i] === sortedMagazine[j]){
            i++
        }
    }
    return sortedRansomNote.length === i
};