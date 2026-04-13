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
var averageOfLevels = function(root) {
    /*
        1. BFS (너비 우선 탐색)으로 접근하기
        2. level의 sum을 구해서 노드의 길이만큼 나눠 평균을 낸다.
    */

    const result = [];
    const queue = [[root]];

    while(queue.length){
        const queueNodes = queue.shift();
        const nextNodes = [];
        let levelSum = 0;

        for (const currNode of queueNodes){
            levelSum += currNode.val;
            if (currNode.left) nextNodes.push(currNode.left);
            if (currNode.right) nextNodes.push(currNode.right);
        }

        result.push(levelSum / queueNodes.length);
        if (nextNodes.length) queue.push(nextNodes);
    }

    return result;
};