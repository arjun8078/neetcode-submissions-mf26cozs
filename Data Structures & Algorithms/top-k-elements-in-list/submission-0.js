class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        const freq=new Map()

        for(let num of nums){
            freq.set(num,(freq.get(num)|| 0)+1)
        }
        let arr=Array.from(freq.entries())
        let sorted=arr.sort((a,b)=>b[1]-a[1])

        return sorted.slice(0,k).map(item=>item[0])

    }
}
