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
 * @return {number}
 */
var minDepth = function(root) {
    /*
        1. 처음으로 요소를 만나게 된다면 바로 그 depth를 리턴하면 된다.
    */
    if(!root) return 0;
    
    const queue = [root];
    let depth = 1;

    while(queue.length){
        const levelSize = queue.length;
        for (let i = 0 ; i < levelSize; i++){
            const node = queue.shift();

            if(!node.left && !node.right) return depth;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        depth++;
    }
};