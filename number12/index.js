function findSumOfDigits(individualCode) {
    let sum = 0;
    individualCode = Math.abs(individualCode);

    while (individualCode > 0) {
        sum += individualCode % 10; 
        individualCode = Math.floor(individualCode / 10); 
    }

    return sum;
}

const userCode = prompt("Enter individual code:");
const sumOfDigits = findSumOfDigits(userCode);
console.log(`Sum of digits of individual code: ${sumOfDigits}`);

