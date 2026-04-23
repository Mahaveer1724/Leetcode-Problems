const n = 5
const k = 10

const getPermutation = (n, k) => {
    const arr = []
 
    for(let i = 1; i <= n; i++){
        arr.push(i)
    }

    console.log(arr.join(""))

    let r = n-1
    let l = n-2

    function sorting(l, r, arr){
        new_arr = arr.splice(l+1)
        new_arr.sort((a,b) => a-b)
        arr.push(...new_arr)
        return arr
    }

    function Permutation(l, r, arr, k) {
        
        if (k == 1) return arr
        if (l < 0) return arr
        
        if(arr[l] < arr[r]) {
            [arr[r], arr[l]] = [arr[l], arr[r]]
            sorting(l, r, arr)
            k--
            l=n-2
            r=n-1
            return Permutation(l, r, arr, k)
        }
        
        if((r-l) == 1){
            l--;
            r=n-1
            return Permutation(l, r, arr, k)
        }
        else {
            r--
            return Permutation(l, r, arr, k)
        }
    }

    Permutation(l, r, arr, k)

    console.log(arr.join(""))
}

getPermutation(n, k)