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
var levelOrder = function(root) {
    /*
        * traversal : 모든 구간을 순회한다 - 노드를 한번씩 다 탐색한다
        1. 모든 구간을 순회해서 result 배열에 넣는다.

    */ 

    if (!root) return [];

    const result = [];
    const queue = [root];

    while(queue.length){
        
        const levelSize = queue.length;
        // const levelNode = queue.shift();
        const currLevel = [];

        for (let i = 0; i < levelSize ; i++){
            const node = queue.shift();
            currLevel.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);

        }

        result.push(currLevel);
    }

    return result;

};