function doubles(arr1, arr2) {
    for(let i = 0; i < arr1.length; i++) {
        if(arr2.indexOf(arr1[i]) > -1) {
            console.log(arr1[i]);
        }
    }
}

doubles(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
doubles(['R', 'u', 's', 's', 'i', 'a'], ['R', 'u', 't']);