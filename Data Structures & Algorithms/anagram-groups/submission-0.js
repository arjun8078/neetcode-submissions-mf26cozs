class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let seen=new Map()

        for (let word of strs){
            let key=word.split('').sort().join('')

            if(!seen.has(key)){
                seen.set(key,[])
            }
            seen.get(key).push(word)


        }

       return Array.from(seen.values())
    }
}
