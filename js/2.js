/**
 * 两数相加
 * 
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

    请你将两个数相加，并以相同形式返回一个表示和的链表。

    你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/add-two-numbers
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
    var remainder = 0;

    function calc(sub1, sub2) {
        if (sub1 || sub2) {
            var value1 = (sub1 && sub1.val) || 0;
            var value2 = (sub2 && sub2.val) || 0;
            var val = (value1 + value2 + remainder) % 10;
            remainder = parseInt((value1 + value2 + remainder) / 10);

            sub1 = (sub1 && sub1.next) || null;
            sub2 = (sub2 && sub2.next) || null;

            console.log('value1', value1);
            console.log('value2', value2);
            console.log('remainder', remainder);
            console.log('val', val);
            console.log('sub1', sub1);
            console.log('sub2', sub2);

            return new ListNode(val, calc(sub1, sub2));
        } else {
            console.log('进入这里');
            if (remainder) {
                return new ListNode(remainder, null);
            }
            return null;
        }
    }

    return calc(l1, l2);
};

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

var a1 = { val: 2, next: { val: 4, next: { val: 3, next: null } } };
var a2 = { val: 5, next: { val: 6, next: { val: 4, next: null } } };

console.log(addTwoNumbers(a1, a2));
