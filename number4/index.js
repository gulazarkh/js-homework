function suggestTable(guests) {
    if (guests <= 2) {
        return "You can seat at small table.";
    } else if (guests <= 4) {
        return "You can seat at medium table.";
    } else if (guests <= 8) {
        return "You can seat at large table.";
    } else {
        return "Sorry, we cannot accommodate a group of more than 8 people at a single table.";
    }
}


const numberOfGuests = prompt("Enter the number of guests:");

if (!isNaN(numberOfGuests) && numberOfGuests > 0) {
    const suggestionOfTable = suggestTable(numberOfGuests);
    console.log(suggestionOfTable);
} else {
    console.log("Invalid input. Please enter a valid number of guests.");
}
