let product = ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'];
let order = ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'];

let items = {};

for (let i = 0; i < product.length; i += 2) {
    items[product[i]] = Number(product[i + 1]);
}

for (let i = 0; i < order.length; i += 2) {
    if (items[order[i]]) {
        items[order[i]] += Number(order[i + 1]);
    } else {
        items[order[i]] = Number(order[i + 1]);
    }
}

for (let product in items) {
    console.log(`${product} -> ${items[product]}`);
}