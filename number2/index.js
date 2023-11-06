
 

function calculateCost() {
    const distance = prompt("Enter distance in kilometers:");

    if (isNaN(distance)) {
        return "Invalid input. Please enter valid distance in kilometers.";
    }

    const fixed = 5; 
    const PerKm = 0.25; 

    const total = fixed + distance * PerKm;
    return total;
}

const cost = calculateCost();

if (typeof cost === "string") {
    console.log(total);
} else {
    console.log(`Cost of delivery is ${cost} AZN.`);
}





 
    