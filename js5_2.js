class City{
    constructor(name, latitude, longitude){
        this.town = name
        this.latitude = parseFloat(latitude).toFixed(2)
        this.longitude = parseFloat(longitude).toFixed(2)
    }

    toString() {
        return `{ town: '${this.town}', latitude: '${this.latitude}', longitude: '${this.longitude}' }`;
    }
}

const cities = ['Moscow | 55.7522 | 37.6156',
            'Beijing | 39.913818 | 116.363625'];

for (c of cities){
    let data_array = c.split(" | ")
    console.log(new City(data_array[0], data_array[1], data_array[2]).toString())
}