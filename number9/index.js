function showNumbers() {
    const userNumber = prompt("Enter number");

    if (!isNaN(userNumber) && userNumber !== 0) {
        console.log(`Numbers between 1 and 1000 divisible by ${userNumber}:`);
        for (let i = 1; i <= 1000; i++) {
            if (i % userNumber === 0) {
                console.log(i);
            }
        }
    } else {
        console.log("Invalid input. Please enter valid non-zero number.");
    }
}

showNumbers();
