class Product{
    constructor(name, count){
        this.name = name
        this.count = parseInt(count)
    } 
    add(num){
        this.count += parseInt(num)
    }
    toString(){
        return `${this.name} -> ${this.count}`
    }
}
const arr1 = [
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
    ]
const arr2 = [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
    ]

let products = new Map()
const arr = arr1.concat(arr2);

for (let i = 0; i < arr.length; i+=2){
    if (!products.has(arr[i]))
        products.set(arr[i], new Product(arr[i], arr[i+1]))
    else
        products.get(arr[i]).add(arr[i+1])
}
products.forEach(item => console.log(item.toString()));