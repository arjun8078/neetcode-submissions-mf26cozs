class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        let seen=new Map()

        for(let char of nums){

            if(seen.has(char))return true

            seen.set(char)

        }

        return false
    }
}
