console.log('pari e dispari')

const userChoise = prompt(' scegliere pari o dispari ')

const userNumber = parseInt(prompt('INSERISCI UN NUMERO DA 1 A 5 '))
console.log(userNumber)



// funzione per generare un numero random 
const maxNumber = 5

function randomIntFromOneTo(max) {
	const randomInt = Math.floor(Math.random() * max) + 1
    
    	return randomInt
     }
    
const aiNumber = randomIntFromOneTo(maxNumber)
console.log(aiNumber)
    
// funzione per capire se un numero è pari 


function isEven(n) {
 	const resto = n % 2
 	
 	if (resto === 0) {
 		return true
 	} 
	
    return false
 	
 }

 let esito = ''

 if (userChoise === 'pari'){

    if (isEven(userNumber) ^ isEven(aiNumber)){
        esito = ` ${userNumber} + ${aiNumber} è dispari, quindi HAI PERSO `

    } else{
        esito = ` ${userNumber} + ${aiNumber} è pari, quindi HAI VINTO `
    }


 } else {
    
    if (isEven(userNumber) ^ isEven(aiNumber)){
        esito = ` ${userNumber} + ${aiNumber} è dispari, quindi HAI VINTO `

    } else{
        esito = ` ${userNumber} + ${aiNumber} è pari, quindi HAI PERSO `
    }

 }
 console.log(esito)




