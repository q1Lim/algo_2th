/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {

    /*
        1. 이중 반복문을 돌려서 같은 문자를 temp에 저장한다.
        2. temp와 s를 비교해서 같으면 true 다르면 false 리턴
        3. 이렇게 풀게 되면 t에 중복 글자가 있다면 temp에 같은 값이 여러번 들어가게 된다.

    const arrS = s.split("");
    const arrT = t.split("");
    const temp = []

    let isSub = true

    for (let i = 0; i < s.length ; i ++){
        for (let j = 0; j < t.length ; j ++){
            if (s[i] === t[j]){
                temp.push(t[j])
            }
        }
    }

    const tempS = temp.join("")
    return s === tempS

    */

    /*
        1. Two Pointer 방식으로 풀어보자
        2. i는 s에서 현재 찾고 싶은 문자 위치 , j는 t를 순서대로 훑는 위치
        3. t의 현재 문자와 s[i]가 같으면 i++
        4. 반복이 끝났을때 i === s.length면 true
    */
    let i = 0

    for (let j = 0 ; j < t.length ; j++){
        if (s[i] === t[j]){
            i++
        }
    }

    return i === s.length;
};