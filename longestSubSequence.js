/**
 * Write a function that takes two string s1 and s2 and returns the largest common subsequence
 * of s1 and s2.
 *
 *  "ABAZDC", "BACBAD" => "ABAD"
 *  "AGGTAB", "GXTXAYB" => "GTAB"
 *  "aaaa", "aa" => "aa"
 */

function longestSubSeq(s1, s2, s1StartIdx = 0, s2StartIdx = 0) {
    const results = [];
    for (let s1Idx = s1StartIdx; s1Idx < s1.length; s1Idx++) {
        const s1Char = s1[s1Idx];
        const s2Idx = s2.indexOf(s1Char, s2StartIdx);

        let result = [];
        if (s2Idx !== -1) {
            result.push(s1Char, ...longestSubSeq(s1, s2, s1Idx + 1, s2Idx + 1));
        }

        results.push(result);

    }

    const longest = findLongest(results);
    return longest.join('');
}

function findLongest(arr) {
    let longest = [];

    for (let candidate of arr) {
        if (candidate.length > longest.length) {
            longest = candidate;
        }
    }

    return longest;
}

console.log(longestSubSeq("ABAZDC", "BACBAD"));
console.log(longestSubSeq("AGGTAB", "GXTXAYB"));
console.log(longestSubSeq("aaaa", "aa"));