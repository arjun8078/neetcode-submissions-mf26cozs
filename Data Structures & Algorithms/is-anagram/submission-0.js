class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        let seens={}

        for (let char of s){
            seens[char]=(seens[char] || 0)+1
        }

        for(let char of t){
           seens[char]=(seens[char] || 0)-1
        }

         // check all zeros
  for(let key in seens) {
    if(seens[key] !== 0) return false
  }

  return true
    }
}
