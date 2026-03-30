class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const seen=new Map()

        for(let i=0;i<nums.length;i++){
            const k=target-nums[i]
            if(seen.has(k)){
                return [seen.get(k),i]
            }
            seen.set(nums[i], i);
        }
    }
}
