function recievesDiscountOrNot(name, age, numOrders, totalAmount) {
    const regularCustomer = numOrders >= 4 && totalAmount >= 100;
    const customer = age > 60;

    return regularCustomer || customer;
}


const customerName =prompt("Enter name") ;
const age = prompt("Enter age");
const numberOfOrders = prompt("Enter number of order");
const amountOfOrder = prompt("Enter total among");

const recievesDiscount = recievesDiscountOrNot(customerName, age, numberOfOrders, amountOfOrder);
if (recievesDiscount) {
    console.log(`${customerName} receives discount.`);
} else {
    console.log(`${customerName} does not receives discount.`);
}
