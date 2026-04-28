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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {

    if (!root) return false;

    const dfs = (node, sum) => {
        if (!node) return false;

        const currentSum = sum + node.val;

        if (!node.left && !node.right) {
            return currentSum === targetSum;
        }

        return dfs(node.left, currentSum) || dfs(node.right, currentSum);
    }

    return dfs(root, 0);

};