function findSumOfPoints(orderNumber) {
    if (orderNumber <= 0) {
        return 0; 
    }

    let points = 0;
    let firstConst = 1;
    let secondConst = 1;

    for (let i = 1; i <= orderNumber; i++) {
        if (i <= 2) {
            points = 1;
        } else {
            points = firstConst + secondConst;
            firstConst = secondConst;
            secondConst = points;
        }
    }
    return points;
}

const orderNumber = prompt("Enter order number:");

if (!isNaN(orderNumber) && orderNumber > 0) {
    const sumOfPoints = findSumOfPoints(orderNumber);
    console.log(`sum of ${orderNumber} order: ${sumOfPoints}`);
} else {
    console.log("Invalid input. Please enter valid order number");
}


