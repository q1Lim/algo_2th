/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    /*
        1. 무조건 거꾸로 나열하는 것이 아니라, 레벨 별로 지그재그 나열을 해야한다.
        2. 첫번쨰 레벨 : 역방향 -> 두번째 레벨 : 정방향
        3. leftToRight flag를 둬서 한 레벨의 요소가 레벨 배열에 다 push가 되면 반대로 변경한다.
    */
    
    if(!root) return [];
    const queue = [root];
    const result = [];
    let leftToRight = true;

    while(queue.length){
        const levelSize = queue.length;
        const currLevel = [];
        
        for (let i = 0 ; i < levelSize ; i++){
            const node = queue.shift();

            if (leftToRight){
                currLevel.push(node.val);
            } else {
                currLevel.unshift(node.val);
            }
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);

        }
        result.push(currLevel);
        leftToRight = !leftToRight;
    }
    return result;

};