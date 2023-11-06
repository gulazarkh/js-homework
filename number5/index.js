function findTemperature() {
    const temperatures = [];

    for (let i = 1; i <= 3; i++) {
        const temperature = prompt(`Enter temperature ${i}:`); 
        if (isNaN(temperature)) {
            console.log("Invalid input. Please enter a valid number.");
            return;
        }
        temperatures.push(temperature);
    }

    temperatures.sort((a, b) => b - a);

    console.log("Temperatures in descending order:");
    for (const temperature of temperatures) {
        console.log(temperature);
    }
}

findTemperature();
