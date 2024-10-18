console.log('parole palindrome')

const userWord = prompt('Inserire una parola')
//console.log(userWord)

// rendere la parola tutta in misuscolo

const lowerUserWord = userWord.toLocaleLowerCase()
//console.log(lowerUserWord)



// creare la parola invertita 


/*  // ============ DA CAPIRE PERCHE' NON FUNZIONA ===========================
function wordReverse(text) {
    let newText = ''
    for ( let i = 0; i < text.lenght ; i++){
        newText += text.at(-i -1)
    }

    return newText

}

const reversedWord = wordReverse( lowerUserWord)
console.log(reversedWord)

*/


function stringReverse(text) {
	let newText = ''
	for (let i = 0; i < text.length; i++) {
		newText += text.at(-i - 1)
	}

	return newText

}

const reversedText = stringReverse(lowerUserWord) // string

//controllare se la parola invertita è uguale a quella inserita trasformata in minuscolo 

let result =`La parola ${userWord} non è palindroma`

if(reversedText === lowerUserWord){
    result = `La parola ${userWord}  è palindroma`
}


// stampare il risultato

console.log(result)

