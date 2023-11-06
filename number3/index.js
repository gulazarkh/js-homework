function calculateAmount(name, unitPrice, quantity, participatesInPromotion) {
    const initialAmount = unitPrice * quantity;
    let totalAmount = initialAmount;

    if (quantity >= 5) {
        const quantityDiscount = 0.1 * initialAmount; 
        totalAmount -= quantityDiscount;
    }

    if (participatesInPromotion === 'yes') {
        const promotionDiscount = 0.15 * initialAmount;
        totalAmount -= promotionDiscount;
    }

    return totalAmount;
}

const productName = prompt("Enter product name:");
const unitPrice = prompt("Enter unit price:");
const quantity = prompt("Enter quantity:");
const participatesInPromotion = prompt("Participates in promotion:(yes/no)?");

if ( !isNaN(unitPrice) && !isNaN(quantity) && (participatesInPromotion === 'yes' || participatesInPromotion === 'no')
) {
    const receiptAmount = calculateAmount(productName, unitPrice, quantity, participatesInPromotion);
    console.log(`Total amount for ${quantity} ${productName} is: $${receiptAmount.toFixed(2)}`);
} else {
    console.log("Invalid input. Please enter valid product details.");
}