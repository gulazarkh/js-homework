function calculateAmount() {
    const initialAmount = prompt("Enter the initial deposit amount in AZN:");
    const durationYear = prompt("Enter the deposit duration in years:");
    const annualInterest = prompt("Enter the annual interest rate (%):");

    if (isNaN(initialAmount) || isNaN(durationYear) || isNaN(annualInterest) || initialAmount < 0 || durationYear < 1 || annualInterest < 0) {
        console.log("Invalid input. Please enter valid values.");
        return;
    }

    const newAnnualInterest = annualInterest / 100;
    const finalAmount = initialAmount * Math.pow(1 + newAnnualInterest, durationYear);

    return finalAmount;
}


const finalAmount = calculateAmount();

if (typeof finalAmount === "number") {
    console.log(`The final amount after the deposit expires is ${finalAmount.toFixed(2)} AZN.`);
}
