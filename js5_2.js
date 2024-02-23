let input = [
    'Moscow | 55.7522 | 37.6156',
    'Beijing | 39.913818 | 116.363625'
];

let output = input.map((info) => {
    let [town, latitude, longitude] = info.split(' | ');
    return {
        town,
        latitude: Number(latitude).toFixed(2),
        longitude: Number(longitude).toFixed(2)
    };
});

console.log(output);