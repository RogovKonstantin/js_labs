function calculateTotalPrice(num, type, day) {
    const prices = {
        "Students": {"Friday": 8.45, "Saturday": 9.80, "Sunday": 10.46, "discount": 0.85, "freeStays": 0},
        "Corporate": {"Friday": 10.90, "Saturday": 15.60, "Sunday": 16, "discount": 1, "freeStays": 10},
        "Regular": {"Friday": 15, "Saturday": 20, "Sunday": 22.50, "discount": 0.95, "freeStays": 0}
    };
    
    let pricePerPerson = prices[type][day];
    let totalPrice = num * pricePerPerson;

    if (type === "Students" && num >= 30) {
        totalPrice *= prices[type].discount;
    } else if (type === "Corporate" && num >= 100) {
        totalPrice -= prices[type].freeStays * pricePerPerson;
    } else if (type === "Regular" && num >= 10 && num <= 20) {
        totalPrice *= prices[type].discount;
    }

    return `Total price: ${totalPrice.toFixed(2)}`;
}


console.log(calculateTotalPrice(30, "Students", "Sunday"));  
console.log(calculateTotalPrice(40, "Regular", "Saturday"));
console.log(calculateTotalPrice(100, "Corporate", "Friday"));
