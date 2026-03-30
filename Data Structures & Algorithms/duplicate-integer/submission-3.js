class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        let seen=new Set()

        for(let char of nums){

            if(seen.has(char))return true

            seen.add(char)

        }

        return false
    }
}
