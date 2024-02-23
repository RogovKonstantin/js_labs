function func(arr){
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if(arr[i] % 2 == 0){
            arr[i] += i;
        }
        else{
            arr[i] -= i;
        }
    }

    console.log(arr);
    console.log(sum);
    console.log(sumFunc(arr));
}

function sumFunc(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

func([5, 15, 23, 56, 35]);  
func([-5, 11, 3, 0, 2]);