let n = prompt()

function isPalindrome(n) {
    let compareNum;

    if ( n.length % 2 === 0 ) {
        compareNum = n.length / 2
    } else {
        compareNum = n.length / 2 + 0.5
    }
    
    let k = 0
    for (let i = 0; i < compareNum; i++) {
        let a = n[i]
        let b = n[n.length-i-1]
        if ( a === b ) {
            k += 1
        }
    }

    
    if (k === compareNum) console.log("Палиндром")
    else console.log("Не палиндром")
    console.log(middle)
}


while ( n != '0' ) {
    isPalindrome(n)    
    n = prompt()
}


