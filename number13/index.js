function getOptimalBanknotes(requestedMoney) {
    const banknotes = [100, 50, 20, 10, 5, 1];
    const banknoteCount = {};

    for (let i = 0; i < banknotes.length; i++) {
        const value = banknotes[i];
        const count = Math.floor(requestedMoney / value );
        
        if (count > 0) {
            banknoteCount[value ] = count;
            requestedMoney -= count * value ;
        }
    }
    return banknoteCount;
}
const requestedMoney = prompt("Enter amount of money in AZN:");
if (!isNaN(requestedMoney) && requestedMoney > 0) {
    const banknoteCount = getOptimalBanknotes(requestedMoney);
    console.log("Optimal banknotes:", banknoteCount);
} else {
    console.log("Invalid input. Please enter valid amount.");
}


