/**
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 */

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    var length = 0;
    var arr = [];
    for (var i = 0; i < s.length; i++) {
        arr = [s[i]];
        length = Math.max(arr.length, length);
        for (var j = i+1; j < s.length; j++) {
            if (arr.indexOf(s[j]) === -1) {
                arr.push(s[j]);
            } else {
                length = Math.max(arr.length, length);
                break;
            }
            if (j === s.length -1) {
                length = Math.max(arr.length, length);
            }
        }
    }
    return length;
};