let number = 0
let numberStatus = ""
let oddOReven = ""

function statusCalculator (number, numberStatus) {

if (number > 0) {
    numberStatus = "positive"
} else if (number === 0) { 
    numberStatus = "zero"
} else {numberStatus = "negative"}

return numberStatus
}

function oddevenCalculator (number, oddOReven){

    if (number % 2 == 0) {
        oddOReven = "par"
    } else {oddOReven = "impar"}

    return oddOReven
}

const status = statusCalculator (number, numberStatus)
const oddOReven = oddevenCalculator (number, oddOReven)

console.log(status)
console.log(oddOReven)



