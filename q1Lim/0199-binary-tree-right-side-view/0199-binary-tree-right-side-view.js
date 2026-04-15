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
 * @return {number[]}
 */
var rightSideView = function(root) {

    /*
        1. 우선 포인트는..BFS
        2. 각 레벨을 순환하면서, 임시 배열에 push한다.
        3. 임시 배열의 마지막 값을 pop해서 결과값에 push한다.
    */

    if(!root) return [];
    const queue = [root];
    const result = [];

    while(queue.length){

        const levelSize = queue.length;
        const currLevel = [];

        for (let i = 0 ; i < levelSize; i++ ){
            const node = queue.shift();
            currLevel.push(node.val);

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        const lastElement = currLevel.pop();
        result.push(lastElement);
        
    }

    return result;
    
};