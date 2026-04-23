class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let seen=new Set(nums)
        
        let max=0

        for(let char of nums){

            if(!seen.has(char-1)){
                let current=char
                let length=1
            

            while(seen.has(current+1)){
                current ++;
                length++
            }

            max=Math.max(max,length)
        }
        }
     return max
      

    }
   
}
