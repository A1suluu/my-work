function isPalindrome(n) {
    let middle;

    if ( n.length % 2 === 0 ) {
        middle = n.length / 2
    } else {
        middle = n.length / 2 + 0.5
    }
    
    let k = 0
    for (let i = 0; i < middle; i++) {
        let a = n[i]
        let b = n[n.length-i-1]
        if ( a === b ) {
            k += 1
        }
    }

    
    if (k === middle){
        console.log("Палиндром")
        
        let result = n.slice(0,-1);
        console.log(result);
    } 
    else console.log("Не палиндром")
}


let n = "non"
isPalindrome(n)    
 





// функция которая сравничает значение слова и находит максимальный не палиндром из числа



