
function convertNumber(number) {
    const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const teens = ["", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    if (number < 1 || number > 99) {
        return "Invalid input. Please enter valid two-digit number.";
    }

    if (number === 10) {
        return "ten";
    } else if (number >= 11 && number <= 19) {
        return teens[number - 10];
    } else {
        const tensDigit = Math.floor(number / 10);
        const onesDigit = number % 10;
        return tens[tensDigit] + " " + ones[onesDigit];
    }
}


const numberForm= prompt("Enter two-digit number:");

if (!isNaN(numberForm) && numberForm >= 10 && numberForm <= 99) {
    const textForm = convertNumber(numberForm);
    console.log(`Text Form: ${textForm}`);
} else {
    console.log("Invalid input. Please enter valid two-digit number.");
}
