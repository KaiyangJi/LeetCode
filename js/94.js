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
 var inorderTraversal = function(root) {
    var result = [];
    function subInorderTraversal(node) {
        if (!node) {
            return;
        }

        subInorderTraversal(node.left);
        result.push(node.val);
        subInorderTraversal(node.right)
    }
    
    subInorderTraversal(root);

    return result;
};