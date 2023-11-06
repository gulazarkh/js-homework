function isShipmentSmallOrNot(length, width, height, weight, distance) {
    return (
        length + width + height <= 150 && length <= 100 &&  width <= 100 &&  height <= 100 && weight <= 10 && distance >= 3 && distance <= 10
    );
}

const shipmentLength = prompt("Enter length of order in cm:");
const shipmentWidth = prompt("Enter width of order in cm:");
const shipmentHeight = prompt("Enter height of order in cm:");
const shipmentWeight = prompt("Enter weight of shipment in kg:");
const deliveryDistance = prompt("Enter delivery distance in km:");

if (!isNaN(shipmentLength) && !isNaN(shipmentWidth) && !isNaN(shipmentHeight) && !isNaN(shipmentWeight) && !isNaN(deliveryDistance)
) {

    const isSmall = isShipmentSmallOrNot(shipmentLength, shipmentWidth, shipmentHeight, shipmentWeight, deliveryDistance);
    
    if (isSmall) {
        console.log("This shipment is small.");
    } else {
        console.log("This shipment is not small.");
    }
} else {
    console.log("Invalid input. Please enter valid measurements and distances.");
}
